import React from "react";
import { NavLink } from "react-router-dom";
import SpecialLst from "./sections/specialLst";
const Special = ({ data }) => {
  return (
    <>
      <section id="sec_special">
        <div className="contain">
          <div className="sec_heading">
            <h5>Quick picks</h5>
            <h2>Our Special Scope</h2>
          </div>
          <div className="flex">
            {data.block.map((val) => {
              return <SpecialLst val={val} />;
            })}
          </div>
          <div className="cta btn-box text-center">
            <NavLink to="flavor.php" className="webBtn theme-btn-one">
              Learn More
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
export default Special;
