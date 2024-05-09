import React from "react";
import Footer from "../components/Footer";
import { useState } from "react";

const Faq = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(2);

  const handleQueryClick = (index) => {
    setActiveQueryIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="home__ask">
        <div className="home__ask--main">
          <div className="home__ask--main--header">
            <p>What&apos;s on your mind</p>
            <h1>Ask Questions</h1>
          </div>
          <div className="home__ask--stroke">
            <img src="/public/Union copy.png" alt="" />
          </div>
          <div className="home__ask--faq">
            <div className="home__ask--faq-q" onClick={() => handleQueryClick(0)}>
              <div className="home__ask--question">
                <h4>Do you offer freelancers?</h4>
                <ion-icon name={activeQueryIndex === 0 ? "remove-outline" : "add-outline"}></ion-icon>
              </div>
              {activeQueryIndex === 0 && (
                <p>
                  If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
                </p>
              )}
              <div className="horizontal--line"></div>
            </div>
            <div className="home__ask--faq-q" onClick={() => handleQueryClick(1)}>
              <div className="home__ask--question">
                <h4>
                  What’s the guarantee that I will be satisfied <br /> with the
                  hired talent?
                </h4>
                <ion-icon name={activeQueryIndex === 1 ? "remove-outline" : "add-outline"}></ion-icon>
              </div>
              {activeQueryIndex === 1 && (
                <p>
                  If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
                </p>
              )}
              <div className="horizontal--line"></div>
            </div>
            <div className="home__ask--faq-q" onClick={() => handleQueryClick(2)}>
              <div className="home__ask--question">
                <h4>Can I hire multiple talents at once?</h4>
                <ion-icon name={activeQueryIndex === 2 ? "remove-outline" : "add-outline"}></ion-icon>
              </div>
              {activeQueryIndex === 2 && (
                <p>
                  If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
                </p>
              )}
              <div className="horizontal--line"></div>
            </div>
            <div className="home__ask--faq-q" onClick={() => handleQueryClick(3)}>
              <div className="home__ask--question">
                <h4>Why should I not go to an agency directly?</h4>
                <ion-icon name={activeQueryIndex === 3 ? "remove-outline" : "add-outline"}></ion-icon>
              </div>
              {activeQueryIndex === 3 && (
                <p>
                  If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
                </p>
              )}
              <div className="horizontal--line"></div>
            </div>
            <div className="home__ask--faq-q" onClick={() => handleQueryClick(4)}>
              <div className="home__ask--question">
                <h4>
                  Who can help me pick a right skillset <br /> and duration for
                  me?
                </h4>
                <ion-icon name={activeQueryIndex === 4 ? "remove-outline" : "add-outline"}></ion-icon>
              </div>
              {activeQueryIndex === 4 && (
                <p>
                  If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
                </p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Faq;
