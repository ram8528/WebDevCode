// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements


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
    "gkjawgefebrucwgtuivtuivbtiutvbwbtu i34vbgkjawgegkjawgefebrucwgtuivbtiutvbwbtu i34vbgkjawgefebrucwgtuivbtiutvbwbtu i34vbgkjawgefebrucwgtuivbtiutvbwbtu i34vbgkjawgefebrucwgtuivbtiutvbwbtu i34vbgkjawgefebrucwgtuivbtiutvbwbtu i34vbgkjawgefebrucwgtuivbtiutvbwbtu i34vbgkjawgefebrucwgtuivbtiutvbwbtu i34vbgkjawgefebrucwgtuivbtiutvbwbtu i34vbgkjawgefebrucwgtuivbtiutvbwbtu i34vbhbvthbyt8vybtyvuoeytoinvnyvtywntyvtyt89y9v98yt8vy t3vnty8v3ytny"
)

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(paragraph);


