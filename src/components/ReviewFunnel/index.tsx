"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import submitReviewForm from "@/utils/submitReviewForm";

type Mood = "sad" | "neutral" | "happy" | null;

const MoodSelector = ({
  selected,
  onSelect,
}: {
  selected: Mood;
  onSelect: (mood: Mood) => void;
}) => (
  <div className="flex items-center justify-center gap-8">
    {([
      { mood: "sad" as Mood, label: "Unhappy", emoji: "😞" },
      { mood: "neutral" as Mood, label: "Okay", emoji: "😐" },
      { mood: "happy" as Mood, label: "Happy", emoji: "😊" },
    ]).map(({ mood, label, emoji }) => (
      <button
        key={mood}
        onClick={() => onSelect(mood)}
        className={`flex flex-col items-center gap-2 rounded-xl border-2 p-6 transition hover:scale-105 ${
          selected === mood
            ? "border-primary bg-primary/5 shadow-md"
            : "border-gray-200 bg-white hover:border-gray-300"
        }`}
      >
        <span className="text-5xl">{emoji}</span>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </button>
    ))}
  </div>
);

const FeedbackForm = ({ mood }: { mood: Mood }) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      firstName: (form.firstName as HTMLInputElement).value,
      lastName: (form.lastName as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      feedback: (form.feedback as HTMLTextAreaElement).value,
      mood: mood || "",
    };

    try {
      await submitReviewForm(data);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg text-center">
        <span className="mb-4 inline-block text-5xl">✅</span>
        <h3 className="mb-2 text-xl font-bold text-gray-900">Thank you for your feedback!</h3>
        <p className="text-gray-600">We appreciate you taking the time to share your thoughts. We&apos;ll do our best to improve.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-8 text-center">
        <span className="mb-3 inline-block text-4xl">😔</span>
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          Sorry to hear that you&apos;re not satisfied.
        </h3>
        <p className="text-gray-600">
          Please provide us with your feedback and we&apos;ll do our best to improve.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-gray-700">
              First Name <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-gray-700">
              Last Name <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
            Email <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="feedback" className="mb-1.5 block text-sm font-medium text-gray-700">
            Your Feedback <span className="text-gray-500">(Please let us know what we can do to improve?)</span>
          </label>
          <textarea
            id="feedback"
            name="feedback"
            required
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            placeholder="Tell us about your experience..."
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
};

const HappyReview = ({ onBack }: { onBack: () => void }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleHappySubmit = async () => {
    try {
      await submitReviewForm({
        firstName: "",
        lastName: "",
        email: "",
        feedback: "",
        mood: "happy",
      });
    } catch {}
    setSubmitted(true);
    window.open(
      "https://search.google.com/local/writereview?placeid=ChIJhQJRMCzGwoAR3mY6sJibzVg",
      "_blank"
    );
  };

  return (
    <div className="text-center">
      <span className="mb-4 inline-block text-6xl">🎉</span>
      <h3 className="mb-2 text-2xl font-bold text-gray-900">
        We&apos;re so glad you had a great experience!
      </h3>
      <p className="mb-6 text-gray-600">
        Would you mind sharing your experience on Google? It helps others find us and means the world to our team.
      </p>
      <button
        onClick={handleHappySubmit}
        disabled={submitted}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 disabled:opacity-60"
      >
        <svg className="h-5 w-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" fill="#EA4335" />
          <path d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.51h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-18.14z" fill="#4285F4" />
          <path d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.9 23.9 0 000 24c0 3.77.9 7.34 2.44 10.51l8.09-5.92z" fill="#FBBC05" />
          <path d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" fill="#34A853" />
        </svg>
        {submitted ? "Redirecting to Google..." : "Review us on Google"}
      </button>
      <button
        onClick={onBack}
        className="mt-4 block mx-auto text-sm text-gray-500 underline hover:text-gray-700 transition"
      >
        Go back
      </button>
    </div>
  );
};

const ReviewFunnel = () => {
  const [mood, setMood] = useState<Mood>(null);

  return (
    <section className="min-h-[70vh] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/brands/a1logo.png"
              alt="A-1 Total Service Plumbing"
              width={120}
              height={60}
              className="h-auto w-[120px] object-contain"
            />
          </div>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            How was your experience?
          </h1>
          <p className="text-gray-600">Your feedback helps us improve our services.</p>
        </div>

        {!mood && <MoodSelector selected={mood} onSelect={setMood} />}

        {mood === "happy" && <HappyReview onBack={() => setMood(null)} />}

        {(mood === "sad" || mood === "neutral") && (
          <div>
            <FeedbackForm mood={mood} />
            <div className="mt-6 text-center">
              <button
                onClick={() => setMood(null)}
                className="text-sm text-gray-500 underline hover:text-gray-700 transition"
              >
                Go back
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewFunnel;
