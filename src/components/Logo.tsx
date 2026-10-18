import React from "react";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="10" fill="#1E6B4F" />
      <path d="M11 25L25 11M25 11H15M25 11V21" stroke="#2BC48A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="25" r="3" fill="#FFFFFF" />
    </svg>
  );
}
