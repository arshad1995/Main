import React from "react";
import "./Image.css";

const Image = props => {
  return (
    <div className="all">
      <div className="image">
        <img
          src={
            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
        />
        <h5 className="content2">{"Domestic"}</h5>

        <div className="content1">
          <h2>{"Banerghatta Forest"}</h2>
          <i className="fa fa-map-marker">
            {" "}
            {"Banerghatta Road,  Hulimavu, Bengaluru, Karnataka"}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Image;
