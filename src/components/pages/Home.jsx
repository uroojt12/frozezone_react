import React from "react";
import Banner from "../Home_page/banner";
import Habout from "../Home_page/h_about";
import Scope from "../common_section/scope";
import Find from "../Home_page/find";
import Special from "../Home_page/special";
import Testimonial from "../Home_page/testimonials";
const Home = () => {
  const home = {
    banner: {
      title: "Best Icecream Store",
      heading: "Taste From The Good Old Days.",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sit, dolorem molestias nulla hic reiciendis aliquid doloribus consequatur ipsa nisi quaerat blanditiis cum ipsum perferendis deserunt voluptates ea voluptatem dolore!",
      btn_01: "Learn More",
      btn_link_01: "/",
      image_b: "/images/banner-6.png",
      image_bg: "/images/banner-1.png",
      image_bg_2: "/images/banner-7.png",
      image_shape: "/images/h-shape.png",
      image_shape_2: "/images/b-shape.png",
    },
    h_about: {
      title: "About Us",
      heading: "Taking Ice Cream To New Heights",
      para_1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui excepturi obcaecati nulla consectetur amet reiciendis, non provident soluta totam odit deserunt sint natus libero cum voluptate ducimus suscipit voluptatem.",
      para_2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui excepturi obcaecati nulla consectetur amet reiciendis, non provident soluta totam odit deserunt sint natus libero cum voluptate ducimus suscipit voluptatem.",
      btn_01: "Learn More",
      btn_link_01: "/",
      image_b: "/images/about.png",
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
    find: {
      title: "Find Us",
      heading: "Where Can I Find Rroze Zone Ice Cream?",
      block: [
        {
          id: 1,
          image: "/images/f-1.png",
          sub_heading: "VISIT US IN SHOP",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          btn: "Read More",
          btn_link: "",
          image_2: "/images/find-1.png",
        },
        {
          id: 2,
          image: "/images/f-2.png",
          sub_heading: "ORDER TAKEOUT",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          btn: "Read More",
          btn_link: "",
          image_2: "/images/find-1.png",
        },
        {
          id: 3,
          image: "/images/f-3.png",
          sub_heading: "DELIVERY",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          btn: "Read More",
          btn_link: "",
          image_2: "/images/find-1.png",
        },
        {
          id: 4,
          image: "/images/f-4.png",
          sub_heading: "IN OTHER STORES",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          btn: "Read More",
          btn_link: "",
          image_2: "/images/find-1.png",
        },
      ],
    },
    special: {
      title: "Quick Picks",
      heading: "Our Special Scope",
      block: [
        {
          id: 1,
          image: "/images/t-1.png",
          sub_heading: "Pistacho Delight",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique nobis in tenetur, repudiandae doloremque delectus.",
          price: "$3.00",
        },
        {
          id: 2,
          image: "/images/t-1.png",
          sub_heading: "Pistacho Delight",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique nobis in tenetur, repudiandae doloremque delectus.",
          price: "$3.00",
        },
        {
          id: 3,
          image: "/images/t-1.png",
          sub_heading: "Pistacho Delight",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique nobis in tenetur, repudiandae doloremque delectus.",
          price: "$3.00",
        },
        {
          id: 4,
          image: "/images/t-1.png",
          sub_heading: "Pistacho Delight",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique nobis in tenetur, repudiandae doloremque delectus.",
          price: "$3.00",
        },
      ],
    },
    testimonials: {
      title: "Testimonials",
      heading: "What Our Clients Say?",
      block: [
        {
          id: 1,
          image: "/images/testimonial-1.jpg",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique nobis in tenetur, repudiandae doloremque delectus.",
          name: "Lally Janer",
          prof: "Worker",
        },
        {
          id: 2,
          image: "/images/testimonial-1.jpg",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique nobis in tenetur, repudiandae doloremque delectus.",
          name: "Lally Janer",
          prof: "Worker",
        },
        {
          id: 3,
          image: "/images/testimonial-1.jpg",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique nobis in tenetur, repudiandae doloremque delectus.",
          name: "Lally Janer",
          prof: "Worker",
        },
        {
          id: 4,
          image: "/images/testimonial-1.jpg",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique nobis in tenetur, repudiandae doloremque delectus.",
          name: "Lally Janer",
          prof: "Worker",
        },
      ],
    },
  };

  return (
    <>
      <main>
        <Banner data={home.banner} />
        <Habout data={home.h_about} />
        <Scope data={home.scope} />
        <Find data={home.find} />
        <Special data={home.special} />
        <Testimonial data={home.testimonials} />
      </main>
    </>
  );
};

export default Home;
