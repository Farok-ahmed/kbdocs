"use client";
import dowBgTwoImg from "@/assets/img/home_one/dow_bg_two.png";
import folderImg from "@/assets/img/home_two/folder.png";
import infoImg from "@/assets/img/home_two/info.png";
import memoImg from "@/assets/img/home_two/memo.png";
import settingsImg from "@/assets/img/home_two/settings.png";
import shareImg from "@/assets/img/home_two/share.png";
import weatherImg from "@/assets/img/home_two/weather.png";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type GuideLink = {
  id: number;
  text: string;
  href: string;
};

type Guide = {
  id: number;
  title: string;
  image: any; // Changed from string to any for imported images
  delay: string; // You use string delays like "0.2s"
  links: GuideLink[];
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

export default function GuideCategories() {
  const guides: Guide[] = [
    {
      id: 1,
      title: "Getting Started",
      image: folderImg,
      delay: "0s",
      links: [
        { id: 1, text: "Setup home page layout", href: "/docs/shortcodes/can-use" },
        { id: 2, text: "BBpress sidebar layout styles", href: "/docs/shortcodes/can-use" },
        { id: 3, text: "Knowledgebase page setup", href: "/docs/shortcodes/can-use" },
        { id: 4, text: "Creating home page blocks", href: "/docs/shortcodes/can-use" },
        { id: 5, text: "How do i add FAQ post", href: "/docs/shortcodes/can-use" },
      ],
    },
    {
      id: 2,
      title: "Integrations",
      image: infoImg,
      delay: "0.2s",
      links: [
        { id: 1, text: "How To Install Manual Theme", href: "/docs/shortcodes/can-use" },
        { id: 2, text: "Theme license information", href: "/docs/shortcodes/can-use" },
        { id: 3, text: "How do i create tree structure menu", href: "/docs/shortcodes/can-use" },
        { id: 4, text: "How do I login forum section", href: "/docs/shortcodes/can-use" },
        { id: 5, text: "How do I login forum section", href: "/docs/shortcodes/can-use" },
      ],
    },
    {
      id: 3,
      title: "Cloud Server",
      image: weatherImg,
      delay: "0.4s",
      links: [
        { id: 1, text: "Mailbox and User Settings", href: "/docs/shortcodes/can-use" },
        { id: 2, text: "Preparing your server for installation", href: "/docs/shortcodes/can-use" },
        { id: 3, text: "Managing Docs in KbDoc", href: "/docs/shortcodes/can-use" },
        { id: 4, text: "How do i add FAQ post", href: "/docs/shortcodes/can-use" },
        { id: 5, text: "Creating home page blocks", href: "/docs/shortcodes/can-use" },
      ],
    },
    {
      id: 4,
      title: "User Settings",
      image: settingsImg,
      delay: "0s",
      links: [
        { id: 1, text: "Do I need to know coding", href: "/docs/shortcodes/can-use" },
        { id: 2, text: "Managing Docs in KbDoc", href: "/docs/shortcodes/can-use" },
        { id: 3, text: "Working with Conversations", href: "/docs/shortcodes/can-use" },
        { id: 4, text: "Copying Email to KbDoc", href: "/docs/shortcodes/can-use" },
        { id: 5, text: "Knowledgebase page setup", href: "/docs/shortcodes/can-use" },
      ],
    },
    {
      id: 5,
      title: "Reporting",
      image: memoImg,
      delay: "0.4s",
      links: [
        { id: 1, text: "Setup home page layout", href: "/docs/shortcodes/can-use" },
        { id: 2, text: "BBpress sidebar layout styles", href: "/docs/shortcodes/can-use" },
        { id: 3, text: "Knowledgebase page setup", href: "/docs/shortcodes/can-use" },
        { id: 4, text: "Creating home page blocks", href: "/docs/shortcodes/can-use" },
        { id: 5, text: "How do i add FAQ post", href: "/docs/shortcodes/can-use" },
      ],
    },
    {
      id: 6,
      title: "Solar System",
      image: shareImg,
      delay: "0.6s",
      links: [
        { id: 1, text: "How do I contact Customer Care?", href: "/docs/shortcodes/can-use" },
        { id: 2, text: "How to enable labs features", href: "/docs/shortcodes/can-use" },
        { id: 3, text: "Knowledgebase page setup", href: "/docs/shortcodes/can-use" },
        { id: 4, text: "How do I login forum section", href: "/docs/shortcodes/can-use" },
        { id: 5, text: "Mailbox and User Settings", href: "/docs/shortcodes/can-use" },
      ],
    },
  ];

  return (
    <section className="doc_categories_guide_area sec_pad">
      <Image
        className="shap wow fadeInUp"
        src={dowBgTwoImg}
        alt=""
        style={{ width: "auto", height: "auto" }}
      />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="section_title text-center"
        >
          <h2 className="h_title wow fadeInUp">
            Check out our guide categories
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Some dodgy chav bevvy amongst argy-bargy spiffing absolutely
            bladdered nancy boy cup of tea a load of old tosh porkies.
          </p>
        </motion.div>
        <div className="row">
          <div className="row">
            {guides.map((guide, index) => (
              <div className="col-lg-4 col-sm-6" key={guide.id}>
                <motion.div
                  className="categories_guide_item"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp as any}
                >
                  <Image src={guide.image} alt={guide.title} />
                  <div className="doc_tag_title">
                    <h4>{guide.title}</h4>
                  </div>
                  <ul className="list-unstyled tag_list">
                    {guide.links.map((link) => (
                      <li key={link.id}>
                        <Link href={link.href}>
                          <i className="icon_document_alt"></i> {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/docs" className="doc_border_btn">
                    More <i className="arrow_right"></i>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link href="/doc-archive" className="doc_border_btn all_doc_btn wow fadeinUp">
            View All Docs<i className="arrow_right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
