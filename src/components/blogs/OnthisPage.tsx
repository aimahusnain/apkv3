import React from "react";

const OnthisPage = () => {
  function handleSmoothScroll(e: any, element: string) {
    e.preventDefault();

    const targetElement = document.getElementById(element);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }
  return (
    <div>
      <h2>On This Page</h2>
      <div className="flex flex-col items-start justify-center">
        <button onClick={(e) => handleSmoothScroll(e, "title")}>
          Alight Motion MOD APK 2024 with Pro Features, No Watermark, and
          Ad-Free Experience!
        </button>

        <button onClick={(e) => handleSmoothScroll(e, "specifications")}>
          Alight Motion Specifications
        </button>

        <button onClick={(e) => handleSmoothScroll(e, "features")}>
          Alight Motion Features
        </button>

        <button onClick={(e) => handleSmoothScroll(e, "faqs")}>
          Go to FAQ&apos;s
        </button>
      </div>
    </div>
  );
};

export default OnthisPage;
