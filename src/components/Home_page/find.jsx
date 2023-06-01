import React from "react";
import FindLst from "./sections/findLst";
const Find = ({ data }) => {
  return (
    <>
      <section id="sec_find">
        <div className="contain">
          <div className="sec_heading">
            <h5>{data.title}</h5>
            <h2>{data.heading}</h2>
          </div>
          <div className="flex">
            {data.block.map((val) => {
              return <FindLst val={val} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Find;
