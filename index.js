require('dotenv').config()
const express = require("express");
const cors=require("cors")
const userSchema = require("./model/userSchema");
const bcrypt = require("bcrypt");
const emailverification = require("./handler/emailverification");
var jwt = require('jsonwebtoken');
const middleware = require("./middleware/testMiddleware");
const route  = require("./route");
const dbBase = require("./database/database");
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());
app.use(route)
dbBase()

app.listen(port, () => {
  console.log(`runing,${port}`);
});
