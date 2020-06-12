const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  tags: {
    type: [String],
    require: false,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
  likes: {
    type: Number,
    require: false,
    default: 0,
  },
  interests: {
    type: Number,
    require: false,
    default: 0,
  },
  involved: [{ type: mongoose.Types.ObjectId, ref: "User", require: false }],
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
