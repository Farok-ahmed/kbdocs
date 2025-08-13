"use client"
import leaf from "@/assets/img/home_one/b_leaf.svg";
import bMan from "@/assets/img/home_one/b_man.png";
import bManTwo from "@/assets/img/home_one/b_man_two.png";
import fileIcon from "@/assets/img/home_one/file.png";
import flower from "@/assets/img/home_one/flower.png";
import girl from "@/assets/img/home_one/girl_img.png";
import star from "@/assets/img/home_one/star.png";
import wave1 from "@/assets/img/home_one/wave_one.svg";
import wave2 from "@/assets/img/home_one/wave_two.svg";
import vSvg from "@/assets/img/v.svg";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CoolBanner = () => {
  return (
    <section className="doc_banner_area_one">
        <Image className="dark" src={wave1} alt="" />
        <Image className="dark_two" src={wave2} alt="" />
        <Image
          className="p_absolute star_one"
          src={star}
          alt=""
        />
        <Image
          className="p_absolute star_two"
          src={star}
          alt=""
        />
        <Image
          className="p_absolute star_three"
          src={star}
          alt=""
        />
        <motion.div
          className="p_absolute one"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={bMan} alt="" />
        </motion.div>

        <motion.div
          className="p_absolute two"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={bManTwo} alt="" />
        </motion.div>

        <motion.div
          className="p_absolute three"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={flower} alt="" />
        </motion.div>

        <motion.div
          className="p_absolute four"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={girl} alt="" />
        </motion.div>

        <motion.div
          className="p_absolute five"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={fileIcon} alt="" />
        </motion.div>

        <Image className="p_absolute bl_left" src={vSvg} alt="" />
        <Image
          className="p_absolute bl_right"
          src={leaf}
          alt=""
        />
        <div className="container">
          <div className="doc_banner_text">
            <h2 className="wow fadeInUp" data-wow-delay="0.3s">
              Hello, what can we help you find?
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.5s">
              we're here for you. Find articles, help and advice for getting the
              most our of docall theme
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="banner_search_form"
            >
              <input
                type="search"
                className="form-control"
                placeholder='Search ("/" to focus)'
              />
              <button type="submit">
                <i className="icon_search"></i>
              </button>
            </form>
            <h6>
              <span>Popular topics:</span>
              <Link href="">Add a Map with a Market</Link>
              <Link href="">Styling a Map</Link>
            </h6>
          </div>
        </div>
      </section>
  )
}

export default CoolBanner