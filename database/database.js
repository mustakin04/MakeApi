const mongoose = require("mongoose");
const dbBase = () => {
  try{
    const uri=mongoose.connect(
      `mongodb+srv://mustakinhasan37:${process.env.DB_PASSWORd}@cluster0.5opdt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => console.log("db connect"));
  }catch(error){
    console.log("Mongodb connection fialed",error.mongoose)
  }
};
module.exports = dbBase;
