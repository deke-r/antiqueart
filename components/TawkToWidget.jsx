"use client";

import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/63edbd15c2f1ac1e20338ec8/1gpcal77i";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");


    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    script.onload = () => {
      if (window.Tawk_API && typeof window.Tawk_API.setAttributes === "function") {
        window.Tawk_API.setAttributes(
          {
            site: "ANTIQUEART",
          },
          function (error) {
            if (error) console.error("Tawk attribute error:", error);
          }
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToWidget;