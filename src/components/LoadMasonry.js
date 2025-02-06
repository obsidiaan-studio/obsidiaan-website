import { useLayoutEffect } from "react";
import { useRouter } from "next/router";

const LoadMasonry = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    // Ensure code runs only in the browser
    if (typeof window !== "undefined") {
      const Masonry = require("masonry-layout");

      const initializeMasonry = () => {
        // Find the grid container
        const masonryGrid = document.querySelector(".masonry-grid");
        
        if (masonryGrid) {
          // Initialize Masonry on the grid
          new Masonry(masonryGrid, {
            percentPosition: true,
            itemSelector: ".masonry-item",
          });
        }
      };

      // Initialize Masonry on initial page load
      initializeMasonry();

      // Re-initialize Masonry on route change
      const handleRouteChange = () => {
        initializeMasonry();
      };

      // Listen to route changes and re-trigger Masonry
      router.events.on("routeChangeComplete", handleRouteChange);

      // Cleanup event listener when component unmounts
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router]); // Trigger this effect when the route changes

  return null; // This component doesn't render anything itself
};

export default LoadMasonry;
