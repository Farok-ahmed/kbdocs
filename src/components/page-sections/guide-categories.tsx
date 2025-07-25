"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

type GuideLink = {
  id: number;
  text: string;
  href: string;
};

type Guide = {
  id: number;
  title: string;
  image: string;
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
      image: "/img/home_two/folder.png",
      delay: "0s",
      links: [
        { id: 1, text: "Setup home page layout", href: "" },
        { id: 2, text: "BBpress sidebar layout styles", href: "" },
        { id: 3, text: "Knowledgebase page setup", href: "" },
        { id: 4, text: "Creating home page blocks", href: "" },
        { id: 5, text: "How do i add FAQ post", href: "" },
      ],
    },
    {
      id: 2,
      title: "Integrations",
      image: "/img/home_two/info.png",
      delay: "0.2s",
      links: [
        { id: 1, text: "How To Install Manual Theme", href: "" },
        { id: 2, text: "Theme license information", href: "" },
        { id: 3, text: "How do i create tree structure menu", href: "" },
        { id: 4, text: "How do I login forum section", href: "" },
        { id: 5, text: "How do I login forum section", href: "" },
      ],
    },
    {
      id: 3,
      title: "Cloud Server",
      image: "/img/home_two/weather.png",
      delay: "0.4s",
      links: [
        { id: 1, text: "Mailbox and User Settings", href: "" },
        { id: 2, text: "Preparing your server for installation", href: "" },
        { id: 3, text: "Managing Docs in KbDoc", href: "" },
        { id: 4, text: "How do i add FAQ post", href: "" },
        { id: 5, text: "Creating home page blocks", href: "" },
      ],
    },
    {
      id: 4,
      title: "User Settings",
      image: "/img/home_two/settings.png",
      delay: "0s",
      links: [
        { id: 1, text: "Do I need to know coding", href: "" },
        { id: 2, text: "Managing Docs in KbDoc", href: "" },
        { id: 3, text: "Working with Conversations", href: "" },
        { id: 4, text: "Copying Email to KbDoc", href: "" },
        { id: 5, text: "Knowledgebase page setup", href: "" },
      ],
    },
    {
      id: 5,
      title: "Reporting",
      image: "/img/home_two/memo.png",
      delay: "0.4s",
      links: [
        { id: 1, text: "Setup home page layout", href: "" },
        { id: 2, text: "BBpress sidebar layout styles", href: "" },
        { id: 3, text: "Knowledgebase page setup", href: "" },
        { id: 4, text: "Creating home page blocks", href: "" },
        { id: 5, text: "How do i add FAQ post", href: "" },
      ],
    },
    {
      id: 6,
      title: "Solar System",
      image: "/img/home_two/share.png",
      delay: "0.6s",
      links: [
        { id: 1, text: "How do I contact Customer Care?", href: "" },
        { id: 2, text: "How to enable labs features", href: "" },
        { id: 3, text: "Knowledgebase page setup", href: "" },
        { id: 4, text: "How do I login forum section", href: "" },
        { id: 5, text: "Mailbox and User Settings", href: "" },
      ],
    },
  ];

  return (
    <section className="doc_categories_guide_area sec_pad">
      <img
        className="shap wow fadeInUp"
        src="/img/home_one/dow_bg_two.png"
        alt=""
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
                  <img src={guide.image} alt={guide.title} />
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
                  <Link href="" className="doc_border_btn">
                    More <i className="arrow_right"></i>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link href="" className="doc_border_btn all_doc_btn wow fadeinUp">
            View All Docs<i className="arrow_right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
