const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { graphqlHTTP} = require('express-graphql')

const graphqlSchema = require('./grphql/schema')
const graphqlResolver = require('./grphql/resolver')

const app = express();


app.use(bodyParser.json()); // application/json
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//route yang sesunguhnya
app.use('/graphql', graphqlHTTP({
  schema : graphqlSchema,
  rootValue : graphqlResolver
}))
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
