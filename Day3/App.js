import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" alt="Food Ordering Website" className="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJocQmL1Ti-qUPnBq1V1bCcQfYp3Wk8QdDC-wCGeK5Kw&s" alt="" className="cart-logo" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) =>{
  return (
    <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
      <img src={props.img1} alt="" className="res-card1" />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>      
      <h4>{props.rating}</h4>
      <h4>{props.time}</h4>
    </div>
  );
};

const Body = () =>{
  return (
    <div className="body">
      <div className="Search">SearchBox</div>
      <div className="res-container">
        <RestaurantCard img1= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" resName="Meghana Foods" cuisine ="Burger,North India, Asian" rating = "4.2 stars" time="23 minutes" />
        <RestaurantCard img1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" resName="KFC" cuisine ="Coffee,North India, Asian" rating = "4.2 stars" time="23 minutes"/>
        <RestaurantCard img1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/76795500-8115-430e-8634-fa86dc2be090_39292.JPG" resName="Chinese Wok" cuisine ="Chowmein,North, Asian" rating = "4.2 stars" time="23 minutes"/>
        <RestaurantCard img1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iibcnez9kbwg3bgrc7gi" resName="Pizza Hut" cuisine ="Pizza,North, Asian" rating = "4.2 stars" time="23 minutes"/>
        <RestaurantCard img1= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" resName="KFC" cuisine ="Coffee,North India, Asian" rating = "4.2 stars" time="23 minutes"/>
        <RestaurantCard img1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iibcnez9kbwg3bgrc7gi" resName="Pizza Hut" cuisine ="Pizza,North, Asian" rating = "4.2 stars" time="23 minutes" />
        <RestaurantCard img1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/59b64f9bb67234987652437f21d379c2" resName="KFC" cuisine ="Coffee,North India, Asian" rating = "4.2 stars" time="23 minutes"/>
        <RestaurantCard img1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iibcnez9kbwg3bgrc7gi" resName="Pizza Hut" cuisine ="Olive Pizza,North, Asian" rating = "4.2 stars" time="23 minutes" />
        <RestaurantCard img1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/76795500-8115-430e-8634-fa86dc2be090_39292.JPG" resName="Meghana Foods" cuisine ="Burger,North India, Asian" rating = "4.2 stars" time="23 minutes" />
        <RestaurantCard img1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/59b64f9bb67234987652437f21d379c2" resName="KFC" cuisine ="Coffee,North India, Asian" rating = "4.2 stars" time="23 minutes"/>
        <RestaurantCard img1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9eec061a16f144a434503dfaa984a933" resName="Pizza Hut" cuisine ="Pizza,North, Asian" rating = "4.2 stars" time="23 minutes"/>
        <RestaurantCard img1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iibcnez9kbwg3bgrc7gi" resName="Meghana Foods" cuisine ="Burger,North India, Asian" rating = "4.2 stars" time="23 minutes"/>
      </div>
    </div>
  );
};

const AppLayout = ()=>{
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
