import React from "react";
import { NavLink } from "react-router-dom";
const Scope = ({ data }) => {
  return (
    <>
      <section id="sec_scope">
        <div className="shape">
          <img src={data.image_1} alt="" />
        </div>
        <div className="overlay"></div>
        <div className="contain">
          <div className="inner">
            <div className="sec_heading">
              <h5>{data.title}</h5>
              <h2>{data.heading}</h2>
            </div>
            <div className="cta btn-box ">
              <NavLink
                href={data.btn_link_01}
                className="webBtn colorBtn theme-btn-one"
              >
                {data.btn_01}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="image-s">
          <img src={data.image_2} alt="" />
        </div>
        <div className="b-shape">
          <img src={data.image_3} alt="" />
        </div>
      </section>
    </>
  );
};
export default Scope;
