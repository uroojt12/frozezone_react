import React from "react";

const Step2 = ({ type, handleTab }) => {
  return (
    <div>
      <fieldset>
        <div class="text-center quote_cntnt">
          <h4>How many rooms are affected by works?</h4>
        </div>
        <div class="inner_form_quote lg_inner_form_quote">
          <div class="flex">
            <div class="col">
              <div class="cmn_quote_bill active">
                <input type="radio" name="" value="" class="hidden" id="50" />
                <label>1-5</label>
              </div>
            </div>
            <div class="col">
              <div class="cmn_quote_bill">
                <input
                  type="radio"
                  name=""
                  value=""
                  class="hidden"
                  id="50-100"
                />
                <label>6-10</label>
              </div>
            </div>
            <div class="col">
              <div class="cmn_quote_bill">
                <input
                  type="radio"
                  name=""
                  value=""
                  class="hidden"
                  id="100-200"
                />
                <label>11-15</label>
              </div>
            </div>
            <div class="col">
              <div class="cmn_quote_bill">
                <input
                  type="radio"
                  name=""
                  value=""
                  class="hidden"
                  id="200-300"
                />
                <label>more then 15</label>
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
    </div>
  );
};

export default Step2;
