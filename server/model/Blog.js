const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    // image: {
    //   data: Buffer,
    //   contentType: String,
    // },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Blog = mongoose.model("blogs", BlogSchema);
