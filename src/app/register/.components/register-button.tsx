"use client";
import { useFormStatus } from "react-dom";

const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        disabled={pending}
        type="submit"
        className="btn action_btn thm_btn"
      >
        {pending ? "Creating..." : "Create an account"}
      </button>
    </>
  );
};

export default RegisterButton;
