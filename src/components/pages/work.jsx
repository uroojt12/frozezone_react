import React, { useState } from "react";
import SubBanner from "../common_section/sub-banner";
import Wproducts from "../workTabs/wproduct";

export default function Work() {
  const [workTab, setWorkTab] = useState("all");
  const changeTab = (type) => {
    setWorkTab(type);
  };
  const work_obj = {
    banner: {
      para: "Work Index",
      heading: "Few of Our Apps Adored by users!",
    },
    Products: {
      button1: "ALL",
      button2: "Cloud Services",
      button3: "Cloud Managment",
      button4: "IT Security",
      button5: "Networking",
      button6: "Marketing",
      button_link1: "/work",
      button_link2: "/work",
      button_link3: "/work",
      button_link4: "/work",
      button_link5: "/work",
      button_link6: "/work",
      all_products: [
        {
          id: 1,
          name: "Product Engineering",
          designation: "CLOUD SERVICES",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p1.jpg",
        },
        {
          id: 2,
          name: "Firewall Advance",
          designation: "IT SECURITY",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p2.jpg",
        },
        {
          id: 3,
          name: "Data Management",
          designation: "NETWORKING",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p3.jpg",
        },
        {
          id: 4,
          name: "Big Data & Analytics",
          designation: "CLOUD SERVICES",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p4.jpg",
        },
        {
          id: 5,
          name: "Research & Energy",
          designation: "IT SECURITY",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p5.jpg",
        },
        {
          id: 6,
          name: "Warranty Management",
          designation: "NETWORKING",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p6.jpg",
        },
      ],
      cloud_services: [
        {
          id: 1,
          name: "Big Data & Analytics",
          designation: "CLOUD SERVICES",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p4.jpg",
        },
        {
          id: 2,
          name: "Research & Energy",
          designation: "IT SECURITY",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p5.jpg",
        },
        {
          id: 3,
          name: "Warranty Management",
          designation: "NETWORKING",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p6.jpg",
        },
      ],
      cloud_mgt: [
        {
          id: 1,
          name: "Big Data & Analytics",
          designation: "CLOUD SERVICES",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p4.jpg",
        },
        {
          id: 2,
          name: "Research & Energy",
          designation: "IT SECURITY",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p5.jpg",
        },
      ],
      it_security: [
        {
          id: 1,
          name: "Product Engineering",
          designation: "CLOUD SERVICES",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p1.jpg",
        },
        {
          id: 2,
          name: "Firewall Advance",
          designation: "IT SECURITY",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p2.jpg",
        },
        {
          id: 3,
          name: "Data Management",
          designation: "NETWORKING",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p3.jpg",
        },
      ],
      networking: [
        {
          id: 1,
          name: "Big Data & Analytics",
          designation: "CLOUD SERVICES",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p4.jpg",
        },
        {
          id: 2,
          name: "Research & Energy",
          designation: "IT SECURITY",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p5.jpg",
        },
        {
          id: 3,
          name: "Warranty Management",
          designation: "NETWORKING",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p6.jpg",
        },
      ],
      marketing: [
        {
          id: 1,
          name: "Product Engineering",
          designation: "CLOUD SERVICES",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p1.jpg",
        },
        {
          id: 2,
          name: "Firewall Advance",
          designation: "IT SECURITY",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p2.jpg",
        },
        {
          id: 3,
          name: "Data Management",
          designation: "NETWORKING",
          description:
            "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking.",
          image: "images/p3.jpg",
        },
      ],
    },
  };

  return (
    <main>
      <SubBanner data={work_obj?.banner} />
      <Wproducts
        data={work_obj?.Products}
        type={workTab}
        handleTab={changeTab}
      />
    </main>
  );
}
