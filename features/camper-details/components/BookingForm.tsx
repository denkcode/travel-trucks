"use client";

import { FormEvent, useState } from "react";
import { createBookingRequest } from "@/services/campersApi";

type BookingFormProps = {
  camperId: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
};

const emailPattern = /^\S+@\S+\.\S+$/;

export default function BookingForm({ camperId }: BookingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const nextErrors: FormErrors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (trimmedName.length < 2) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!emailPattern.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (!validateForm()) {
      setStatus("idle");
      return;
    }

    setStatus("loading");

    try {
      const response = await createBookingRequest(camperId, {
        name: name.trim(),
        email: email.trim(),
      });
      setStatus("success");
      setMessage(response.message);
      setName("");
      setEmail("");
      setErrors({});
    } catch {
      setStatus("error");
      setMessage("Booking request failed. Please try again.");
    }
  };

  return (
    <section className="rounded-2xl border border-[var(--gray-light)] p-6">
      <h2 className="mb-2 text-xl font-semibold text-[var(--main)]">
        Book your campervan now
      </h2>
      <p className="mb-6 text-sm text-[var(--gray)]">
        Stay connected! We are always ready to help you.
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setErrors((current) => ({ ...current, name: undefined }));
            }}
            placeholder="Name*"
            aria-invalid={Boolean(errors.name)}
            className={`h-14 w-full rounded-xl bg-[var(--inputs)] px-5 text-sm text-[var(--main)] outline-none ${
              errors.name
                ? "border border-[var(--button)] bg-red-50"
                : "border border-transparent"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-[var(--button)]">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setErrors((current) => ({ ...current, email: undefined }));
            }}
            placeholder="Email*"
            aria-invalid={Boolean(errors.email)}
            className={`h-14 w-full rounded-xl bg-[var(--inputs)] px-5 text-sm text-[var(--main)] outline-none ${
              errors.email
                ? "border border-[var(--button)] bg-red-50"
                : "border border-transparent"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-[var(--button)]">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 h-14 rounded-[200px] bg-[var(--grey-green)] text-sm font-medium text-[var(--white)] transition-colors hover:bg-[var(--green-hover)] disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>

        {message && (
          <p
            className={`text-sm ${
              status === "success"
                ? "text-[var(--grey-green)]"
                : "text-[var(--button)]"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </section>
  );
}
