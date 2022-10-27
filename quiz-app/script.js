const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active")
    let question = quiz.getQuestion();
    ui.showQuestion(question);
    ui.showTheNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length)
    ui.next_btn.classList.remove("show");
})

ui.next_btn.addEventListener("click", function () {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        let question = quiz.getQuestion();
        ui.showQuestion(question);
        ui.showTheNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length)
        ui.next_btn.classList.remove("show");
    } else {
        console.log("End of Quiz");
    }
});

function optionSelected(option) {
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if (question.answerCheck(answer)) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.next_btn.classList.add("show");

}

