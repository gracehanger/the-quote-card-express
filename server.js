"use strict";

const express = require("express");
const app = express();

const port = 8080;

require("dotenv").config(); //we are able to load our existing .env file into process.env by default
const cors = require("cors"); //import out cors pacakge and tell our express app to use it

const corsOptions = {
    origin: `http://localhost:${port}`
}

app.use(cors(corsOptions));

app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

async function getRandomImage() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`; //declare a variable to hold the endpoint that we will be touching with our fetch request; clean and readable with string interpolation
    try { //inside a try/catch block so we can handle errors 
        const response = await fetch(endpoint);  //make our fetch request to the endpoint and store the result of our request variable named "response"
        const returnedData = await response.json() //parse into a data format we can use. json() method of the Request interface reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON
        const receivedPhotoUrl = returnedData.urls.regular; //accesses the regular img in the dev tools under urls
        return receivedPhotoUrl;
    } catch (error) {
        console.error(error)
    }
}

app.use("/api/v1/getRandomImage", async (request, response) => { //creating a route or endpoint on our backend with app.use()
    //first argument is the route, second argument is a callback function that takes the response, sets status code of 200, and sends the response in JSON Format
    response.status(200).json({
        status: 200,
        data: await getRandomImage(),
    });
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});