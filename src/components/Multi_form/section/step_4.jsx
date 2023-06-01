import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const Step4 = (type, handleTab) => {
  return (
    <>
      <fieldset>
        <div class="text-center quote_cntnt">
          <h4>What type of plaster work you want?</h4>
        </div>
        <div class="inner_form_quote lg_inner_form_quote">
          <div class="flex">
            <div class="col">
              <div class="cmn_quote_bill active">
                <input type="radio" name="" value="" class="hidden" id="" />
                <label>Indoors</label>
              </div>
            </div>
            <div class="col">
              <div class="cmn_quote_bill">
                <input type="radio" name="" value="" class="hidden" id="" />
                <label>OutDoors</label>
              </div>
            </div>
            <div class="col">
              <div class="cmn_quote_bill">
                <input type="radio" name="" value="" class="hidden" id="" />
                <label>Other Celling work</label>
              </div>
            </div>
            <div class="col">
              <div class="cmn_quote_bill">
                <input type="radio" name="" value="" class="hidden" id="" />
                <label>Other indoor or outdoor work</label>
              </div>
            </div>
          </div>
          <div class="cmnBtn text-center">
            <button
              type="button"
              class="webBtn backBtn lightBtn"
              onClick={() => handleTab(type - 1)}
            >
              Back
            </button>
            <button
              type="button"
              class="webBtn colorBtn theme-btn-one"
              onClick={() => handleTab(type + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default Step4;
