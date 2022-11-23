function Question(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
}

Question.prototype.answerCheck = function (answer) {
    return this.correctAnswer === answer.replace(": ", "")
}

let questions = [
    new Question("What is the purpose of the <track>, and when should it be used?",
        {
            a: "The <track> tag is used for specifying subtitles. It is typically applied as a child of the <audio> and <video> tags",
            b: "The <track> tag is used for specifying subtitles. It is typically applied as a child of the <video> tag",
            c: "The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <video> tag",
            d: "The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <audio> and <video> tag",
        },
        "d"),
    new Question("What are the best examples of void elements?",
        {
            a: "<link><meta><title>",
            b: "<br><base><source>",
            c: "<input><br><p>",
            d: "<area><embed><strong>"
        },
        "b"),
    new Question("In HTML5, which tag or tags embed a webpage inside of a webpage ?",
        {
            a: "<iframe>, <frame>, and <frameset>",
            b: "<frame>",
            c: "<iframe>",
            d: "<frame> and <frameset>"
        },
        "c"),
    new Question("Where do `<header>` and `<footer>` tags typically occur ?",
        {
            a: "as children of `<body>, <article>, <aside>, and <section>` tags",
            b: "as children of `<body>, <article>, and <section>` tags",
            c: "as children of `<body>, <article>, <aside>, <nav>, and <section>` tags",
            d: "as children of `<body>, <article>, <table>, and <section>` tags"
        },
        "b"),
    new Question("What is the best way to apply bold styling to text ?",
        {
            a: "<strong>",
            b: "Use CSS",
            c: "<bold>",
            d: "<b>"
        },
        "a"),
    new Question("When is the `<link>` tag used ?",
        {
            a: "when linking style sheets, JavaScript, and icons for mobile apps",
            b: "when linking style sheets, favicons, and preloading assets",
            c: "when linking one webpage to another",
            d: "when linking style sheets, external URLs, and favicons"
        },
        "b"),
    new Question(`What should fill the two blanks in the HTML code below?
        <address ______ _____>
          <span itemprop="streetAddress">6410 Via Real</span><br />
          <span itemprop="addressLocality">Carpinteria</span>,
          <span itemprop="addressRegion">CA</span>
          <span itemprop="addressCode">93013</span>
        </address>`,
        {
            a: 'itemscope itemtype="http://schema.org/PostalAddress"',
            b: 'itemsref="http://schema.org/PostalAddress" itemid="address"',
            c: 'itemscope itemref="http://schema.org/PostalAddress"',
            d: 'itemid="address"` `itemtype="http://schema.org/PostalAddress"'
        },
        "a"),
    new Question("When should you use the `<aside>` element ?",
        {
            a: "when the content can be removed without detracting from the page's message",
            b: "for anything you want to move to the side, like a pull quote box, a sidebar, or an image with text wrapping around it",
            c: "for anything in parentheses",
            d: "for anything in a sidebar"
        },
        "a"),
    new Question("With which tags is the `<source>` element associated ?",
        {
            a: "<svg>, <picture>, <audio>, and <video>",
            b: "<picture>, <audio>, and <video>",
            c: "It is interchangeable with the`src` attribute, so any element which uses `src` may use`<source>`",
            d: "<audio> and <video>"
        },
        "b"),
    new Question("What is NOT a valid attribute for the`<textarea>` element ?",
        {
            a: "readonly",
            b: "max",
            c: "form",
            d: "spellcheck"
        },
        "b")
]