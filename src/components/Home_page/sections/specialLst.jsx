import React from "react";

const CountLst = ({ val }) => {
  return (
    <div class="col" key={val.id}>
      <div class="inner">
        <div class="image">
          <img src={val.image} alt="" />
        </div>
        <div class="content">
          <div class="price-1">
            <h4>{val.sub_heading}</h4>
            <p class="price">
              <a href={val?.link}>{val.price}</a>
            </p>
          </div>
          <div class="detail">
            <p>{val.para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountLst;
