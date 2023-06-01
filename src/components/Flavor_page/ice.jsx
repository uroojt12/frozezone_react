import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import IceLst from "../Flavor_page/iceLst";
const Ice = ({ data }) => {
  const options = {
    autoplay: false,
    nav: false,
    dots: true,
    navText: [
      '<i className="fa fa-chevron-left"></i>',
      '<i className="fa fa-chevron-right"></i>',
    ],
    loop: true,
    margin: 10,
    smartSpeed: 1000,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    items: 4,
  };
  return (
    <section id="sec_flavor">
      <div class="contain">
        <div class="content">
          <p>{data.box}</p>
        </div>
        <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
          {data.block.map((val) => {
            return <IceLst val={val} />;
          })}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Ice;
