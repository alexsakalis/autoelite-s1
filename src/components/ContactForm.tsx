"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  vehicle: z.string().min(2, "Please enter your vehicle make/model"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const inputClasses =
  "mt-1.5 block w-full rounded-xl border border-surface-border bg-surface-card px-4 py-3 text-sm text-white placeholder:text-text-muted transition-colors focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/50";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Placeholder — wire to your API endpoint or form service
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-surface-border bg-surface-card p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/15">
          <svg className="h-7 w-7 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white">Message sent!</h3>
        <p className="mt-2 text-sm text-text-secondary">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input id="name" placeholder="Your name" {...register("name")} className={inputClasses} />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input id="email" type="email" placeholder="you@example.com" {...register("email")} className={inputClasses} />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white">
            Phone
          </label>
          <input id="phone" type="tel" placeholder="(555) 123-4567" {...register("phone")} className={inputClasses} />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-medium text-white">
          Vehicle Make / Model
        </label>
        <input id="vehicle" placeholder="e.g. Honda Civic 2020" {...register("vehicle")} className={inputClasses} />
        {errors.vehicle && <p className="mt-1 text-xs text-red-400">{errors.vehicle.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Describe your service needs..."
          {...register("message")}
          className={inputClasses}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-brand-orange py-3.5 text-sm font-bold text-brand-black transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-orange/25 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
