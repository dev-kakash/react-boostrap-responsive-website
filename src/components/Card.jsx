import React from "react";
import { Link } from "react-router-dom";
import web from "../images/pic2.jpg";

const Card = ({ imgsrc, title }) => {
  return (
    <>
      <div className="col-md-4 col-13 mx-auto">
        <div className="row">
          <div className="card ">
            <img
              className="card-img-top"
              src={imgsrc}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
