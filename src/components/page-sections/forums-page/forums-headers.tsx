const ForumsHeaders = () => {
  return (
    <>
      <div className="post-header forums-header">
        <div className="col-md-6 col-sm-6 support-info">
          <span> Forum </span>
        </div>

        <div className="col-md-6 col-sm-6 support-category-menus">
          <ul className="forum-titles">
            <li className="forum-topic-count">Topics</li>
            <li className="forum-reply-count">Posts</li>
            <li className="forum-freshness">Last Post</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ForumsHeaders;
