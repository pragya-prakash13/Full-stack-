// File: backend/models/Task.js
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  userId: String,
  text: String,
});

module.exports = mongoose.model("Task", TaskSchema);
