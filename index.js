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
const saltRounds = 10;



app.get("/users",  async (req, res) => {
    const user=await userSchema.find({})
    res.send(user)
});

app.post("/users", async (req, res) => {
  const { firstName, email, password } = req.body;
  //  const token = jwt.sign({ id: firstName }, 'must', { expiresIn: "1h" });

  try {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        const data = new userSchema({
          firstName,
          email,
          password: hash,
          token
        });

        await data.save(); // ✅ now inside async function
        emailverification(email)
        res.json({
          messsage: "done",
          data: data
        });
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong", details: error.message });
  }
});

app.listen(port, () => {
  console.log(`runing,${port}`);
});
