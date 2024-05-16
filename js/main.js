var quoteOutput = document.getElementById("quoteOutput");
var quoteAuthor = document.getElementById("quoteAuthor");

function getQuote() {
    // get Random Number
    var min = 0;
    var max = 10;
    var random;

    do {
        random = Math.floor(Math.random() * (max - min)) + min;
    } while (random === getQuote.last);
    getQuote.last = random;
    console.log("Random Number is => " + random); // Just to check 
};

