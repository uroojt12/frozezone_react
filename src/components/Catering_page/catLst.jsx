import React from "react";
import { NavLink } from "react-router-dom";
const CatLst = ({ val }) => {
  return (
    <div className="flex">
      <div className="col col1">
        <div className="inner">
          <div className="sec_heading">
            <h2>{val.heading}</h2>
          </div>
          <div className="content">
            <p>{val.para}</p>
            <ul className="list_it">
              <li>onsite catering</li>
              <li>custom ice cream cakes</li>
              <li>dairy-free options</li>
              <li>housemade waffle cones &amp; sauces </li>
              <li>over 30 flavors to choose from!</li>
            </ul>
            <div className="cta btn-box ">
              <NavLink
                href="about.php"
                className="webBtn colorBtn theme-btn-one"
              >
                {val.btn}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col col2">
        <div className="image">
          <img src={val?.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CatLst;
