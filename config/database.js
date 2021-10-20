const mongoose = require('mongoose');
const { MONGO_URI } = process.env;

// connecting to DB
exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to DB.');
    })
    .catch((error) => {
      console.log('Database is not connected.');
      console.error(error)
    });
};
