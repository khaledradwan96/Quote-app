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
    
    // get Quote with random number
    quoteOutput.innerHTML = quotes[random].theQuote;
    quoteAuthor.innerHTML = "~ " + quotes[random].theAuthor;
};

// 11 quotes with its author
var quotes = [
    {theQuote: "Be yourself; everyone else is already taken.", theAuthor: "Oscar Wilde"},
    {theQuote: "In three words I can sum up everything I've learned about life: it goes on.", theAuthor: "Robert Frost"},
    {theQuote: "So many books, so little time.", theAuthor: "Frank Zappa"},
    {theQuote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", theAuthor: "Mahatma Gandhi"},
    {theQuote: "A room without books is like a body without a soul.", theAuthor: "Marcus Tullius Cicero"},
    {theQuote: "To live is the rarest thing in the world. Most people exist, that is all.", theAuthor: "Oscar Wilde"},
    {theQuote: "If you tell the truth, you don't have to remember anything.", theAuthor: "Mark Twain"},
    {theQuote: "A friend is someone who knows all about you and still loves you.", theAuthor: "Elbert Hubbard"},
    {theQuote: "You only live once, but if you do it right, once is enough.", theAuthor: "Mae West"},
    {theQuote: "Be the change that you wish to see in the world.", theAuthor: "Mahatma Gandhi"},
    {theQuote: "Good friends, good books, and a sleepy conscience: this is the ideal life.", theAuthor: "Mark Twain"},
]

