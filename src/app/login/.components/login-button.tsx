"use client";
import { useFormStatus } from "react-dom";

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type="submit"
        className="btn action_btn thm_btn"
        disabled={pending}
      >
        {pending ? "Signing in..." : "Sign in"}
      </button>
    </>
  );
};

export default LoginButton;
