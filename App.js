// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements


import React from "react";
import ReactDOM from "react-dom/client";

const heading  =  React.createElement(
    "h1",
    {
        id:"title1",
        // style:{
        //     background:"cyan",
        // },
        className: "title1"
    },
    "Heading Content is Here"
);

const paragraph = React.createElement(
    "p",
    {
        id: "para1"
    },
    "Hii This is Ramdeep Kesharwani 🔥🚀🚀. I am a Passionate Full Stack Web Developer🫤 as well as Software Developer"
)

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(paragraph);


