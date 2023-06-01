import React from "react";
import SubBanner from "../common_section/sub-banner";
import Form from "../common_section/form";
import Cat from "../Catering_page/cat";

const Catering = () => {
  const catering = {
    banner: {
      heading: "Froze Zone Catering",
      para: " Catering",
    },
    cat: {
      box: "let us bring the scoops to your next event with our ice cream cart rentals for parties, weddings, and more.",
      block: [
        {
          id: "1",
          title: "Catering",
          heading: "With Iovanni's Gelato",
          para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste rem, assumenda ducimus, vero cum dolor quis ipsa enim aliquam odio reprehenderit, nulla accusantium beatae nostrum. Aut debitis optio maiores quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus eaque quasi, harum exercitationem labore nemo provident atque earum inventore aliquid minus fugit autem cupiditate vel mollitia hic eligendi obcaecati.",
          image: "/images/cat-5.jpeg",
          btn: "Learn More",
        },
        {
          id: "2",
          heading: "Wedding Events",
          para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste rem, assumenda ducimus, vero cum dolor quis ipsa enim aliquam odio reprehenderit, nulla accusantium beatae nostrum. Aut debitis optio maiores quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus eaque quasi, harum exercitationem labore nemo provident atque earum inventore aliquid minus fugit autem cupiditate vel mollitia hic eligendi obcaecati.",
          image: "/images/cat-8.jpeg",
          btn: "Learn More",
        },
        {
          id: "3",
          heading: "Corporate Events",
          para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste rem, assumenda ducimus, vero cum dolor quis ipsa enim aliquam odio reprehenderit, nulla accusantium beatae nostrum. Aut debitis optio maiores quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus eaque quasi, harum exercitationem labore nemo provident atque earum inventore aliquid minus fugit autem cupiditate vel mollitia hic eligendi obcaecati.",
          image: "/images/cat-9.jpeg",
          btn: "Learn More",
        },
      ],
    },
    form: {
      title: "Contact Us",
      heading: "Drop us a line",
      para: "Any questions of remarks? Just wirte us a message!",
      sub_heading: "Let's Start",
      btn: "Submit",
    },
  };
  return (
    <main>
      <SubBanner data={catering.banner} />
      <Cat data={catering.cat} />
      <Form data={catering.form} />
    </main>
  );
};

export default Catering;
