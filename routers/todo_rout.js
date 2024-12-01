const express = require('express');
const taskController = require('../controllers/todo_controller');

const router = express.Router();

router.post('/', taskController.createTask);
router.patch('/:id', taskController.editTask);
router.delete('/:id', taskController.deleteTask);
router.patch('/:id/done', taskController.markTaskAsDone);

module.exports = router;
