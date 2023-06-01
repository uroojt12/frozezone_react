import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestiLst from "../Home_page/sections/testiLast";
const Testimonials = ({ data }) => {
  const options = {
    autoplay: false,
    nav: true,
    dots: true,
    navText: [
      '<i className="fa fa-chevron-left"></i>',
      '<i className="fa fa-chevron-right"></i>',
    ],
    loop: true,
    margin: 20,
    smartSpeed: 1000,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    items: 1,
  };
  return (
    <>
      <section id="testimonials">
        <div className="contain">
          <div className="shape">
            <img src="images/ice4.png" alt="" />
          </div>
          <div className="sec_heading">
            <h5>{data.title}</h5>
            <h2>{data.heading}</h2>
          </div>
          <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
            {data.block.map((val) => {
              return <TestiLst val={val} />;
            })}
          </OwlCarousel>
        </div>
        <div class="shape-1">
          <img src="images/t-1.png" alt="" />
        </div>
      </section>
    </>
  );
};
export default Testimonials;
