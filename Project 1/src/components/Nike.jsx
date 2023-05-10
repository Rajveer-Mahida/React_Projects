import React from "react";
import "../CSS/App.css";
const Nike = () => {
  return (
    <main className="nike container">
      <div className="nike-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="shopping-btn">
          <button className="shopnow-btn">Shop Now</button>
          <button className="catagory-btn">Catagory</button>
        </div>

        <div className="shopping-site">
          <p>Also Available On</p>
          <div className="shop-img">
            <img src="./images/flipkart.png" alt="flipkart" />
            <img src="./images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="nike-shoe">
        <img src="./images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};

export default Nike;
