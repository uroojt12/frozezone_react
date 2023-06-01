import React from "react";
import { NavLink } from "react-router-dom";
const Sub_banner = ({ data }) => {
  return (
    <>
      <section id="sub_banner">
        <div className="shape-1">
          <img src="images/h-shape.png" alt="" />
        </div>
        <div className="shape">
          <img src="images/sub-3.png" alt="" />
        </div>
        <div className="contain">
          <div className="inner">
            <h1>{data.heading}</h1>
            <p>
              <NavLink to="">Home</NavLink> &gt; {data.para}
            </p>
          </div>
        </div>
        <div className="b-shape">
          <img src="images/sub-2.png" alt="" />
        </div>
      </section>
    </>
  );
};
export default Sub_banner;
