import Image from "next/image";
import Link from "next/link";

const TopicsPosts = ({ getTopics }: any) => {
  return (
    <>
      <div className="community-posts-wrapper bb-radius">
        {getTopics.map((topic: any) => (
          <div
            key={topic.id}
            className="community-post style-two kbDoc richard bug"
          >
            <div className="post-content">
              <div className="author-avatar">
                <Image src={topic.authorAvatar} alt="community post" style={{ width: "auto", height: "auto" }} />
              </div>
              <div className="entry-content">
                <h3 className="post-title">
                  <Link href="/forum-single">{topic.title}</Link>
                </h3>
                <ul className="meta">
                  <li>
                    <Image src={topic.categoryIcon} alt="category icon" />
                    <Link href="#">{topic.category}</Link>
                  </li>
                  <li>
                    <i className="icon_calendar"></i>
                    {topic.lastUpdated}
                  </li>
                </ul>
              </div>
            </div>
            <div className="post-meta-wrapper">
              <ul className="post-meta-info">
                <li>
                  <Link href="#">
                    <i className="icon_chat_alt"></i>
                    {topic.totalComments}
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="icon_star"></i>
                    {topic.stars}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopicsPosts;
