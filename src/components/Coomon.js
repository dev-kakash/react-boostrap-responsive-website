import React from "react";
import web from "../images/pic1.jpg";
import { Link } from "react-router-dom";
const Coomon = ({ head, strong, text, btnName, path, imgsrc }) => {
  return (
    <div>
      <section id="header" className="d-flex ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row ">
                <div className="col-md-6 pt-5  order-2 order-lg-1 d-flex  flex-column justify-content-center ps-5">
                  <h1>
                    {head}{" "}
                    <storage className="text-danger highlight">
                      {strong}
                    </storage>
                  </h1>
                  <h4 className="my-3">{text}</h4>
                  <div className="mt-3 ">
                    <Link className="btn btn-warning" to={path}>
                      {btnName}
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 pt-5  order-1 order-lg-2 ps-5 ">
                  <img src={imgsrc} alt="banner" className="banner-one" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
Coomon.defaultProps = {
  head: "Hello!! I am ",
  strong: "Akash",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit  Ullam molestias reiciendis non vero magnam, id sapiente perferendis cupiditate porro ad quaerat ut laborum obcaecati aliquid. Laudantium doloremque tempora placea",
  btnName: "Get Started",
  path: "/",
  imgsrc: { web },
};

export default Coomon;
