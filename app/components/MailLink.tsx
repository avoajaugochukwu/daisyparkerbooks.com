"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Spam-resistant email link. The address is assembled in the browser after
 * mount, so the server-rendered HTML (what harvesters scrape) never contains
 * a real `user@domain` string — and neither does the JS bundle, since the
 * parts are only joined at runtime.
 *
 * Before hydration / with JS disabled it degrades to a non-harvestable label
 * ("hello [at] daisyparkerbooks.com"), or to whatever `children` you pass.
 */
const USER = "hello";
const DOMAIN = "daisyparkerbooks.com";

export default function MailLink({
  subject,
  className,
  children,
}: {
  subject?: string;
  className?: string;
  children?: ReactNode;
}) {
  const [addr, setAddr] = useState<string | null>(null);
  useEffect(() => {
    // Assemble the address client-side only, after the (harvestable)
    // server HTML has already committed without it.
    const id = setTimeout(() => setAddr(`${USER}@${DOMAIN}`), 0);
    return () => clearTimeout(id);
  }, []);

  if (!addr) {
    // Server + first client render: identical, no real address present.
    return <span className={className}>{children ?? `${USER} [at] ${DOMAIN}`}</span>;
  }

  const href = `mailto:${addr}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return (
    <a href={href} className={className}>
      {children ?? addr}
    </a>
  );
}
