import Link from "next/link";
// export interface Topic {
//   id: number;
//   forumId: string;
//   authorAvatar: string;
//   title: string;
//   category: string;
//   categoryIcon: string;
//   lastUpdated: string;
//   comments: number;
//   stars: number;
//   tags: string[];
//   badges: { text: string; color: string }[];
//   isFeatured: boolean;
// }

// interface TopicsPostsProps {
//   getTopics: Topic[];
// }
const TopicsPosts = ({ getTopics }) => {
  return (
    <>
      <div className="community-posts-wrapper bb-radius">
        {getTopics.map((topic) => (
          <div
            key={topic.id}
            className="community-post style-two kbDoc richard bug"
          >
            <div className="post-content">
              <div className="author-avatar">
                <img src={topic.authorAvatar} alt="community post" />
              </div>
              <div className="entry-content">
                <h3 className="post-title">
                  <Link href={`/forums/${topic.forumId}/${topic.id}`}>
                    {topic.title}
                  </Link>
                </h3>
                <ul className="meta">
                  <li>
                    <img src={topic.categoryIcon} alt="cmm" />
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
