import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    message: "",
  });
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Message:"${data.message}" from >>${data.email}`);
  };
  const InputEvent = (e) => {
    const { name, value } = e.target;

    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact">
        <div className="row ">
          <div className="col-md-6 col-10 mx-auto ">
            <form onSubmit={formSubmit}>
              <div className="form-group mt-2">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control mt-2"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group mt-2">
                <label for="exampleFormControlTextarea1">Write Message</label>
                <textarea
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  className="form-control mt-2"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-auto mt-3">
                <button type="submit" className="btn btn-primary mb-2">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
