import React from "react";
import QualityLst from "../Contact_page/section/qualityLst";

const Quality = ({ data }) => {
  return (
    <section class="cntct-grid">
      <div class="contain">
        <div class="flex">
          {data.block.map((val) => {
            return <QualityLst val={val} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Quality;
