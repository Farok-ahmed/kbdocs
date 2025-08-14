"use client";
import bellImg from "@/assets/img/home_two/Bell.png";
import channelImg from "@/assets/img/home_two/Channel.png";
import cloud1Img from "@/assets/img/home_two/cloud1.png";
import duplicateImg from "@/assets/img/home_two/Duplicate.png";
import lockIsOpenImg from "@/assets/img/home_two/Lock_is_open.png";
import pencilImg from "@/assets/img/home_two/pencil.png";
import supportImg from "@/assets/img/home_two/Support.png";
import tuneUpImg from "@/assets/img/home_two/Tune-up.png";
import usserImg from "@/assets/img/home_two/usser.png";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Feature = {
  id: string;
  title: string;
  image: any; // Changed from string to any for imported images
  description: string;
  delay: number;
};

const features: Feature[] = [
  {
    id: "grow-business",
    title: "Grow Your Business",
    image: cloud1Img,
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0,
  },
  {
    id: "knowledge-base",
    title: "Knowledge Base",
    image: lockIsOpenImg,
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0.2,
  },
  {
    id: "online-support",
    title: "Online Support",
    image: supportImg,
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0.4,
  },
  {
    id: "account-management",
    title: "Account Management",
    image: usserImg,
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0,
  },
  {
    id: "formatting-content",
    title: "Formatting Content",
    image: pencilImg,
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0.2,
  },
  {
    id: "great-products",
    title: "Great Products",
    image: channelImg,
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0.4,
  },
  {
    id: "documentation",
    title: "Documentation",
    image: duplicateImg,
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0,
  },
  {
    id: "dedicated-widgets",
    title: "Dedicated Widgets",
    image: bellImg,
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0.2,
  },
  {
    id: "working-with-docs",
    title: "Working with Docs",
    image: tuneUpImg,
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0.4,
  },
];

// Framer motion variants with custom delay
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

export default function ThemeDoc() {
  return (
    <section className="theme_doc_area bg_color sec_pad">
      <div className="container">
        <div className="section_title text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h_title wow fadeInUp"
          >
            Theme Documentation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="wow fadeInUp"
            data-wow-delay="0.2s"
          >
            Some dodgy chav bevvy amongst argy-bargy spiffing absolutely
            bladdered nancy boy cup of tea a load of old tosh porkies.
          </motion.p>
        </div>
        <div className="row">
          {features.map((item) => (
            <div key={item.id} className="col-lg-4 col-sm-6">
              <motion.div
                id={item.id}
                className="media theme_doc_item"
                variants={fadeInUp as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={item.delay}
              >
                <Image src={item.image} alt={item.title} />
                <div className="media-body">
                  <Link href="">
                    <h4 className="c_head">{item.title}</h4>
                  </Link>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
