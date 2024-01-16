import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../../Loader.json";

const Loader = () => {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const container = lottieContainerRef.current;

    if (container) {
      const anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });

      return () => {
        anim.destroy();
      };
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
  <div ref={lottieContainerRef} style={{ width: "25%", height: "25%" }} />
</div>

  );
};

export default Loader;


