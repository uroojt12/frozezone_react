import React from "react";

export default function WorkTab1({ product }) {
  return (
    <>
      <div className="flex">
        {product.map((val) => {
          return (
            <div className="col">
              <div className="inner">
                <a href="work-detail.php">
                  <div className="image">
                    <img src={val.image} alt="" />
                  </div>
                </a>

                <div className="text">
                  <a href="work-detail.php">
                    <h4> {val.name} </h4>
                  </a>
                  <div className="category">{val.designation}</div>
                  <p> {val.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
