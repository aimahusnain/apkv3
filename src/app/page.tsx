"use client";

import { Tooltip } from "@nextui-org/tooltip";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import AlightMotionSpecifications from "../components/blogs/AlightMotionSpecifications";
import AlreadyFeatures from "../components/blogs/AlreadyFeatures";
import FAQ from "../components/blogs/Faq";
import WhyUseit from "../components/blogs/WhyUseit";
import { Button } from "@nextui-org/button";

async function extractAllBlogs() {
  try {
    const res = await fetch(`${process.env.URL}/api/blog-post/get-all-post`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const data = await res.json();

    if (data.success) {
      return data.data;
    } else {
      throw new Error("API request was not successful");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

type Key = "photos" | "music" | "videos";

export default function Blogs() {
  const [selected, setSelected] = React.useState<any>("photos");
  const [comment, setComment] = useState<string>("");
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    let interval = setInterval(() => {
      router.refresh();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  // const blogPostsList = await extractAllBlogs();

  // if (!blogPostsList || blogPostsList.length === 0) {
  //   // Handle the case where there are no blog posts or an error occurred
  //   return <div>No featured posts available.</div>;
  // }

  // const featuredPost = blogPostsList.find((post: any) => post.isFeatured);
  // console.log("Featured Post:", featuredPost);

  return (
    <>
      <div>
        <div className="absolute -mt-8 !text-white">
          <video
            className="mix-blend-screen w-full object-cover z-0 hidden md:block glitch"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/desktop_landing.mp4" type="video/mp4" />{" "}
          </video>
          <video
            className="mix-blend-screen w-full object-cover h-full z-0 md:hidden glitch mobile-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/mobile_landing.mp4" type="video/mp4" />{" "}
          </video>
        </div>
        <div className="w-full md:h-[450px] h-[400px] shadow-xl shadow-[#000]">
          <img
            src="/download.jpg"
            className="object-cover h-full w-screen"
            alt=""
          />
        </div>

        <div>
          <div className="absolute z-[10] p-7 pt-20 w-full h-full">
            <div className="justify-center items-center flex flex-col gap-4">
              <div
                className="justify-center items-center flex flex-col gap-4 
            lg:mx-44 md:mx-16 sm:mx-4"
              >
                <h1
                  id="title"
                  className="sm:text-5xl text-4xl font-bold text-center"
                >
                  Alight Motion MOD APK 2024 with Pro Features, No Watermark,
                  and Ad-Free Experience!
                </h1>

                <p className="sm:text-[1.2rem] text-[1rem] sm:leading-[30px] leading-[25px] text-[#a6a6a6] text-center sm:mx-14 mx-2">
                  {`Create stunning motion designs, videos, and animations with the
              world's first professional motion graphics toolset for mobile
              platforms. From keyframe animation to video compositing to
              visual effects, do it all from your iPhone, iPad, Mac (with
                Apple Silicon), or Android device.`.replace("'", "&apos;")}
                </p>
                <WhyUseit />

                <Link
                  href="/"
                  className="bg-black border mt-7 px-4 p-3 gap-3 border-white rounded-xl flex flex-row items-center"
                >
                  <img
                    src="/alightmotionlogo.webp"
                    width={70}
                    height={70}
                    className="aspect-square rounded-xl"
                    alt="Alight Motion Logo"
                  />
                  <div className="flex flex-col text-left">
                    <p className="text-3xl uppercase -mt-1 font-semibold">
                      Download
                    </p>
                    <p className="text-lg">From Here</p>
                  </div>
                </Link>
              </div>
              <div>
                <h2>On This Page</h2>
                <div className="flex flex-col items-start justify-center">
                  <button
                    onClick={(e) =>
                      handleSmoothScroll(
                        e,
                        "title"
                      )
                    }
                  >
                    Alight Motion MOD APK 2024 with Pro Features, No Watermark,
                    and Ad-Free Experience!
                  </button>
                  
                  <button
                    onClick={(e) => handleSmoothScroll(e, "specifications")}
                  >
                    Alight Motion Specifications
                  </button>
                  
                  <button
                    onClick={(e) => handleSmoothScroll(e, "features")}
                  >
Alight Motion Features
                  </button>
                  

                  <button
                    onClick={(e) => handleSmoothScroll(e, "faqs")}
                  >
                    Go to FAQ's
                  </button>
                </div>
              </div>

              <AlightMotionSpecifications />

              <AlreadyFeatures />

              <div className="flex flex-col text-center">
                <FAQ />

                <div className="h-fit flex gap-14 py-8 justify-center">
                  <Tooltip showArrow={true} content="Instagram">
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/alightmotion"
                    >
                      <FaInstagram
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                  </Tooltip>

                  <Tooltip showArrow={true} content="Twitter">
                    <Link
                      target="_blank"
                      href="https://twitter.com/alightcreative"
                    >
                      <RiTwitterXFill
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                  </Tooltip>

                  <Tooltip showArrow={true} content="Facebook">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/alightcreative"
                    >
                      <MdOutlineFacebook
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                  </Tooltip>

                  <Tooltip showArrow={true} content="Youtube">
                    <Link
                      target="_blank"
                      href="https://youtube.com/alightmotion"
                    >
                      <SlSocialYoutube
                        size={20}
                        className="hover:scale-125 transition-all w-8"
                      />
                    </Link>
                  </Tooltip>
                </div>
                <p className="text-white/40 text-xs">
                  Copyright © Splice Video Editor S.r.l. | Corso Como 15, 20154
                  Milan, Italy | VAT, tax code, and number of registration with
                  the Milan Monza Brianza Lodi Company Register 11505810967 |
                  REA number MI 2608304 | Contributed capital €10.000,00 | Sole
                  shareholder company subject to the management and coordination
                  of Bending Spoons S.p.A.{" "}
                </p>
              </div>
            </div>
          </div>

          <img
            src="/bg.png"
            className="hidden md:block h-full w-full"
            alt="sdf"
          />

          <img src="/bg_1.png" className="md:hidden h-full w-full" alt="" />

          <img
            src="/stars.png"
            alt=""
            className="hidden sm:block h-full w-full absolute top-[600px]"
          />
          <img
            src="/vertical_stars.png"
            alt=""
            className="sm:hidden h-full w-full absolute top-[500px]"
          />
        </div>
        <div>
          <img
            src="/bg_tint.png"
            className="hidden md:block h-full w-full"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
}
