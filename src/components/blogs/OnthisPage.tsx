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
    <div className="w-72 p-4 flex flex-col gap-2">
      <h2 className="text-xl font-bold">On This Page</h2>
      <div className="flex flex-col items-start justify-center gap-4">
        <button onClick={(e) => handleSmoothScroll(e, "title")} className="text-left">
          Title
        </button>

        <button onClick={(e) => handleSmoothScroll(e, "download")} className="text-left">
          Download
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

        <button onClick={(e) => handleSmoothScroll(e, "howtodownload")} className="text-left">
          How to Download
        </button>

        <button onClick={(e) => handleSmoothScroll(e, "conclusion")} className="text-left">
          Conclusion
        </button>
      </div>
    </div>
  );
};

export default OnthisPage;
