import React from "react";

export default function Step1({ type, handleTab }) {
  return (
    <>
      <fieldset>
        <div class="text-center quote_cntnt">
          <h4>What type of renovation you want?</h4>
        </div>
        <div class="inner_form_quote">
          <div class="inner_form_quote lg_inner_form_quote">
            <div class="flex">
              <div class="col">
                <div class="cmn_quote_bill active">
                  <input type="radio" name="" value="" class="hidden" id="50" />
                  <label>Paint Work</label>
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
                  <label>Plaster work</label>
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
                  <label>Floor Covering</label>
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
                  <label>Cleaning and Clearence</label>
                </div>
              </div>
            </div>
          </div>
          <div class="cmnBtn text-center">
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
}
