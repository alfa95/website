import type { Metadata } from "next";
import { ErrorPage } from "@/components/ErrorPage";

export const metadata: Metadata = {
  title: "Server Error | Sanju & Associates",
  description: "An unexpected server error occurred. Please try again later.",
  robots: { index: false, follow: false },
};

export default function ServerErrorPage() {
  return (
    <ErrorPage
      code="500"
      title="Something Went Wrong"
      description="We're sorry — something went wrong on our end. Please try again in a few moments, or get in touch with our team for assistance."
    />
  );
}
