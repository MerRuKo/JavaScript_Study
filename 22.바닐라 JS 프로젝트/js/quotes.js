const quotes = [
    {
        quote: "quote1",
        author: "author1",
    },
    {
        quote: "quote2",
        author: "author2",
    },
    {
        quote: "quote3",
        author: "author3",
    },
    {
        quote: "quote4",
        author: "author4",
    },
    {
        quote: "quote5",
        author: "author5",
    },
    {
        quote: "quote6",
        author: "author6",
    },
    {
        quote: "quote7",
        author: "author7",
    },
    {
        quote: "quote8",
        author: "author8",
    },
    {
        quote: "quote9",
        author: "author9",
    },
    {
        quote: "quote10",
        author: "author10",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quotesLength = quotes.length;

const todaysQuote = quotes[Math.floor(Math.random()*quotesLength)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// console.log(quotes[Math.floor(Math.random()*10)]); // 명언 숫자가 늘어나면 10부터 계속 늘려줘야 됨

// Math.ceil() : 올림
// Math.floor() : 내림
// Math.round() : 반올림