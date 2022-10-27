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