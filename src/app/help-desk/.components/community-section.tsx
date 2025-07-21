import { motion } from "framer-motion";
import Link from "next/link";

type CommunityBox = {
  id: number;
  icon: string;
  title: string;
  linkText: string;
  linkUrl: string;
  delay: number; // in seconds
};

const communityBoxes: CommunityBox[] = [
  {
    id: 1,
    icon: "/img/home_support/com_1.png",
    title: "Find answers and ask new questions",
    linkText: "How to Search Communities",
    linkUrl: "#",
    delay: 0.4,
  },
  {
    id: 2,
    icon: "/img/home_support/com_2.png",
    title: "Manage the people and discussions you follow",
    linkText: "How to Search Communities",
    linkUrl: "#",
    delay: 0.6,
  },
  {
    id: 3,
    icon: "/img/home_support/com_3.png",
    title: "Award points, level up, and earn new privileges",
    linkText: "How to Search Communities",
    linkUrl: "#",
    delay: 0.8,
  },
];

const CommunitySection = () => {
  return (
    <div className="row">
      {communityBoxes.map((box) => (
        <div className="col-lg-4 col-md-6" key={box.id}>
          <motion.div
            className="community-box"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: box.delay }}
            viewport={{ once: true }}
          >
            <div className="icon-container">
              <img src={box.icon} alt="community" />
            </div>
            <div className="community-content">
              <h3 className="com-title">{box.title}</h3>
              <Link href={box.linkUrl} className="details-link">
                {box.linkText} <i className="arrow_right"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default CommunitySection;
