"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import Image from "next/image";
import submitContactForm from "@/utils/submitContactForm";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      firstName: (form.firstName as HTMLInputElement).value,
      lastName: (form.lastName as HTMLInputElement).value,
      phone: (form.phone as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      message: (form.message as HTMLTextAreaElement).value,
      source: "widget",
    };

    try {
      await submitContactForm(data);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[998] flex flex-col items-end" ref={panelRef}>
      {open && (
        <div className="mb-4 w-[340px] min-h-[560px] max-h-[80vh] overflow-y-auto rounded-lg bg-white px-6 py-6 shadow-xl dark:bg-dark-2 sm:w-[360px]">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo.svg"
                alt="Logo"
                width={36}
                height={36}
                className="shrink-0"
              />
              <h3 className="text-lg font-semibold text-dark dark:text-white">
                Let us know if you have any questions!
              </h3>
            </div>
            <button
              onClick={() => { setOpen(false); setStatus("idle"); }}
              className="text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11.41 10l4.3-4.29a1 1 0 10-1.42-1.42L10 8.59l-4.29-4.3a1 1 0 10-1.42 1.42L8.59 10l-4.3 4.29a1 1 0 001.42 1.42L10 11.41l4.29 4.3a1 1 0 001.42-1.42L11.41 10z" />
              </svg>
            </button>
          </div>

          <div className="mb-5 flex gap-2.5">
            <Image
              src="/images/logo/logo.svg"
              alt="Avatar"
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 rounded-full"
            />
            <div className="rounded-xl rounded-tl-none bg-gray-50 px-3.5 py-2.5 dark:bg-dark-3">
              <p className="text-xs leading-relaxed text-body-color dark:text-dark-6">
                This text goes straight to my personal phone. I will make sure to get back to you the second I&apos;m free!
              </p>
            </div>
          </div>

          {status === "success" ? (
            <p className="py-6 text-center text-sm font-medium text-green-600">
              Thank you! We&apos;ll be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-5 flex gap-3">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    required
                    className="w-full border-b border-[#f1f1f1] bg-transparent py-3 text-sm text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    required
                    className="w-full border-b border-[#f1f1f1] bg-transparent py-3 text-sm text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
              </div>
              <div className="mb-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  required
                  className="w-full border-b border-[#f1f1f1] bg-transparent py-3 text-sm text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border-b border-[#f1f1f1] bg-transparent py-3 text-sm text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-5">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Describe your issue...*"
                  required
                  className="w-full resize-none border-b border-[#f1f1f1] bg-transparent py-3 text-sm text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                ></textarea>
              </div>
              {status === "error" && (
                <p className="mb-2 text-xs text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-white transition duration-300 hover:bg-primary/90 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition duration-300 hover:bg-primary/90 hover:scale-105"
        aria-label={open ? "Close contact form" : "Open contact form"}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
            <path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
