import React, { useState } from "react";
import SubBanner from "../common_section/sub-banner";
import Wproducts from "../Multi_form/multistep";

export default function Multi_form() {
  const [step, setStep] = useState(0);
  const changeTab = (type) => {
    setStep(type);
  };
  const multi_obj = {
    banner: {
      para: "Direct Bid",
      heading: "Queries About Order ",
    },
    Quries: {
      heading:
        "Here are Some Queries to Confirm What Type of Work Customer Actullay Want",
      btn_1: "Previous",
      btn_2: "Next",
      first: [
        {
          id: 1,
          title: "Paint Work",
        },
        {
          id: 2,
          title: "Paint Work",
        },
        {
          id: 3,
          title: "Paint Work",
        },
        {
          id: 4,
          title: "Paint Work",
        },
      ],
    },
  };

  return (
    <main>
      <SubBanner data={multi_obj?.banner} />
      <Wproducts data={multi_obj?.Quries} type={step} handleTab={changeTab} />
    </main>
  );
}
