"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  const featureData = [
    {
      id: 1,
      title: "Knowledge Base",
      description: "Oxford bonnet are you taking the piss cheeky mufty.",
      image: "/img/home_one/Lamp_idea.png",
      link: "",
    },
    {
      id: 2,
      title: "Community Forums",
      description: "Oxford bonnet are you taking the piss cheeky mufty.",
      image: "/img/home_one/chat.png",
      link: "",
    },
    {
      id: 3,
      title: "Documentation",
      description: "Oxford bonnet are you taking the piss cheeky mufty.",
      image: "/img/home_one/Duplicate.png",
      link: "",
    },
  ];
  return (
    <>
      <section className="doc_features_area_one">
        <div className="container">
          <div className="row">
            {featureData.map((item, index) => (
              <div key={item.id} className="col-lg-4 col-sm-6">
                <motion.div
                  className="media doc_features_item_one"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6 + index * 0.1,
                    delay: 0.2,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Image src={item.image} alt="" width={80} height={80} />
                  <div className="media-body">
                    <Link href="">
                      <h3>{item.title}</h3>
                    </Link>
                    <p>{item.description}</p>
                    <Link href="" className="learn_btn">
                      Learn More <i className="arrow_right"></i>
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
