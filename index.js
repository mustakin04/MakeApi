require('dotenv').config()
const express = require("express");
const cors=require("cors")
const userSchema = require("./model/userSchema");
const bcrypt = require("bcrypt");
const emailverification = require("./handler/emailverification");
var session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
var jwt = require('jsonwebtoken');
const middleware = require("./middleware/testMiddleware");
const route  = require("./route");
const dbBase = require("./database/database");


const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());

const store = new MongoDBStore({
  uri: `mongodb+srv://mustakinhasan37:${process.env.DB_PASSWORd}@cluster0.5opdt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`,
  collection: 'mySessions'
});

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  store: store,
  saveUninitialized: true,
  cookie: { secure:false },
   
}))
dbBase()
app.use(route)
app.listen(port, () => {
  console.log(`runing,${port}`);
});
