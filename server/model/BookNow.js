const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookNowSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    message: {
      type: String,
    },
    location: {
      type: String,
    },
    service: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = BookNow = mongoose.model("BookNow", BookNowSchema);
