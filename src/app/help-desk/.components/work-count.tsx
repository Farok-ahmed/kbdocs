import { motion } from "framer-motion";
import CountUp from "react-countup";

type FunFact = {
  id: number;
  icon: string;
  end: number;
  title: string;
  colorClass: string; // e.g., "color-one"
  delay: number; // delay in seconds for framer motion
};

const WorkCount = () => {
  const funFacts: FunFact[] = [
    {
      id: 1,
      icon: "/img/home_support/fun-fact-1.png",
      end: 842,
      title: "Users",
      colorClass: "color-one",
      delay: 0.3,
    },
    {
      id: 2,
      icon: "/img/home_support/fun-fact-2.png",
      end: 1023,
      title: "Topics",
      colorClass: "color-two",
      delay: 0.5,
    },
    {
      id: 3,
      icon: "/img/home_support/fun-fact-3.png",
      end: 196,
      title: "Forums",
      colorClass: "color-three",
      delay: 0.7,
    },
    {
      id: 4,
      icon: "/img/home_support/fun-fact-4.png",
      end: 650,
      title: "Replies",
      colorClass: "color-four",
      delay: 0.9,
    },
    {
      id: 5,
      icon: "/img/home_support/fun-fact-5.png",
      end: 364,
      title: "Tags",
      colorClass: "color-five",
      delay: 1.1,
    },
  ];

  return (
    <>
      {funFacts.map((fact) => (
        <motion.div
          key={fact.id}
          className={`funfact-box text-center ${fact.colorClass}`}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: fact.delay, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="fanfact-icon">
            <img src={fact.icon} alt={`funfact-${fact.title.toLowerCase()}`} />
          </div>
          <div className="counter">
            <CountUp start={0} end={fact.end} duration={2} />
          </div>
          <h3 className="title">{fact.title}</h3>
        </motion.div>
      ))}
    </>
  );
};

export default WorkCount;
