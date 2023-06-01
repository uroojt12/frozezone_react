import React from "react";

const FindLst = ({ val }) => {
  return (
    <div class="col">
      <div class="back-bg">
        <img src={val.image_2} alt="" />
      </div>
      <div class="inner">
        <div class="count-box">
          <img src={val.image} alt="" />
        </div>
        <div class="content">
          <h4>{val.sub_heading}</h4>
          <p>{val.para}</p>
          <div class="cta">
            <a href={val.btn_link} class="webBtn">
              {val.btn}
            </a>
          </div>
        </div>
      </div>
      <div class="back-bg-1">
        <img src={val.image_2} alt="" />
      </div>
    </div>
  );
};

export default FindLst;
