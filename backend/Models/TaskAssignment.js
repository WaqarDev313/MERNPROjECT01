const mongoose = require("mongoose");

const TaskAssignmentSchema = new mongoose.Schema({
  task: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assignedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TaskAssignment", TaskAssignmentSchema);
