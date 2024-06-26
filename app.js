const express = require('express');
const app = express();
const quizRouter = require('./routes/quiz');

app.use(express.json());
app.use('/quiz', quizRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
