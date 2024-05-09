import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SuccessfulSubmit from "./SuccessfulSubmit";
import logo from "../../public/Vector.png";
import err from "../../public/Vector copy 2.png";
import close from "../../public/Close (1).png"

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    if(isValidEmail) {
      setSubmitted(true);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const isButtonDisabled = name === "" || email === "";

  return (
    <>
    {submitted ? (
        <SuccessfulSubmit />
      ) : (
      <div className="reg__form">
        <img className="nav__logo--reg" src={logo} alt="" />
        <div className="reg__form--close">
          <Link to="/">
            <img src={close} alt="" />
          </Link>
        </div>
        <div className="reg__form--temp">
          <div className="reg__form--header">
            <h4>Registration Form</h4>
            <h1>
              Start your success <br /> Journey here!
            </h1>
          </div>
          <div className="reg__form--main">
            <div className="reg__form--input">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
              />
              <div className="reg__form--inp2">
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                />
                {isValid === false && (
                  <div className="reg__form--err">
                    <img src={err} alt="" />
                    <p>Enter a valid email address</p>
                  </div>
                )}
              </div>
            </div>
            <button disabled={isButtonDisabled} onClick={validateEmail}>
              Submit
            </button>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Registration;
