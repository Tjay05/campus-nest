// All text that changes with tab/role lives here, not in JSX.
export const getHeroCopy = (tab, role) => {
  const key = tab === "signup" ? `signup-${role}` : "signin";
  return HERO_COPY[key];
};

const HERO_COPY = {
  "signup-student": {
    badge: "A place that feels like yours",
    title: "Come home to",
    accent: "something good",
    text: "Find your space, meet the people behind it, and make your next move with confidence.",
  },
  "signup-landlord": {
    badge: "Good spaces deserve great people",
    title: "Meet your next",
    accent: "great tenant",
    text: "Put your place in front of students looking around Jos and make every enquiry count.",
  },
  signin: {
    badge: "Your next chapter is right here",
    title: "Welcome back",
    accent: "to your place",
    text: "Your search, your space, and your conversations are right where you left them.",
  },
};

export const PANEL_COPY = {
  signup: {
    eyebrow: "your place is waiting",
    title: "Create your account",
    sub: "A few details, then you're one step closer to home.",
  },
  signin: {
    eyebrow: "good to have you back",
    title: "Welcome back",
    sub: "Sign in and pick up right where you left off.",
  },
};

export const TABS = [
  { id: "signup", label: "Create Account" },
  { id: "signin", label: "Sign in" },
];
