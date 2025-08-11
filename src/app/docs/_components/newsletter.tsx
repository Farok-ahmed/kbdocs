"use client"
import React from 'react';

const Newsletter = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
  return (
    <>
    <form
                    onSubmit={handleSubmit}
                    className="mailchimp signup_form"
                    method="post"
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control memail"
                        placeholder="Email"
                      />
                      <div className="input-group-append">
                        <button type="submit">Sign Up</button>
                      </div>
                    </div>
                    <p
                      className="mchimp-errmessage"
                      style={{
                        display: "none",
                      }}
                    ></p>
                    <p
                      className="mchimp-sucmessage"
                      style={{
                        display: "none",
                      }}
                    ></p>
                  </form>
    </>
  )
}

export default Newsletter