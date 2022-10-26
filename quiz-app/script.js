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
    document.querySelector(".next_btn").classList.remove("show");
})

document.querySelector(".next_btn").addEventListener("click", function () {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        let question = quiz.getQuestion();
        showQuestion(question);
        document.querySelector(".next_btn").classList.remove("show");
    } else {
        console.log("End of Quiz");
    }
});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function showQuestion(questionItem) {
    let question = `<span>${questionItem.questionText}</span>`;
    let options = '';

    console.log(questionItem.options)

    for (let answer in questionItem.options) {
        options +=
            `
        <div class="option">
        <span><b>${answer}</b>:${questionItem.options[answer]} </span>
        </div>
        `
    }

    document.querySelector(".question_text").innerHTML = question;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");

    for (let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(option) {
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if (question.answerCheck(answer)) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    for (let i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }

    document.querySelector(".next_btn").classList.add("show");

}