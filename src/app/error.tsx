"use client";

import { useEffect } from "react";
import { ErrorPage } from "@/components/ErrorPage";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorPage
      code="500"
      title="Something Went Wrong"
      description="We're sorry — an unexpected error occurred. Please try again, or contact us if the problem persists."
      showRetry
      onRetry={reset}
    />
  );
}
