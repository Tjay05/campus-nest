import { useState } from "react";

// Returns [isActive, trigger]. trigger() turns the flag on for `ms`, ignoring repeat calls meanwhile.
const useTimedFlag = (ms) => {
  const [active, setActive] = useState(false);

  const trigger = () => {
    if (active) return;
    setActive(true);
    setTimeout(() => setActive(false), ms);
  };

  return [active, trigger];
};

export default useTimedFlag;
