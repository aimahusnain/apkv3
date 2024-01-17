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
    <div className="w-72 bg-black border border-white rounded-xl p-4 flex flex-col gap-2">
      <h2 className="text-xl font-bold">On This Page</h2>
      <div className="flex flex-col items-start justify-center gap-4">
        <button onClick={(e) => handleSmoothScroll(e, "title")} className="text-left">
          Alight Motion MOD APK 2024 with Pro Features, No Watermark, and
          Ad-Free Experience!
        </button>
        <button onClick={(e) => handleSmoothScroll(e, "specifications")} className="text-left">
          Alight Motion Specifications
        </button>

        <button onClick={(e) => handleSmoothScroll(e, "features")} className="text-left">
          Alight Motion Features
        </button>

        <button onClick={(e) => handleSmoothScroll(e, "faqs")} className="text-left">
          Go to FAQ&apos;s
        </button>
      </div>
    </div>
  );
};

export default OnthisPage;
