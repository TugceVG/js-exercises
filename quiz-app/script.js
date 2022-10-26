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
    document.querySelector(".quiz_box").classList.add("active")
    let question = quiz.getQuestion();
    showQuestion(question);
})

document.querySelector(".next_btn").addEventListener("click", function () {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        let question = quiz.getQuestion();
        showQuestion(question);
    } else {
        console.log("End of Quiz");
    }
});

function showQuestion(questionItem) {
    let question = `<span>${questionItem.questionText}</span>`;
    let options = '';

    for (let answer in questionItem.options) {
        options +=
            `
        <div class="option">
        <span><b>${answer}</b>:${questionItem.options[answer]} </span>
        </div>
        `
    }
    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = options;

}