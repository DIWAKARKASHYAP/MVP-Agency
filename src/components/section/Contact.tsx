"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { supabase } from "@/app/lib/supabase";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) throw error;

      console.log("Email submitted successfully:", email);
      setSubmitStatus('success');
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
            Due to high demand, we prioritize efficiency and will connect with
            you as quickly as possible
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 mt-5"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow text-white border-slate-700"
              aria-label="Email address"
              disabled={isSubmitting}
            />
            <RainbowButton
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Connect'}
            </RainbowButton>
          </form>
          {submitStatus === 'success' && (
            <p className="text-green-500 text-center mt-2">Thank you for joining the waitlist!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500 text-center mt-2">An error occurred. Please try again.</p>
          )}
        </div>
      </div>
    </>
  );
}