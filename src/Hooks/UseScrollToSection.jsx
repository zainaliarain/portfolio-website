import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);
};

export default useScrollToSection;
