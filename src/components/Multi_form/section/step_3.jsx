import React from "react";

const Step3 = ({ type, handleTab }) => {
  return (
    <>
      <fieldset>
        <div class="text-center quote_cntnt">
          <h4>What is the total area in m2</h4>
        </div>
        <div class="inner_form_quote lg_inner_form_quote">
          <div class="flex">
            <div class="col">
              <div class="cmn_quote_bill active">
                <input type="radio" name="" value="" class="hidden" id="" />
                <label>100-200</label>
              </div>
            </div>
            <div class="col">
              <div class="cmn_quote_bill">
                <input type="radio" name="" value="" class="hidden" id="" />
                <label>200-300</label>
              </div>
            </div>
            <div class="col">
              <div class="cmn_quote_bill">
                <input type="radio" name="" value="" class="hidden" id="" />
                <label>300-400</label>
              </div>
            </div>
            <div class="col">
              <div class="cmn_quote_bill">
                <input type="radio" name="" value="" class="hidden" id="" />
                <label>more then 400</label>
              </div>
            </div>
          </div>
          <div class="cmnBtn text-center">
            <button
              type="button"
              class="webBtn theme-btn-one blankBtn"
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

export default Step3;
