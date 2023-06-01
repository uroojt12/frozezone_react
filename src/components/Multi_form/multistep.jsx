import React from "react";
import Step1 from "./section/step_1";
import Step2 from "./section/step_2";
import Step3 from "./section/step_3";
import Step4 from "./section/step_4";

export default function Wproducts({ data, type, handleTab }) {
  return (
    <div>
      <section class="bit-sec">
        <div class="contain">
          <div class="bit-form">
            <div class="quote_BIT">
              <h3>{data.heading}</h3>
            </div>
            <div class="frst-q">
              <form action="" method="">
                {type === 0 ? (
                  <Step1 type={type} handleTab={handleTab} />
                ) : type === 1 ? (
                  <Step2 type={type} handleTab={handleTab} />
                ) : type === 2 ? (
                  <Step3 type={type} handleTab={handleTab} />
                ) : type === 3 ? (
                  <Step4 type={type} handleTab={handleTab} />
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
