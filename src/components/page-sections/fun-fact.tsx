import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function FunFact() {
  return (
    <section className="doc_fun_fact_area">
      <div className="animated-waves">
        <svg
          width="100%"
          height="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="animated-wave"
        >
          <title>Wave</title>
          <defs></defs>
          <path id="animated-wave-three" d="" />
        </svg>
        <svg
          width="100%"
          height="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="animated-wave"
        >
          <title>Wave</title>
          <defs></defs>
          <path id="animated-wave-four" d="" />
        </svg>
      </div>
      <div className="container">
        <div className="row">
          <motion.div
            // fade in up animation
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
          >
            <div className="doc_fact_item">
              <div className="counter">
                <CountUp start={0} end={5486} />
              </div>
              <p>Happy Customer</p>
            </div>
          </motion.div>
          <motion.div
            // fade in up animation
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="doc_fact_item">
              <div className="counter">
                <CountUp start={0} end={642} />
              </div>
              <p>Cups of Coffee</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="doc_fact_item">
              <div className="counter">
                <CountUp start={0} end={100} />
              </div>
              <p>Finished Projects</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="doc_fact_item">
              <div className="counter">
                <CountUp start={0} end={476} />
              </div>
              <p>Staff Members</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
