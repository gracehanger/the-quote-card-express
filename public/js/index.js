"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

async function getRandomImage() {
    const endpoint = "https://localhost:8080/api/v1/getRandomImage"; 
    try { //inside a try/catch block so we can handle errors 
        const response = await fetch(endpoint);  //make our fetch request to the endpoint and store the result of our request variable named "response"
        const returnedData = await response.json() //parse into a data format we can use. json() method of the Request interface reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON
        const receivedPhotoUrl = returnedData.data; //now an object with 2 key-value pairs: status code and data. The data value is the URL for the random image
        const imgDiv = document.querySelector(".background-img"); //changes the background-img div to flip through random unsplash images
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`; //update the backgroundImage property using camelCase
    } catch (error) {
        console.error(error)
    }
}

// getRandomImage();


/* const quotes = [
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

setTimeout(loopThroughQuotes, 3000); //wait for 3 seconds and then call the loopThroughQuotes function */


