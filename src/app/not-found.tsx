import type { Metadata } from "next";
import { ErrorPage } from "@/components/ErrorPage";

export const metadata: Metadata = {
  title: "Page Not Found | Sanju & Associates",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      title="Page Not Found"
      description="Sorry, we couldn't find the page you're looking for. It may have been moved, deleted, or the URL might be incorrect."
    />
  );
}
