import React from "react";
import SubBanner from "../common_section/sub-banner";
import Ice from "../Flavor_page/ice";
import Menu from "../Flavor_page/menu";
const Flavor = () => {
  const flavor = {
    banner: {
      heading: "Froze Zone Flavors",
      para: " Flavors",
    },
    ice: {
      box: "Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut imperdiet a venenatis vitae justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt cras dapibus. Vivamus elementum semper nisi.",
      block: [
        {
          id: "1",
          image: "/images/fl-5.jpeg",
          sub_heading: "Chocolate Flavor",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus labore impedit minus suscipit quas laborum eos. Fugiat fuga unde aliquam magnam dolores nam illo iste nobis! Tempora, consequuntur ipsam.",
          add: "images/add.png",
        },
        {
          id: "2",
          image: "/images/fl-2.jpeg",
          sub_heading: "Chocolate Flavor",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus labore impedit minus suscipit quas laborum eos. Fugiat fuga unde aliquam magnam dolores nam illo iste nobis! Tempora, consequuntur ipsam.",
          add: "images/add.png",
        },
        {
          id: "3",
          image: "/images/fl-3.jpeg",
          sub_heading: "Chocolate Flavor",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus labore impedit minus suscipit quas laborum eos. Fugiat fuga unde aliquam magnam dolores nam illo iste nobis! Tempora, consequuntur ipsam.",
          add: "images/add.png",
        },
        {
          id: "4",
          image: "/images/fl-4.jpeg",
          sub_heading: "Chocolate Flavor",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus labore impedit minus suscipit quas laborum eos. Fugiat fuga unde aliquam magnam dolores nam illo iste nobis! Tempora, consequuntur ipsam.",
          add: "images/add.png",
        },
        {
          id: "5",
          image: "/images/fl-5.jpeg",
          sub_heading: "Chocolate Flavor",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus labore impedit minus suscipit quas laborum eos. Fugiat fuga unde aliquam magnam dolores nam illo iste nobis! Tempora, consequuntur ipsam.",
          add: "images/add.png",
        },
      ],
    },
    menu: {
      title: "Special Menu",
      heading: "Collection of Froze Zone",
      block: [
        {
          id: "1",
          sub_heading: "Icecream",
          image: "/images/sub-3.png",
          head: "Vanilla",
          price: "$12",
          para: "Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.",
        },
        {
          id: "2",
          sub_heading: "Icecream",
          image: "/images/sub-3.png",
          head: "Vanilla",
          price: "$12",
          para: "Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.",
        },
        {
          id: "3",
          sub_heading: "Icecream",
          image: "/images/sub-3.png",
          head: "Vanilla",
          price: "$12",
          para: "Lorem ipsum dolor sit amet, feugiat delicata Lorem ipsum dolor sit amet, feugiat delicata.",
        },
      ],
    },
  };
  return (
    <main>
      <SubBanner data={flavor.banner} />
      <Ice data={flavor.ice} />
      <Menu data={flavor.menu} />
    </main>
  );
};

export default Flavor;
