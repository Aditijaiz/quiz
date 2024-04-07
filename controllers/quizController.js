const questions = require('../data/questions.json');

exports.getQuestions = (req, res) => {
    res.json(questions);
};

exports.checkAnswers = (req, res) => {
    const userAnswers = req.body;
    let score = 0;
    const result = [];

    for (const question of questions) {
        const correctAnswer = question.answer;
        const userAnswer = userAnswers[question.id];

        if (correctAnswer === userAnswer) {
            score++;
            result.push({ id: question.id, correct: true });
        } else {
            result.push({ id: question.id, correct: false, correctAnswer });
        }
    }

    res.json({ score, result });
};
