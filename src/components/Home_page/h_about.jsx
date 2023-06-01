import React from "react";
import { NavLink } from "react-router-dom";
const Habout = ({ data }) => {
  return (
    <>
      <section id="sec_about">
        <div className="contain">
          <div className="flex">
            <div className="col col1">
              <div className="image">
                <img src={data.image_b} alt="" />
              </div>
            </div>
            <div className="col col2">
              <div className="inner">
                <div className="sec_heading">
                  <h5>{data.title}</h5>
                  <h2>{data.heading}</h2>
                </div>
                <div className="content">
                  <p>{data.para_1}</p>
                  <p>{data.para_2}</p>
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
          </div>
        </div>
      </section>
    </>
  );
};
export default Habout;
