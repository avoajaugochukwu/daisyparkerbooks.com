"use client";

import { useState } from "react";

/**
 * "Letters from the desk" — a self-contained signup. There is no mailing
 * backend wired up yet, so on submit it simply acknowledges and points the
 * reader at the real inbox. Swap the onSubmit for a provider when ready.
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div>
      {done ? (
        <p className="font-display text-xl text-bottle" role="status">
          Thank you — you’re on the list. A letter will find you before long.
        </p>
      ) : (
        <form
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setDone(true);
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className="field h-12 flex-1 px-4 text-base"
          />
          <button
            type="submit"
            className="h-12 shrink-0 bg-bottle px-6 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:bg-bottle-deep"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
