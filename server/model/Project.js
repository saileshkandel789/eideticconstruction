const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
    },
    category: [
      {
        type: String,
      },
    ],

    location: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Project = mongoose.model("project", ProjectSchema);
