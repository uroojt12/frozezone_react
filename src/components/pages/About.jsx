import React from "react";
import SubBanner from "../common_section/sub-banner";
import Detail from "../Abou_page/detail";
import Scope from "../common_section/scope";

const About = () => {
  const about = {
    banner: {
      heading: "About Us",
      para: "About Us",
    },
    detail: {
      title: "About Us",
      heading: "How It’s Made",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, sequi nam voluptas dolores reiciendis, nostrum aperiam commodi, nobis porro qui eum eos! Facere sequi voluptas assumenda nesciunt doloribus, tenetur dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum officia, praesentium optio minima nihi.",
      image: "/images/h7-shape3.png",
    },
    scope: {
      title: "Flavors",
      heading: "SEE WHAT’S SCOOPIN’",
      btn_01: "Scope Flavors",
      btn_link_01: "/",
      image_1: "/images/h-shape.png",
      image_2: "/images/scope-2.png",
      image_3: "/images/b-shape.png",
    },
  };
  return (
    <main>
      <SubBanner data={about.banner} />
      <Detail data={about.detail} />
      <Scope data={about.scope} />
    </main>
  );
};

export default About;
