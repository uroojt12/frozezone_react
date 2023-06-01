import React from "react";
import CatLst from "../Catering_page/catLst";
const Cat = ({ data }) => {
  return (
    <section id="sec_cat">
      <div className="contain">
        <div className="sec_content">
          <p>{data.box}</p>
        </div>
        {data.block.map((val) => {
          return <CatLst val={val} />;
        })}
      </div>
    </section>
  );
};

export default Cat;
