import { motion } from "framer-motion";
import Link from "next/link";

export default function Solution() {
  return (
    <section className="doc_solution_area sec_pad">
      <div className="container">
        <div className="section_title text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h_title wow fadeInUp"
          >
            Didn't find any Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="wow fadeInUp"
            data-wow-delay="0.2s"
          >
            Loaded with awesome features like Documentation, Knowledgebase,
            Forum & more!
          </motion.p>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="doc_solution_item online_doc wow fadeInUp"
            >
              <img src="/img/home_two/Briefcase.png" alt="" />
              <h4>Online Documentation</h4>
              <p>
                Horse play barmy Oxford bonnet are you taking the piss cheeky
                mufty nice one young delinquent.
              </p>
              <Link href="" className="learn_btn c_blue">
                Go To Documentation
                <i className="arrow_right"></i>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="col-sm-6"
          >
            <div
              className="doc_solution_item premium_doc wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <img src="/img/home_two/setting-icon.png" alt="" />
              <h4>Premium Support</h4>
              <p>
                Horse play barmy Oxford bonnet are you taking the piss cheeky
                mufty nice one young delinquent.
              </p>
              <Link href="" className="learn_btn c_blue">
                Go To Documentation
                <i className="arrow_right"></i>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="text-center">
          <Link
            href=""
            className="doc_border_btn all_doc_btn wow fadeInUp"
            data-wow-delay="0.6s"
          >
            Live Chat Now<i className="icon_chat_alt"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
