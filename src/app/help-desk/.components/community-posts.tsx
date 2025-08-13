import cp1 from "@/assets/img/home_support/cp1.png";
import cp2 from "@/assets/img/home_support/cp2.jpg";
import cp3 from "@/assets/img/home_support/cp3.jpg";
import cp4 from "@/assets/img/home_support/cp4.jpg";
import cp5 from "@/assets/img/home_support/cp5.jpg";
import cp6 from "@/assets/img/home_support/cp6.jpg";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type CommunityPost = {
  id: number;
  avatar: string | StaticImageData;
  title: string;
  link: string;
  updatedBy: string;
  updatedAgo: string;
  views: number;
  comments: number;
  likes: number;
  delay: number; // animation delay in seconds
};

const CommunityPosts = () => {
  const posts: CommunityPost[] = [
    {
      id: 1,
  avatar: cp1,
      title: "Con no longer save outlook emails to KbDoc",
      link: "/forum-single",
      updatedBy: "robynphd",
      updatedAgo: "2 days ago",
      views: 478,
      comments: 20,
      likes: 5,
      delay: 0.5,
    },
    {
      id: 2,
  avatar: cp2,
      title: "Connection timeouts",
      link: "/forum-single",
      updatedBy: "Hilary ouse",
      updatedAgo: "11 days ago",
      views: 478,
      comments: 20,
      likes: 5,
      delay: 0.6,
    },
    {
      id: 3,
  avatar: cp3,
      title: "KbDoc full (need help)",
      link: "/forum-single",
      updatedBy: "Weir doe",
      updatedAgo: "3 days ago",
      views: 478,
      comments: 20,
      likes: 5,
      delay: 0.7,
    },
    {
      id: 4,
  avatar: cp4,
      title: "Syncing is stuck on a mac .What could be the culprit herh",
      link: "/forum-single",
      updatedBy: "Jake weary",
      updatedAgo: "5 days ago",
      views: 478,
      comments: 20,
      likes: 5,
      delay: 0.8,
    },
    {
      id: 5,
  avatar: cp5,
      title: "KbDoc application keeps crashing at starting mojave 10.14.6",
      link: "/forum-single",
      updatedBy: "Jason response",
      updatedAgo: "2 days ago",
      views: 478,
      comments: 20,
      likes: 5,
      delay: 1.0,
    },
    {
      id: 6,
  avatar: cp6,
      title: "Customizing Certificates",
      link: "/forum-single",
      updatedBy: "Miles tone",
      updatedAgo: "7 days ago",
      views: 478,
      comments: 20,
      likes: 5,
      delay: 1.1,
    },
  ];

  return (
    <>
      <div className="community-posts-wrapper">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="community-post"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: post.delay, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="post-content">
              <div className="author-avatar">
                <Image src={post.avatar} alt="community post"  style={{width:"auto",height:"auto"}} />
              </div>
              <div className="entry-content">
                <h3 className="post-title">
                  <Link href={post.link}>{post.title}</Link>
                </h3>
                <p>
                  updated by: {post.updatedBy} {post.updatedAgo}
                </p>
              </div>
            </div>
            <div className="post-meta-wrapper">
              <ul className="post-meta-info">
                <li>
                  <Link href="">
                    <i className="fas fa-eye"></i>
                    {post.views}
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="icon_chat_alt"></i>
                    {post.comments}
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="icon_like_alt"></i>
                    {post.likes}
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default CommunityPosts;
