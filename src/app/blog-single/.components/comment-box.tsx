"use client";
const CommentBox = () => {
  return (
    <>
      <div className="blog_comment_box">
        <h2 className="c_head">Leave a Comment</h2>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="get_quote_form row"
          action="#"
          method="post"
        >
          <div className="col-md-6 form-group">
            <input
              required
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="col-md-6 form-group">
            <input
              required
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="col-md-12 form-group">
            <input
              required
              type="text"
              className="form-control"
              id="web"
              placeholder="Website"
            />
          </div>
          <div className="col-md-12 form-group">
            <textarea
              className="form-control message"
              placeholder="Comment"
              defaultValue={""}
            />
          </div>
          <div className="col-md-12">
            <button className="btn action_btn thm_btn" type="submit">
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentBox;
