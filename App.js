import React from "react";
import ReactDOM from "react-dom/client";

/*const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "This is React Lecture 3🚀🚀🚀🚀🚀🚀🚀🚀"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/// Now this is a JSX Code While the above one is purely React

//const jsxHeading = <h1 id="heading">This is React Lecture 3🚀🚀🚀🚀🚀🚀🚀🚀</h1>;
const jsxHeading = (
  <h1 className="heading">This is React Lecture 3🚀🚀🚀🚀🚀🚀🚀🚀</h1>
);
// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//            -----   React Functional Component

const HeadingComponent = () => {
  return <h1>Ramdeep Kesharwani😍😍😍</h1>;
};

// root.render(<HeadingComponent/>);

//          ------ JSX with Normal JS FUnction e\without arrow function but this is not a good approach

const tit = <h1>Ram9395</h1>;

const Title = function () {
  return (
    <div>
      {tit}
      <h1 className="head">Coding Stars HII Boss</h1>
      <HeadingComponent />
    </div>
    // In this code we have done 3 task
    // 1. We have invoked a function inside jsx TItle
    // 2. We have given a h1 tag inside div from our Side
    // 3. RFC inside RFC
  );
};

// root.render(<Title/>);

const num = 1000;
const NewComponent = () => {
  return (
    <div id="container">
      {/* <NewComponent/> */}
      <h2>{num}</h2>
      <h3>{290 + 98 - 100}</h3>
      <h1>Ramdeep is Here Welcome Coders You are with a billionare</h1>
    </div>
  );
};

root.render(<NewComponent />);
