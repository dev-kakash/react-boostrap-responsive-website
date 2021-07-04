import React from "react";
import web from "../images/pic1.jpg";

import Coomon from "./Coomon";

const About = () => {
  return (
    <div>
      <Coomon
        head="Welcome to"
        strong="About Page"
        text="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et accusamus perspiciatis sint harum eos numquam cum, ducimus sapiente illo deleniti sit hic fuga iure consectetur magnam quo, illum quas non?"
        btnName="Contact With Us"
        path="/contact"
        imgsrc={web}
      />
    </div>
  );
};

export default About;
