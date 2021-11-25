const express = require("express");
const questionsRouter = require('./routes/questions-router')

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.use("/questions", questionsRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});