import { motion, Variants } from "framer-motion";
import Link from "next/link";

type Feature = {
  id: string;
  title: string;
  image: string;
  description: string;
  delay: number;
};

const features: Feature[] = [
  {
    id: "grow-business",
    title: "Grow Your Business",
    image: "/img/home_two/cloud1.png",
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0,
  },
  {
    id: "knowledge-base",
    title: "Knowledge Base",
    image: "/img/home_two/Lock_is_open.png",
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0.2,
  },
  {
    id: "online-support",
    title: "Online Support",
    image: "/img/home_two/Support.png",
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0.4,
  },
  {
    id: "account-management",
    title: "Account Management",
    image: "/img/home_two/usser.png",
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0,
  },
  {
    id: "formatting-content",
    title: "Formatting Content",
    image: "/img/home_two/pencil.png",
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0.2,
  },
  {
    id: "great-products",
    title: "Great Products",
    image: "/img/home_two/Channel.png",
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0.4,
  },
  {
    id: "documentation",
    title: "Documentation",
    image: "/img/home_two/Duplicate.png",
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0,
  },
  {
    id: "dedicated-widgets",
    title: "Dedicated Widgets",
    image: "/img/home_two/Bell.png",
    description: "Oxford bonnet are you taking the piss cheeky mufty.",
    delay: 0.2,
  },
  {
    id: "working-with-docs",
    title: "Working with Docs",
    image: "/img/home_two/Tune-up.png",
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
                <img src={item.image} alt={item.title} />
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
