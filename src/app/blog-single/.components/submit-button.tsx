"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn action_btn thm_btn" type="submit" disabled={pending}>
      {pending ? "Posting..." : "Post Comment"}
    </button>
  );
}
