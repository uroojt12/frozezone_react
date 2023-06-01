import React from "react";

const TestiLst = ({ val }) => {
  return (
    <div class="inner" key={val.id}>
      <div class="quote">
        <img src="images/icon-bg-5.png" alt="" />
        <div class="icon-1">
          <img src="images/icon-1.png" alt="" />
        </div>
      </div>
      <div class="content">
        <p>{val.para}</p>
      </div>
      <div class="detail">
        <div class="photo">
          <img src={val.image} alt="" />
        </div>
        <div class="name">
          <h4>{val.name}</h4>
          <p>{val.prof}</p>
        </div>
      </div>
    </div>
  );
};

export default TestiLst;
