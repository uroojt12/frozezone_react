import React from "react";
import { NavLink } from "react-router-dom";
const IceLst = ({ val }) => {
  return (
    <div className="inner">
      <div className="image">
        <img src={val.image} alt="" />
        <div className="inside">
          <div className="detail">
            <h3>{val.sub_heading}</h3>
            <p>{val.para}</p>
          </div>
          <div className="add">
            <NavLink href="?">
              <img src={val.add} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceLst;
