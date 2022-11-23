function UI() {
    this.start_btn = document.querySelector(".start_btn"),
        this.next_btn = document.querySelector(".next_btn"),
        this.replay_btn = document.querySelector(".replay_btn"),
        this.quit_btn = document.querySelector(".quit_btn"),
        this.quiz_box = document.querySelector(".quiz_box"),
        this.score_box = document.querySelector(".score_box"),
        this.option_list = document.querySelector(".option_list"),
        this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
        this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
        this.time_text = document.querySelector(".time_text"),
        this.time_second = document.querySelector(".time_second"),
        this.time_line = document.querySelector(".time_line")
}

UI.prototype.showQuestion = function (questionItem) {
    // let question = `<span>${questionItem.questionText}</span>`;
    const question = document.createElement("span");
    question.textContent = questionItem.questionText;
    // let options = '';

    let questionText = document.querySelector(".question_text");
    while (questionText.firstChild) {
        questionText.removeChild(questionText.firstChild);
    }


    let element = document.querySelector(".option_list");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    for (let answer in questionItem.options) {
        // options +=
        //     `
        // <div class="option">
        // <span><b>${answer}</b>:${questionItem.options[answer]} </span>
        // </div>
        // `
        let option = document.createElement("div");
        option.classList.add("option");
        let optionContainer = document.createElement("span");
        let optionKeyText = document.createElement("b");
        let answerText = document.createElement("span");

        optionKeyText.textContent = `${answer}: `;
        answerText.textContent = questionItem.options[answer];
        // optionContainer.textContent = optionKeyText.textContent + questionItem.options[answer];
        optionContainer.appendChild(optionKeyText);
        optionContainer.appendChild(answerText);
        option.appendChild(optionContainer);
        document.querySelector(".option_list").appendChild(option);
    }

    // document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".question_text").appendChild(question);
    // this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for (let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.showTheNumberOfQuestion = function (lineOfQuestion, totalQuestion) {
    let tag = `<span class="badge bg-warning">${lineOfQuestion}/${totalQuestion}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.showTheScore = function (totalQuestions, correctAnswerCount) {
    let tag = `You have known ${correctAnswerCount} questions out of ${totalQuestions} questions.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}