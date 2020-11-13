const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique:true
    },
    parentId: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = category = mongoose.model("category", categorySchema);
