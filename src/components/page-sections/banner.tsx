"use client";
import bordImg from "@/assets/img/home_two/bord.png";
import buildingImg from "@/assets/img/home_two/building.png";
import flowerImg from "@/assets/img/home_two/flower.png";
import girlImg from "@/assets/img/home_two/girl.png";
import plusImg from "@/assets/img/home_two/plus.png";
import plusOneImg from "@/assets/img/home_two/plus_one.png";
import tableImg from "@/assets/img/home_two/table.svg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="doc_banner_area_two">
      <div
        className="b_plus one"
        data-parallax='{"x": 250, "y": 160, "rotateZ":500}'
      >
        <Image src={plusImg} alt="" />
      </div>
      <div
        className="b_plus two"
        data-parallax='{"x": 250, "y": 260, "rotateZ":500}'
      >
        <Image src={plusOneImg} alt="" />
      </div>
      <div
        className="b_round r_one"
        data-parallax='{"x": 0, "y": 100, "rotateZ":0}'
      ></div>
      <div
        className="b_round r_two"
        data-parallax='{"x": -10, "y": 80, "rotateY":0}'
      ></div>
      <div className="b_round r_three"></div>
      <div className="b_round r_four"></div>
      <Image className="p_absolute building_img" src={buildingImg} alt="" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="p_absolute table_img wow fadeInLeft"
      >
        <Image width={250} height={190} src={tableImg} alt="" />
      </motion.div>
      <Image
        className="p_absolute flower wow fadeInUp"
        data-wow-delay="0.6s"
        src={flowerImg}
        alt=""
      />
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="p_absolute bord wow fadeInRight"
        data-wow-delay="0.4s"
      >
        <Image src={bordImg} alt="" />
      </motion.div>
      <Image
        className="p_absolute girl wow fadeInRight"
        data-wow-delay="0.8s"
        src={girlImg}
        alt=""
      />
      <div className="container">
        <div className="doc_banner_text_two text-center">
          <h2>Looking for help?</h2>
          <p>kbDoc is a fully featured knowledge base theme for WordPress.</p>
          <form
            action="#"
            onSubmit={(e) => e.preventDefault()}
            className="banner_search_form"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search the Knowledge Base"
            />
            <button type="submit" className="search_btn">
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
