import React from "react";
import Card from "./Card";
import Sdata from "../Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5 ">
        <h1 className="text-center mb-5">Our Services</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-lg-8 col-10 mx-auto ">
              <div className="row gx-5 gy-4">
                {Sdata.map((data, ind) => {
                  return (
                    <Card key={ind} imgsrc={data.imgscr} title={data.title} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
