"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

const quotes = [
    { 
        quote: "All hands! Abandon ship!",
        author: "Captain Picard",
    },
    {
        quote: "Doh!",
        author: "Homer Simpson",
    },
    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0; //declaring a variable to track where we are at while looping through an array of quotes
    setInterval(() => { //instead of a for loop, the setInterval function is looping through the iterations
        if (quoteIndex < quotes.length) { //callback function is an anonymous function that checks if our quoteIndex is less than the length of the quotes array
            elements.quote.textContent = quotes[quoteIndex].quote; //if it is, we assign the respective quote and author's elements' textContent to the values of the current quote index
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++; //increment to the next quote
        } else {
            quoteIndex = 0; //process is repeated
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000); //wait for 3 seconds and then call the loopThroughQuotes function
