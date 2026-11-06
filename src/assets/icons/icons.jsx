const iconProps = {
  className: "w-4.75 h-4.75 fill-none stroke-current stroke-[1.7]",
  viewBox: "0 0 24 24",
};

export const StudentIcon = () => (
  <svg {...iconProps}>
    <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
    <path d="M6.5 11.4v4.2c3.2 2.5 7.8 2.5 11 0v-4.2M21 9.5v5" />
  </svg>
);

export const LandlordIcon = () => (
  <svg {...iconProps}>
    <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z" />
    <path d="M8 10h.01M16 10h.01" />
  </svg>
);

export const EyeIcon = () => (
  <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-[1.6]" viewBox="0 0 24 24">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const VerifyMailIcon = () => (
  <svg className="w-8.75 h-8.75 fill-none stroke-current stroke-[1.8]" viewBox="0 0 48 48"><rect x="6" y="11" width="36" height="26" rx="6"/>
    <path d="m8 15 16 12 16-12"/><path d="m17 25 5 5 10-11"/>
  </svg>
);
