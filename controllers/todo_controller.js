const Task = require('../models/todo_model');

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Edit an existing task
exports.editTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
  
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      res.status(200).json({
        status: "Success",
        message: "Task deleted successfully"
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

// Mark a task as done
exports.markTaskAsDone = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    if (new Date() > new Date(task.dueDate)) {
      return res.status(400).json({ message: 'Cannot mark overdue task as done' });
    }

    task.isDone = true;
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
