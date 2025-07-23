import { useEffect } from "react";
import { useLocation } from "react-router-dom";

async function loadPreline() {
  return import("preline/dist/index.js");
}

export default function PrelineInit() {
  const location = useLocation();

  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();
      if (window.HSStaticMethods?.autoInit) {
        window.HSStaticMethods.autoInit();
      }
    };
    initPreline();
  }, [location.pathname]);

  return null;
}