const path = require("path");
const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");

const auth = require("./middleware/auth");
const graphqlSchema = require("./grphql/schema");
const graphqlResolver = require("./grphql/resolver");

const app = express();

const ktmStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/ktm");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + new Date().toISOString() + path.extname(file.originalname));
  },
});

const ktmFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
app.use(bodyParser.json()); // application/json
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(auth);

app.put(
  "/post-ktm",
  multer({ storage: ktmStorage, fileFilter: ktmFilter }).single("ktm"),
  (req, res, next) => {
    if (!req.isAuth) {
      throw new Error("Not authenticated!");
    }
    if (!req.file) {
      return res.status(200).json({ message: "No file provided!" });
    }
    if (req.body.oldPath) {
      clearImage(req.body.oldPath);
    }
    return res
      .status(201)
      .json({ message: "File stored.", filePath: req.file.path });
  }
);

//route yang sesunguhnya
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    formatError(err) {
      if (!err.originalError) {
        return err;
      }
      const data = err.originalError.data;
      const message = err.message || "An error occurred.";
      const code = err.originalError.code || 500;
      return { message: message, status: code, data: data };
    },
  })
);
//err handling
//always jika adda err yang di next
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//make the server
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGGODB_USER_PASSWORD}@cluster0.enucz.mongodb.net/genbi?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(process.env.PORT || 8080);
  })
  .catch((err) => console.log(err));

const clearImage = (filePath) => {
  filePath = path.join(__dirname, "..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
