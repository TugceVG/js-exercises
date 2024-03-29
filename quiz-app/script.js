const quiz = new Quiz(questions);
const ui = new UI();

ui.start_btn.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
    startTimer(89);
    startTimerLine();
    let question = quiz.getQuestion();
    ui.showQuestion(question);
    ui.showTheNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click", function () {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(89);
        ui.time_text.textContent = "Remaining time";
        let question = quiz.getQuestion();
        ui.showQuestion(question);
        ui.showTheNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length);
        ui.next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.showTheScore(quiz.questions.length, quiz.countOfCorrectAnswer);
    }
});

ui.quit_btn.addEventListener("click", function () {
    window.location.reload();
});

ui.replay_btn.addEventListener("click", function () {
    quiz.questionIndex = 0;
    quiz.countOfCorrectAnswer = 0;
    ui.start_btn.click();
    ui.score_box.classList.remove("active");
});

function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if (question.answerCheck(answer)) {
        quiz.countOfCorrectAnswer += 1;
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

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.time_second.textContent = time;
        time--;

        if (time < 0) {
            clearInterval(counter);
            ui.time_text.textContent = "End of time";
            let answer = quiz.getQuestion().correctAnswer;
            for (let option of ui.option_list.children) {

                if (option.querySelector("span b").textContent.replace(': ', '') == answer) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }

                option.classList.add("disabled");
            }
            ui.next_btn.classList.add("show");
        }
    }
}

let counterLine;
function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval(timer, 100);

    function timer() {
        line_width += (550 / 90) / 10;
        ui.time_line.style.width = line_width + "px";

        if (line_width > 549) {
            clearInterval(counterLine);
        }
    }
}

