"use server";

export type ContactFormErrors = {
  fullName?: string;
  email?: string;
  projectTypes?: string[];
  deadline?: string;
};

export type ContactFormState = {
  success: boolean;
  errors?: ContactFormErrors;
};

// Server Action compatible with useFormState: (prevState, formData) => Promise<State>
export default async function ContactFormAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Simulate delay (like API or DB call)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Extract fields from FormData
  const projectTypes = (formData.getAll("projectTypes") as string[]) || [];
  const budgetRange = (formData.get("budgetRange")?.toString() || "").trim();
  const deadline = (formData.get("deadline")?.toString() || "").trim();
  const fullName = (formData.get("fullName")?.toString() || "").trim();
  const email = (formData.get("email")?.toString() || "").trim();
  const phone = (formData.get("phone")?.toString() || "").trim();
  const message = (formData.get("message")?.toString() || "").trim();

  // Validation
  const errors: ContactFormErrors = {};
  if (!fullName) {
    errors.fullName = "Full name is required";
  }
  if (!email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid";
  }
  if (!projectTypes || projectTypes.length === 0) {
    errors.projectTypes = ["Please select at least one project type"];
  }
  if (!deadline) {
    errors.deadline = "Please select a deadline";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return { success: true };
}
