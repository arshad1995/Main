import React from "react";
import "./Card.css";
let pics = [
  {
    img:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?h=350&auto=compress&cs=tinysrgb"
  },
  {
    img:
      "https://pbs.twimg.com/profile_images/980145664712740864/aNWjR7MB_400x400.jpg"
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2aI9JzurL92T5EZ6c3Fq1Xnc7sIXVNZMV1WIOb0G_ILOFXvqS"
  },
  { img: "https://www.w3schools.com/w3css/img_lights.jpg" }
];

const Card = props => {
  return (
    <div className="main">
      <div className="profile">
        <img
          src={"https://avatars1.githubusercontent.com/u/21080254?s=460&v=4"}
        />
        <div className="text">
          <h1>{"Salman Khan"}</h1>
          <h4>{"Xelpmoc"}</h4>
          <p className="design">{"Developer"}</p>
        </div>
      </div>

      <p className="usual">Usually collaborated with</p>
      <p className="pics">
        {pics.map(data => (
          <img src={data.img} />
        ))}
      </p>

      <div className="btn">
        <a href="#" className="fa fa-linkedin" />

        <a href="#" className="fa fa-dribbble" />

        <a href="#" className="fa fa-twitter" />
      </div>
    </div>
  );
};

export default Card;
