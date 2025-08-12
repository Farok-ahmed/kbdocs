"use server";

import { redirect } from "next/navigation";

const LoginAction = async (formData: FormData) => {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  await new Promise((res) => setTimeout(res, 1500));
  

  redirect("/");
};

export default LoginAction;
