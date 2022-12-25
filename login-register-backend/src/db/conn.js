const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://shweta_rai:atlas12345@cluster0.l1blamj.mongodb.net/employee-registration", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err);
  })