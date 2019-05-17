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
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbAAHyRcuzYbJ0cesW64Eqk4E34PJe_yGZgHjc2dMIYfEpCNOlg"
          }
        />
      </div>
      <div className="text">
        <h1>{props.name}</h1>
        <h4>{props.company}</h4>
        <p className="design">{props.designation}</p>
      </div>

      <div className="all">
        <p className="usual">Usually collaborated with</p>
        <p className="pics">
          {pics.map(data => (
            <img src={data.img} />
          ))}
        </p>
      </div>
      <div className="btn">
        <a href="#" className="fa fa-linkedin" />

        <a href="#" className="fa fa-dribbble" />

        <a href="#" className="fa fa-twitter" />
      </div>
    </div>
  );
};

export default Card;
