"use server";

export interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function sendContactMessage(
  _prevState: ContactResponse | null,
  formData: FormData
): Promise<ContactResponse> {
  const name = (formData.get("name") as string | null)?.trim() || "";
  const email = (formData.get("email") as string | null)?.trim() || "";
  const message = (formData.get("message") as string | null)?.trim() || "";

  // Server-side validation
  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!email) {
    return { success: false, error: "Please enter your email address." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please provide a valid email address.",
    };
  }

  if (!message || message.length < 2) {
    return {
      success: false,
      error: "Please provide a message with at least 2 characters.",
    };
  }

  const formId = process.env.GETFORM_FORM_ID;
  if (!formId) {
    console.error("GETFORM_FORM_ID is missing from server environment variables.");
    return {
      success: false,
      error:
        "Contact service is currently unavailable. Please reach out directly via email.",
    };
  }

  const endpoint = formId.startsWith("http")
    ? formId
    : `https://getform.io/f/${formId}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Getform submission error:", response.status, errorText);
      return {
        success: false,
        error: "Unable to deliver message right now. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thanks for reaching out! I will get back to you soon.",
    };
  } catch (err) {
    console.error("Failed to post message to Getform:", err);
    return {
      success: false,
      error: "Something went wrong sending your message. Please try again.",
    };
  }
}
