import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnNavigate = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const unblock = window.scrollTo(0, 0);

    return () => {
      if (unblock) {
        unblock();
      }
    };
  }, []);

  return null; 
};

export default ScrollToTopOnNavigate;
