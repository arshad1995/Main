import React from "react";
import "./NewsCard.css";

const NewsCard = props => {
  return (
    <div className="container">
      <img
        src={
          "https://smedia2.intoday.in/btmt/images/stories/apple_660_071816125132_080316050918.jpg"
        }
      />

      <div className="content">
        <p className="heading">
          Duty on imported apples can't be more than 50%
        </p>
        <p className="brief">
          Government has said there is no scope for India to increase the import
          duty on apples without further negotiations under the WTO regime.
        </p>
        <p className="detail">KNOW MORE</p>
      </div>
    </div>
  );
};

export default NewsCard;
