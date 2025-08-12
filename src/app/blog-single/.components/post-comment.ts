"use server";

export interface CommentFormState {
  status: "success" | "error" | "";
  message: string;
}

export async function postComment(
  prevState: CommentFormState,
  formData: FormData
): Promise<CommentFormState> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const website = formData.get("website") as string | null;
  const comment = formData.get("comment") as string | null;

  if (!name || !email || !comment) {
    return {
      status: "error",
      message: "Please fill all required fields."
    };
  }

  try {
    

    console.log("Comment received:", { name, email, website, comment });

    return {
      status: "success",
      message: "Comment posted successfully!"
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "Something went wrong while posting your comment."
    };
  }
}
