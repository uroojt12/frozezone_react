import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
const Form = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="contact-us">
      <div className="shape">
        <img src="images/h-shape.png" alt="" />
      </div>
      <div className="contain">
        <div className="sec_heading">
          <h5>{data.title}</h5>
          <h2>{data.heading}</h2>
        </div>
        <div className="sec-cntnt">
          <p>{data.para}</p>
        </div>
        <div className="inner">
          <h3>{data.sub_heading}</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-12">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: "Required",
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Invalid value!",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => (
                      <p className="error">
                        <i className="fa-solid fa-warning"></i> {message}
                      </p>
                    )}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => (
                      <p className="error">
                        <i className="fa-solid fa-warning"></i> {message}
                      </p>
                    )}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    {...register("phone", {
                      required: "Required",
                      pattern: {
                        value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
                        message: "Invalid value!",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="phone"
                    render={({ message }) => (
                      <p className="error">
                        <i className="fa-solid fa-warning"></i> {message}
                      </p>
                    )}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="txtGrp">
                  <input
                    className="txtBox"
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: "Required" })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="subject"
                    render={({ message }) => (
                      <p className="error">
                        <i className="fa-solid fa-warning"></i> {message}
                      </p>
                    )}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="txtGrp">
                  <textarea
                    id="message"
                    placeholder="Enter Your Message Here"
                    className="txtBox txtArea"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="txtGrp btn-box">
                  <button className="webBtn theme-btn-one">Send Message</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="shape-1">
        <img src="images/contact-1.png" alt="" />
      </div>
      <div className="shape-2">
        <img src="images/t-1.png" alt="" />
      </div>
    </section>
  );
};

export default Form;
