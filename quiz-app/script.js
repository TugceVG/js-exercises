function Question(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
}

Question.prototype.answerCheck = function (answer) {
    return this.correctAnswer === answer
}

let questions = [
    new Question("Hangisi Javascript paket yonetim uygulamasidir?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Npx" }, "c"),
    new Question("Hangisi .net paket yonetim uygulamasidir?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Npx" }, "b"),
]

function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}

const quiz = new Quiz(questions);

document.querySelector(".btn_start").addEventListener("click", function () {
    if (quiz.questions.length != quiz.questionIndex) {
        document.querySelector(".quiz_box").classList.add("active")
        console.log(quiz.getQuestion());
        quiz.questionIndex += 1;
    } else {
        console.log("End of Quiz");
    }
})