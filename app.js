const path = require("path");
const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const nodemailer = require("nodemailer");

const auth = require("./middleware/auth");
const graphqlSchema = require("./grphql/schema");
const graphqlResolver = require("./grphql/resolver");
const User = require("./models/user");
const Pendaftar = require("./models/pendaftar");

const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://genbisulsel.cyou");
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(auth);

app.use(
  "/public",
  /* try to autententicated but cant work
  (req, res, next) => {
    if (!req.isAuth) {
      throw new Error("Not authenticated!");
    }
  }, */
  express.static(path.join(__dirname, "public"))
);

app.get("/test", (req, res, next) => {
  res.status(200).json({ message: "bisami ini, test success " });
})

const storageAll = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "ktm") {
      cb(null, "public/ktm");
    } else if (file.fieldname === "transkip") {
      cb(null, "public/transkip");
    } else if (file.fieldname === "foto") {
      cb(null, "public/foto");
    } else if (file.fieldname === "ktp") {
      cb(null, "public/ktp");
    }  else if (file.fieldname === "rekening") {
      cb(null, "public/rekening");
    } else if (file.fieldname === "beasiswaLain") {
      cb(null, "public/blain");
    } else if (file.fieldname === "rekomendasi") {
      cb(null, "public/rekomendasi");
    } else if (file.fieldname === "mampu") {
      cb(null, "public/mampu");
    } else if (file.fieldname === "rekomendasi2") {
      cb(null, "public/rekomendasi2");
    } else if (file.fieldname === "toeflFile") {
      cb(null, "public/toefl");
    } else {
cb(null, "public/toefl");

}
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
  },
});

const filterAll = (file, cb) => {
  if (
    file.fieldname === "ktm" ||
    file.fieldname === "ktp" ||
    file.fieldname === "foto"
  ) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  } else {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
};

app.use(
  "/file",
  multer({
    storage: storageAll,
    limits: {
      fileSize: 1024 * 512,
    },
    fileFilter: (req, file, cb) => {
      filterAll(file, cb);
    },
  }).fields([
    {
      name: "rekomendasi",
      maxCount: 1,
    },
    {
      name: "beasiswaLain",
      maxCount: 1,
    },
    {
      name: "foto",
      maxCount: 1,
    },
    {
      name: "ktp",
      maxCount: 1,
    },
    {
      name: "rekening",
      maxCount: 1,
    },
    {
      name: "transkip",
      maxCount: 1,
    },
    {
      name: "mampu",
      maxCount: 1,
    },
    {
      name: "ktm",
      maxCount: 1,
    },
  ]),
  async (req, res, next) => {
    if (!req.isAuth) {
      throw new Error("Not authenticated!");
    }
    if (!req.files) {
      return res.status(200).json({ message: "No file provided!" });
    }
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        const error = new Error("Invalid user.");
        error.code = 401;
        throw error;
      }
      const pendaftar = new Pendaftar({
        ...pendaftarInput,
      });
      const createdPendaftar = await pendaftar.save();
      user.pendaftar = createdPendaftar;
      await user.save();
    } catch (error) {
      return {
        id : error
      }
      console.log(error);
    }
  //  if (req.body.oldPath) {
//      clearImage(req.body.oldPath);
  //  }
    return res.status(201).json({
      message: "File stored.",
      ktm: req.files.ktm[0].path,
      ktp: req.files.ktp[0].path,
      foto: req.files.foto[0].path,
      rekening: req.files.rekening[0].path,
      rekomendasi: req.files.rekomendasi[0].path,
      mampu: req.files.mampu[0].path,
      transkip: req.files.transkip[0].path,
    });
  }
);

//to unggulan
app.put(
  "/unggulan",
  multer({
    storage: storageAll,
    limits: {
      fileSize: 1024 * 512,
    },
    fileFilter: (req, file, cb) => {
      filterAll(file, cb);
    },
  }).fields([
    {
      name: "rekomendasi",
      maxCount: 1,
    },
    {
      name: "foto",
      maxCount: 1,
    },
    {
      name: "ktp",
      maxCount: 1,
    },
    {
      name: "rekening",
      maxCount: 1,
    },
    {
      name: "transkip",
      maxCount: 1,
    },
    {
      name: "toeflFile",
      maxCount: 1,
    },
    {
      name: "rekomendasi2",
      maxCount: 1,
    },
    {
      name: "ktm",
      maxCount: 1,
    },
  ]),
  (error, req, res, next) => {
    console.log(error);
    if (!req.isAuth) { 
      throw new Error("Not authenticated!");
    }
    if (!req.files) {
      return res.status(200).json({ message: "No file provided!" });
    }
    if (req.body.oldPath) {
      clearImage(req.body.oldPath);
    }
    return res.status(201).json({
      message: "File stored.",
      ktm: req.files.ktm[0].path,
      ktp: req.files.ktp[0].path,
      foto: req.files.foto[0].path,
      rekening: req.files.rekening[0].path,
      toeflFile: req.files.toeflFile[0].path,
      rekomendasi: req.files.rekomendasi[0].path,
      rekomendasi2: req.files.rekomendasi2[0].path,
      transkip: req.files.transkip[0].path,
    });
  }
);

//eamial
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fadullah2021@gmail.com",
    pass: "Dullah2021",
  },
});

const mailOptions = {
  from: "fadullah2021@gmail.com",
  to: "salahuddin18d@student.unhas.ac.id",
  subject: "Invoices due",
  text: "Dudes, we really need your money.",
};

app.use("/email", (req, res, next) => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return next();
    } else {
      console.log("Email sent: " + info.response);
      return res.status(201).json({ message: "Email sent: " + info.response });
    }
  });
});

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
const url = 'mongodb://127.0.0.1:27017/genbi';
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true}
  //  `mongodb+srv://${process.env.MONGGODB_USER_PASSWORD}@cluster0.enucz.mongodb.net/genbi?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(process.env.PORT || 8081);
  })
  .catch((err) => console.log(err));

const clearImage = (filePath) => {
  filePath = path.join(__dirname, "..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
