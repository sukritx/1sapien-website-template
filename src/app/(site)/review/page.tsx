import ReviewFunnel from "@/components/ReviewFunnel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leave a Review | A-1 Total Service Plumbing",
  description:
    "Share your experience with A-1 Total Service Plumbing. Your feedback helps us improve our plumbing services.",
};

const ReviewPage = () => {
  return (
    <>
      <ReviewFunnel />
    </>
  );
};

export default ReviewPage;
