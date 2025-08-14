"use client";
import CountUp from "react-countup"; // Optional for animated numbers
import Wavify from "react-wavify";

const FunFactSection = () => {
  return (
    <section className="doc_fun_fact_area">
      {/* Replace static SVGs with react-wavify */}
      <div
        className="animated-waves"
        style={{ position: "absolute", width: "100%", bottom: 0, zIndex: 0 }}
      >
        <Wavify
          className="animated-wave"
          fill="rgba(188, 214, 234, 0.14)"
          paused={false}
          options={{
            height: 20,
            amplitude: 60,
            speed: 0.2,
            points: 4,
          }}
        />
        <Wavify
          className="animated-wave"
          fill="rgba(125, 214, 234, 0.14)"
          paused={false}
          options={{
            height: 50,
            amplitude: 60,
            speed: 0.4,
            points: 3,
          }}
          style={{ position: "absolute", bottom: 0 }}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          {[
            { number: 5486, label: "Happy Customer" },
            { number: 642, label: "Cups of Coffee" },
            { number: 100, label: "Finished Projects" },
            { number: 476, label: "Staff Members" },
          ].map((item, i) => (
            <div
              key={i}
              className="col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
              data-wow-delay={`${i * 0.2}s`}
              style={{
                visibility: "visible",
                animationDelay: `${i * 0.2}s`,
                animationName: "fadeInUp",
              }}
            >
              <div className="doc_fact_item">
                <div className="counter">
                  <CountUp end={item.number} duration={2} enableScrollSpy />
                </div>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactSection;
