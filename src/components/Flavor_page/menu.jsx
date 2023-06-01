import React from "react";
import Faq from "react-faq-component";
// import MenuLst from "../Flavor_page/menuLst";
const mata = {
  rows: [
    {
      title: "Icecream",
      content: `<div class="txt">
      <div class="image">
          <img src="images/sub-3.png" alt="">
      </div>
      <div class="cntnt">
          <div class="price">
              <div class="head">
                  <h6>Vanilla</h6>
              </div>
              <div class="line-1"></div>
              <div class="foot">
                  <p><strong>$12</strong></p>
              </div>
          </div>
          <p>Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.</p>

      </div>
  </div> 
  <div class="txt">
      <div class="image">
          <img src="images/sub-3.png" alt="">
      </div>
      <div class="cntnt">
          <div class="price">
              <div class="head">
                  <h6>Vanilla</h6>
              </div>
              <div class="line-1"></div>
              <div class="foot">
                  <p><strong>$12</strong></p>
              </div>
          </div>
          <p>Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.</p>

      </div>
  </div>
  <div class="txt">
      <div class="image">
          <img src="images/sub-3.png" alt="">
      </div>
      <div class="cntnt">
          <div class="price">
              <div class="head">
                  <h6>Vanilla</h6>
              </div>
              <div class="line-1"></div>
              <div class="foot">
                  <p><strong>$12</strong></p>
              </div>
          </div>
          <p>Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.</p>

      </div>
  </div>`,
    },
    {
      title: "Icecream",
      content: `<div class="txt">
      <div class="image">
          <img src="images/sub-3.png" alt="">
      </div>
      <div class="cntnt">
          <div class="price">
              <div class="head">
                  <h6>Vanilla</h6>
              </div>
              <div class="line-1"></div>
              <div class="foot">
                  <p><strong>$12</strong></p>
              </div>
          </div>
          <p>Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.</p>

      </div>
  </div> 
  <div class="txt">
      <div class="image">
          <img src="images/sub-3.png" alt="">
      </div>
      <div class="cntnt">
          <div class="price">
              <div class="head">
                  <h6>Vanilla</h6>
              </div>
              <div class="line-1"></div>
              <div class="foot">
                  <p><strong>$12</strong></p>
              </div>
          </div>
          <p>Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.</p>

      </div>
  </div>
  <div class="txt">
      <div class="image">
          <img src="images/sub-3.png" alt="">
      </div>
      <div class="cntnt">
          <div class="price">
              <div class="head">
                  <h6>Vanilla</h6>
              </div>
              <div class="line-1"></div>
              <div class="foot">
                  <p><strong>$12</strong></p>
              </div>
          </div>
          <p>Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.</p>

      </div>
  </div>`,
    },
    {
      title: "Icecream",
      content: `<div class="txt">
      <div class="image">
          <img src="images/sub-3.png" alt="">
      </div>
      <div class="cntnt">
          <div class="price">
              <div class="head">
                  <h6>Vanilla</h6>
              </div>
              <div class="line-1"></div>
              <div class="foot">
                  <p><strong>$12</strong></p>
              </div>
          </div>
          <p>Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.</p>

      </div>
  </div> 
  <div class="txt">
      <div class="image">
          <img src="images/sub-3.png" alt="">
      </div>
      <div class="cntnt">
          <div class="price">
              <div class="head">
                  <h6>Vanilla</h6>
              </div>
              <div class="line-1"></div>
              <div class="foot">
                  <p><strong>$12</strong></p>
              </div>
          </div>
          <p>Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.</p>

      </div>
  </div>
  <div class="txt">
      <div class="image">
          <img src="images/sub-3.png" alt="">
      </div>
      <div class="cntnt">
          <div class="price">
              <div class="head">
                  <h6>Vanilla</h6>
              </div>
              <div class="line-1"></div>
              <div class="foot">
                  <p><strong>$12</strong></p>
              </div>
          </div>
          <p>Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.</p>

      </div>
  </div>`,
    },
  ],
};
const Menu = ({ data }) => {
  return (
    <>
      <section id="menu">
        <div class="shape">
          <img src="images/h-shape.png" alt="" />
        </div>
        <div class="contain">
          <div class="sec_heading">
            <h5>S{data.title}</h5>
            <h2>{data.heading}</h2>
          </div>
          <div class="colr">
            <Faq class="faqLst" data={mata} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
