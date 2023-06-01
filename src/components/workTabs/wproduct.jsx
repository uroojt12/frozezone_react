import React from "react";
import WorkTab1 from "../workTabs/section/tab1";

export default function Wproducts({ data, type, handleTab }) {
  return (
    <div>
      <section id="portfolio">
        <div className="contain">
          <ul className="tabs">
            <li className={type === "all" ? "active" : ""}>
              <a href="#!" onClick={() => handleTab("all")}>
                {data?.button1}{" "}
              </a>
            </li>
            <li className={type === "cloud-services" ? "active" : ""}>
              <a
                href="#!"
                className=""
                onClick={() => handleTab("cloud-services")}
              >
                {data?.button2}{" "}
              </a>
            </li>
            <li className={type === "cloud-mgt" ? "active" : ""}>
              <a href="#!" className="" onClick={() => handleTab("cloud-mgt")}>
                {data?.button3}{" "}
              </a>
            </li>
            <li className={type === "it-security" ? "active" : ""}>
              <a
                href="#!"
                className=""
                onClick={() => handleTab("it-security")}
              >
                {data?.button4}{" "}
              </a>
            </li>
            <li className={type === "networking" ? "active" : ""}>
              <a href="#!" className="" onClick={() => handleTab("networking")}>
                {data?.button5}{" "}
              </a>
            </li>
            <li className={type === "marketing" ? "active" : ""}>
              <a href="#!" className="" onClick={() => handleTab("marketing")}>
                {data?.button6}{" "}
              </a>
            </li>
          </ul>
          {type === "all" ? (
            <WorkTab1 product={data?.all_products} />
          ) : type === "cloud-services" ? (
            <WorkTab1 product={data?.cloud_services} />
          ) : type === "cloud-mgt" ? (
            <WorkTab1 product={data?.cloud_mgt} />
          ) : type === "it-security" ? (
            <WorkTab1 product={data?.it_security} />
          ) : type === "networking" ? (
            <WorkTab1 product={data?.networking} />
          ) : type === "marketing" ? (
            <WorkTab1 product={data?.marketing} />
          ) : (
            <div className="alert alert-danger">No data found for {type}!</div>
          )}
          ,
        </div>
      </section>
    </div>
  );
}
