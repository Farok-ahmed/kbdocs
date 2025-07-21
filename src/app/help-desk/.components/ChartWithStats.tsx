"use client";
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
  TooltipItem,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import CountUp from "react-countup";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  labels: ["Unanswered", "No Reply", "In Progress", "Resolved"],
  datasets: [
    {
      label: "Issues",
      data: [55, 64, 70, 80],
      backgroundColor: [
        "#F9327A", // pink
        "rgba(252, 193, 3, 0.8)", // yellow

        "rgba(53, 186, 233, 0.8)", // blue
        "rgba(66, 218, 191, 0.8)", // green
      ],
      borderColor: [
        "#F9327A",
        "rgba(252, 193, 3, 1)",

        "rgba(53, 186, 233, 1)",
        "rgba(66, 218, 191, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    r: {
      ticks: { display: false },
      grid: { display: false },
      angleLines: { display: false },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context: TooltipItem<"polarArea">) =>
          `${context.label}: ${context.raw}%`,
      },
    },
  },
};

export default function KbDocChartWrapper() {
  return (
    <section className="status-chart">
      <div className="container">
        <div className="section_title text-center">
          <h2
            className="h_title wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            How useful was KbDoc?
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            Twit gormless barney pardon me vagabond cup of char morish cheeky
            what a load of rubbish, the bee's knees bog.!
          </p>
        </div>
        <div className="kbDoc-chart-wrapper">
          <ul className="chart-info">
            <li className="info-left-top color-one">
              <div className="counterup">
                <span className="counter">
                  {" "}
                  <CountUp end={75} />
                </span>
                <span>%</span>
              </div>
              <div className="border-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="370"
                  height="61"
                  viewBox="0 0 370 61"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(66, 218, 191)"
                    d="M319.500,1.423 L370.005,60.139 L369.200,60.721 L318.689,2.000 L-0.000,2.000 L-0.000,1.000 L318.497,1.000 L318.891,0.715 L319.136,1.000 L319.500,1.000 L319.500,1.423 Z"
                  />
                </svg>
              </div>
              <p>90 Out of 205 issues resolved in last tow months</p>
            </li>
            <li className="info-right-top color-two">
              <div className="counterup">
                <span className="counter">
                  <CountUp end={22} />
                </span>
                <span>%</span>
              </div>
              <div className="border-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="330px"
                  height="60px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(249, 50, 122)"
                    d="M330.000,1.281 L51.455,1.281 L0.802,60.002 L-0.005,59.421 L50.656,0.689 L50.656,0.281 L51.008,0.281 L51.253,-0.003 L51.648,0.281 L330.000,0.281 L330.000,1.281 Z"
                  />
                </svg>
              </div>
              <p>35 out of 205 issues unanswered</p>
            </li>
            <li className="info-left-bottom color-three">
              <div className="counterup">
                <span className="counter">
                  {" "}
                  <CountUp end={44} />
                </span>
                <span>%</span>
              </div>
              <div className="border-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="350px"
                  height="60px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(53, 186, 233)"
                    d="M350.005,0.578 L299.344,59.310 L299.344,59.718 L298.992,59.718 L298.747,60.002 L298.353,59.718 L-0.000,59.718 L-0.000,58.719 L298.544,58.719 L349.198,-0.003 L350.005,0.578 Z"
                  />
                </svg>
              </div>
              <p>20 Out of 205 issues haven't got a reply</p>
            </li>
            <li className="info-right-bottom color-four">
              <div className="counterup">
                <span className="counter">
                  <CountUp end={35} />
                </span>
                <span>%</span>
              </div>
              <div className="border-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="390px"
                  height="60px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(252, 193, 3)"
                    d="M390.000,59.719 L51.647,59.719 L51.253,60.002 L51.008,59.719 L50.656,59.719 L50.656,59.310 L-0.005,0.579 L0.802,-0.004 L51.456,58.719 L390.000,58.719 L390.000,59.719 Z"
                  />
                </svg>
              </div>
              <p>We are working on 42 out of 205 issues</p>
            </li>
          </ul>

          <div className="full-amount">
            <h3 className="total-count">
              <span className="counter">
                <CountUp end={100} />
              </span>
              <span>%</span>
            </h3>
          </div>

          <div
            style={{
              maxWidth: 487,
              maxHeight: 487,
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PolarArea data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}
