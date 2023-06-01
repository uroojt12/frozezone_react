import React from "react";
import SubBanner from "../common_section/sub-banner";
import Quality from "../Contact_page/quality";
import Form from "../common_section/form";
const Contact = () => {
  const contact = {
    banner: {
      heading: "Contact Us",
      para: "Contact Us",
    },
    quality: {
      block: [
        {
          id: "1",
          image: "/images/fast-delivery.png",
          sub_heading: "Free Shipping",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: "2",
          image: "/images/fast-delivery.png",
          sub_heading: "Free Shipping",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
    <>
      <main>
        <SubBanner data={contact.banner} />
        <Quality data={contact.quality} />
        <Form data={contact.form} />
      </main>
    </>
  );
};

export default Contact;
