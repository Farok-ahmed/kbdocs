import { forumData } from "@/app/forums/forum-data";
import Link from "next/link";

const ForumPosts = () => {
  return (
    <>
      <div className="community-posts-wrapper bb-radius">
        {forumData.map((forum) => (
          <div className="community-post style-two forum-item bug">
            <div className="col-md-6 post-content">
              <div className="author-avatar forum-icon">
                <img src={forum.icon} alt="community post" />
              </div>
              <div className="entry-content">
                <h3 className="post-title">
                  <Link href={`/forums/${forum.id}`}>{forum.title}</Link>
                </h3>
                <p>{forum.description}</p>
              </div>
            </div>
            <div className="col-md-6 post-meta-wrapper">
              <ul className="forum-titles">
                <li className="forum-topic-count">{forum.topics}</li>
                <li className="forum-reply-count">{forum.posts}</li>
                <li className="forum-freshness">
                  <div className="freshness-box">
                    <div className="freshness-top">
                      <div className="freshness-link">
                        <Link
                          href="#"
                          title="Reply To: Main Forum Rules &amp; Policies"
                        >
                          {forum.freshness}
                        </Link>
                      </div>
                    </div>
                    <div className="freshness-btm">
                      <Link
                        href="#"
                        title="View Eh Jewel's profile"
                        className="bbp-author-link"
                      >
                        <div className="freshness-name">
                          <span className="bbp-author-name">
                            {forum.author}
                          </span>
                        </div>
                        <span className="bbp-author-avatar">
                          <img
                            alt="Eh Jewel"
                            src={forum.authorAvatar}
                            className="avatar photo"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ForumPosts;
