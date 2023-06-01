import React, { useState } from "react";

const Detail = ({ data }) => {
  const [videoPopup, setVideoPopup] = useState(false);
  return (
    <>
      <section className="about-sec" id="about">
        <div className="contain">
          <div className="flex">
            <div className="col col2">
              <div className="right_grid">
                <div className="shape">
                  <img src={data.image} alt="" />
                </div>
                <div
                  className="vidBlk"
                  style={{ backgroundImage: "url('images/about-3.jpeg')" }}
                >
                  <div
                    className="videoBtn fa-play popBtn"
                    data-popup="video"
                    onClick={() => setVideoPopup(true)}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col col1">
              <div className="sec_heading">
                <h5>{data.title}</h5>
                <h2>{data.heading}</h2>
              </div>
              <div className="cntnt">
                <p>{data.para}</p>
                <p>{data.para}</p>
              </div>
            </div>
            <div className="detail">
              <p>{data.para}</p>
              <p>{data.para}</p>
            </div>
          </div>
        </div>
      </section>
      {videoPopup === true ? (
        <div className="popup" style={{ display: "block" }}>
          <div class="tableDv">
            <div class="tableCell">
              <div
                className="crosBtn"
                onClick={() => setVideoPopup(false)}
              ></div>

              <div class="contain">
                <div class=" inside">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/G3k0qlLag74"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Detail;
