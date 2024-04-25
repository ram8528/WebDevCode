import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
          alt="Food Ordering Website"
          className="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJocQmL1Ti-qUPnBq1V1bCcQfYp3Wk8QdDC-wCGeK5Kw&s"
              alt=""
              className="cart-logo"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  info: {
    id: "201224",
    name: "Asha Tiffins",
    cloudinaryImageId: "n15vckntsiboiod3gpco",
    locality: "HSR Layout",
    areaName: "HSR",
    costForTwo: "₹200 for two",
    cuisines: [
      "South Indian",
      "North Indian",
      "Chinese",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.5,
    parentId: "236243",
    avgRatingString: "4.5",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 4,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "4.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-04-25 15:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {
    context: "seo-data-0d4f7a3d-e3d8-4bcf-be9e-b5ab131bbe10",
  },
  cta: {
    link: "https://www.swiggy.com/restaurants/asha-tiffins-layout-hsr-bangalore-201224",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const RestaurantCard = (props) => {
  // (props) => ({resName,cuisine,rating,time})
  // // const {resName,cuisine,rating,time} = (props);
  // return (
  //   <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
  //     <img src={props.img1} alt="" className="res-card1" />
  //     <h3>{props.resName}</h3>
  //     <h4>{props.cuisine}</h4>
  //     <h4>{props.rating}</h4>
  //     <h4>{props.time}</h4>
  //   </div>

  const { resData } = props;

  // Do it for better practices
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliverytime,
  } = resData?.info;

  return (
    // <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
    //   <img
    //     src={
    //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    //       resData.info.cloudinaryImageId
    //     }
    //     alt="cloudinaryImageId"
    //     srcset=""
    //   />
      
    //   <h3>{resData.info.name}</h3>
    //   <h4>{resData.info.cuisines.join(",")}</h4>
    //   <h4>{resData.info.avgRating}</h4>
    //   <h4>{resData.info.deliverytime}</h4>
    // </div>

    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt="cloudinaryImageId"
        srcset=""
      />
      
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliverytime}</h4>
    </div>


    
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">SearchBox</div>
      <div className="res-container">
        {/* <RestaurantCard img1= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" resName="Meghana Foods" cuisine ="Burger,North India, Asian" rating = "4.2 stars" time="23 minutes" />
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
        <RestaurantCard img1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iibcnez9kbwg3bgrc7gi" resName="Meghana Foods" cuisine ="Burger,North India, Asian" rating = "4.2 stars" time="23 minutes"/> */}
        
        <RestaurantCard resData = {resObj} />

      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
