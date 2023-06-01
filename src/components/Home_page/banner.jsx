import React from "react";
import { NavLink } from "react-router-dom";
const Banner = ({ data }) => {
  return (
    <>
      <section id="banner">
        <div className="shape">
          <img src={data.image_shape} alt="" />
        </div>
        <div className="contain">
          <div className="flex">
            <div className="col col1">
              <div className="inner">
                <div className="sec_heading">
                  <h5>{data.title}</h5>
                  <h1>{data.heading}</h1>
                </div>
                <p>{data.para}</p>
                <div className="cta btn-box ">
                  <NavLink
                    href={data.btn_link_01}
                    className="webBtn lightBtn theme-btn-one"
                  >
                    {data.btn_01}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col col2">
              <div className="bg">
                <img src={data.image_b} alt="" />
              </div>
              <div className="image">
                <img src={data.image_bg} alt="" />
              </div>
              <div className="bg-2">
                <img src={data.image_bg_2} alt="" />
              </div>
              <div className="rellax" data-rellax-speed="1"></div>
            </div>
          </div>
        </div>
        <div className="b-shape">
          <img src={data.image_shape_2} alt="" />
        </div>
      </section>
    </>
  );
};
export default Banner;
