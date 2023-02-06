import { useEffect, useState } from "react";

export const useIsDesktop = () => {
  const [isDesktop, setDesktop] = useState(null);

  useEffect(() => {
    if (window.innerWidth > 1080) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    function updateMedia() {
      if (window.innerWidth > 1080) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    }

    window.addEventListener("resize", updateMedia);
    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);
//.........................
  return { isDesktop };
};
