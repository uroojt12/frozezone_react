import React from "react";

const QualityLst = ({ val }) => {
  return (
    <div class="col" key={val}>
      <div class="image">
        <img src={val.image} alt="" />
      </div>
      <div class="img-cntnt">
        <h4>{val.sub_heading}</h4>
        <p>{val.para}</p>
      </div>
    </div>
  );
};

export default QualityLst;
