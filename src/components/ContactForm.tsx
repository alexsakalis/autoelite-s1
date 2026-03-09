"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useTranslations } from "next-intl";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  vehicle: z.string().min(2),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

const inputClasses =
  "mt-1.5 block w-full rounded-xl border border-surface-border bg-surface-card px-4 py-3 text-sm text-white placeholder:text-text-muted transition-colors focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/50";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
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
        <h3 className="text-lg font-bold text-white">{t("success")}</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          {t("name")}
        </label>
        <input id="name" placeholder={t("namePlaceholder")} {...register("name")} className={inputClasses} />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            {t("email")}
          </label>
          <input id="email" type="email" placeholder={t("emailPlaceholder")} {...register("email")} className={inputClasses} />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white">
            {t("phone")}
          </label>
          <input id="phone" type="tel" placeholder={t("phonePlaceholder")} {...register("phone")} className={inputClasses} />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-medium text-white">
          {t("vehicle")}
        </label>
        <input id="vehicle" placeholder={t("vehiclePlaceholder")} {...register("vehicle")} className={inputClasses} />
        {errors.vehicle && <p className="mt-1 text-xs text-red-400">{errors.vehicle.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">
          {t("message")}
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder={t("messagePlaceholder")}
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
        {t("submit")}
      </button>
    </form>
  );
}
