import { redirect } from 'next/navigation';

const RegisterAction = async (formData:FormData) => {
  await new Promise((res) => setTimeout(res, 1500));
  redirect("/login");
}

export default RegisterAction;