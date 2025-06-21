// File: backend/routes/tasks.js
const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const tasks = await Task.find({ userId: req.params.userId });
  res.json(tasks);
});

router.post("/add", async (req, res) => {
  const { userId, text } = req.body;
  const task = new Task({ userId, text });
  await task.save();
  res.send("Task added");
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Task deleted");
});

module.exports = router;
