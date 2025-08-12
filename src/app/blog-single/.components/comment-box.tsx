"use client";

import { useActionState } from "react";
import { CommentFormState, postComment } from "./post-comment";
import SubmitButton from "./submit-button";

export default function CommentBox() {
  const initialState: CommentFormState = { status: "", message: "" };
  const [state, formAction] = useActionState(postComment, initialState);

  return (
    <div className="blog_comment_box">
      <h2 className="c_head">Leave a Comment</h2>
      <p>Your email address will not be published. Required fields are marked *</p>

      {state.message && (
        <div
          style={{
            color: state.status === "error" ? "red" : "green",
            marginBottom: "10px"
          }}
        >
          {state.message}
        </div>
      )}

      <form action={formAction} className="get_quote_form row" >
        <div className="col-md-6 form-group">
          <input
            required
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="col-md-6 form-group">
          <input
            required
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="col-md-12 form-group">
          <input
            type="text"
            name="website"
            className="form-control"
            placeholder="Website"
          />
        </div>
        <div className="col-md-12 form-group">
          <textarea
            required
            name="comment"
            className="form-control message"
            placeholder="Comment"
          />
        </div>
        <div className="col-md-12">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
