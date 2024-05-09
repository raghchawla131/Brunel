import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/Vector.png";


const SuccessfulSubmit = () => {  
  const [redirectNow, setRedirectNow] = useState(false);
  const [countdown, setCountdown] = useState(5);
  
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setRedirectNow(true);
    }, 5000);

    const countdownTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, [redirectNow, navigate]);

  useEffect(() => {
    if (redirectNow) {
      navigate("/");
    }
  }, [redirectNow, navigate]);

  return (
    <>
      <div className="Submit__success">
        <img
          className="Submit__success--logo"
          src={logo}
          alt=""
        />
        <div className="Submit__success--temp">
          <img src="/public/Vector (2).png" alt="" />
          <div className="Submit__success--temp--btm">
            <div>
              <h4>Success Submitted</h4>
              <div className="Submit__success--temp--btm--congrats">
                <h1>Congratulations</h1>
                <p>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Submit__success--redirect">
          <p>Redirecting you to Homepage in <span>{countdown} Seconds</span></p>
        </div>
        <div className="whitespace"></div>
      </div>
    </>
  );
};

export default SuccessfulSubmit;
