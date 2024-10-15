const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      // console.log(`mongod connected with server: ${data.connection.host}`);
      console.log(`Database connected successfully 🥳🚀🚀🎉`)
    });
};

module.exports = connectDatabase;
