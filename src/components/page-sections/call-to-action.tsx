import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="doc_action_area_two">
      <div className="container">
        <div className="doc_action_info mt_130">
          <div className="row align-items-center">
            {/* fadeInLeft for content */}
            <motion.div
              className="col-lg-9"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="media">
                <img
                  src="/img/home_two/Internet.png"
                  alt="Internet"
                  loading="lazy"
                />
                <div className="media-body">
                  <h2 className="h_title">You will love our solutions</h2>
                  <p>
                    Take a look at our highly rated 20+ premium and free
                    plugins.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* fadeInRight with button hover effect */}
            <motion.div
              className="col-lg-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div>
                <Link href="" className="action_btn">
                  View All Docs <i className="arrow_right"></i>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
