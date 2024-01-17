import React from "react";

const OnthisPage = () => {
  function handleSmoothScroll(e: any, element: string) {
    e.preventDefault();

    const targetElement = document.getElementById(element);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  
  function handleSmoothScrollforcenter(e: any, element: string) {
    e.preventDefault();

    const targetElement = document.getElementById(element);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center", // Center the target element vertically
      });
    }
  }

  return (
    <div className="w-72 p-4 flex flex-col gap-2">
      <h2 className="text-xl font-bold">On This Page</h2>
      <div className="flex flex-col items-start justify-center gap-4 mt-4">
        <button onClick={(e) => handleSmoothScroll(e, "title")} className="text-left text-white/40 hover:text-white">
          Title
        </button>

        <button onClick={(e) => handleSmoothScrollforcenter(e, "download")} className="text-left text-white/40 hover:text-white">
          Download
        </button>

        <button onClick={(e) => handleSmoothScroll(e, "specifications")} className="text-left text-white/40 hover:text-white">
          Alight Motion Specifications
        </button>

        <button onClick={(e) => handleSmoothScroll(e, "features")} className="text-left text-white/40 hover:text-white">
          Alight Motion Features
        </button>

        <button onClick={(e) => handleSmoothScroll(e, "faqs")} className="text-left text-white/40 hover:text-white">
          Go to FAQ&apos;s
        </button>

        <button onClick={(e) => handleSmoothScrollforcenter(e, "howtodownload")} className="text-left text-white/40 hover:text-white">
          How to Download
        </button>

        <button onClick={(e) => handleSmoothScroll(e, "conclusion")} className="text-left text-white/40 hover:text-white">
          Conclusion
        </button>
      </div>
    </div>
  );
};

export default OnthisPage;
