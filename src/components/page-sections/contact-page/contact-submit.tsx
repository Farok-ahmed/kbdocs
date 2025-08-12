"use client";
import { useFormStatus } from "react-dom";

const ContactFormSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type="submit"
        className="btn action_btn thm_btn"
        disabled={pending}
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </>
  );
};

export default ContactFormSubmit;
