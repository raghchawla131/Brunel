import React from "react";
import Navbar from "../components/Navbar";
import Faq from "../partials/Faq";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Navbar />
      <div className="home">
        <section className="home__main">
          <div className="home__main--header">
            <p className="home__main--header--a">Success stories</p>
            <p className="home__main--header--b">
              Every success journey <br /> we’ve encountered.
            </p>
          </div>
          <div>
            <img src="../../public/image 32618.png" alt="" />
          </div>
          <div className="home__main--percent">
            <img
              className="sparkle"
              src="../../public/spark, sparkle, 26.png"
              alt=""
            />
            <h1>40%</h1>
            <p>
              Achieved reduction in <br /> project execution time <br /> by
              optimising team <br /> availability
            </p>
          </div>
          <div className="home__main--dollar">
            <div className="home__main--dollar--a">
              <h1>$0.5</h1>
              <p>MILLION</p>
            </div>
            <div className="home__main--dollar--b">
              <p>
                Reduced client expenses <br /> by saving on hiring and <br />{" "}
                employee costs.
              </p>
            </div>
          </div>
          <div className="home__main--staff">
            <img src="../../public/Group 1171281573.png" alt="" />
            <div className="home__main--staff--content">
              <h4>10 DAYS</h4>
              <p>Staff deployment</p>
            </div>
          </div>
          <div className="home__main--insights">
            <h4>
              Enhance fortune 50 <br /> company’s insights <br /> teams research{" "}
              <br /> capabilities
            </h4>
          </div>
          <div className="home__main--scroll-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="home__main--explore">
            <p>Explore More</p>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </section>
        <Faq />
      </div>
    </>
  );
};

export default Home;
