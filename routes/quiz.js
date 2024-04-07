const express = require('express');
const router = express.Router();
const { getQuestions, checkAnswers } = require('../controllers/quizController');

router.get('/questions', getQuestions);
router.post('/submit', checkAnswers);

module.exports = router;
