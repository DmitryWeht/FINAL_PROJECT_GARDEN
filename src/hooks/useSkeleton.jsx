import { useEffect, useState } from "react";

const useSkeleton = (delay) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showSkeleton;
};

export default useSkeleton;
