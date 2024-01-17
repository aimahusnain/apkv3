"use client";

import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import { Blog } from "@/src/utils/types";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import Feature from "@/src/components/blogs/features";
import { Button } from "@nextui-org/button";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineFacebook } from "react-icons/md";
import { SlSocialYoutube } from "react-icons/sl";
import { Tooltip } from "@nextui-org/tooltip";
// import { Accordion, AccordionItem } from "@nextui-org/accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

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
              {/* <Link href="#faqs" className="transition-all">
  Go to FAQ's
</Link> */}

                <h1 className="sm:text-5xl text-4xl font-bold text-center">
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
                <div className="text-lg flex xl:mx-24 gap-5 items-center text-center justify-center flex-wrap flex-row w-full my-6">
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      High-quality Video in a Timely Manner
                    </AlertTitle>
                  </Alert>
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      Save HD Quality Content
                    </AlertTitle>
                  </Alert>
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      Simple To Operate
                    </AlertTitle>
                  </Alert>
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      Best For Professional Usage
                    </AlertTitle>
                  </Alert>
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      Excellent Performance
                    </AlertTitle>
                  </Alert>
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      Suitable User Interface
                    </AlertTitle>
                  </Alert>
                </div>

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

              <h1 className="text-6xl font-bold my-4 mt-16 text-center">
                Alight Motion Features
              </h1>

              <div className="flex xl:mx-24 gap-5 items-center justify-center flex-wrap flex-row w-full my-6">
                <Feature
                  title="Keyframe Animation"
                  description="Animate any property to bring every aspect of your creation to life."
                  image="keyframe_animation.gif"
                />
                <Feature
                  title="Camera Control"
                  description="Animate cameras to build dynamic scenes."
                  image="camera_control.gif"
                />
                <Feature
                  title="Video, Image, Text, and Graphics"
                  description="Combine multitude of layers in a variety of media types."
                  image="video_image.gif"
                />
                <Feature
                  title="Hierarchical Parenting"
                  description="Link layers to easily create sophisticated motion."
                  image="hierarchical_parenting.gif"
                />
                <Feature
                  title="Advanced Easing"
                  description="No need for fancy math: Alight Motion does the work for you."
                  image="advanced_easing.gif"
                />
                <Feature
                  title="150+ Visual Effects"
                  description="Versatile effects you can mix and match in infinite combinations."
                  image="150_effects.gif"
                />
                <Feature
                  title="Powerful Compositing"
                  description="Masking groups, blending modes, video transparency1, chroma and luma key. 1Apple platforms only"
                  image="composition.gif"
                />
                <Feature
                  title="Versatile Sharing"
                  description="Share video, GIF, image sequences, project packages, and reusable elements."
                  image="export.gif"
                />
                <Feature
                  title="Vector Illustration"
                  description="Illustrate and edit complex vector graphics right in the app."
                  image="vector_illustration.gif"
                />
              </div>

              <div className=" text-lg flex xl:mx-24 gap-5 items-center text-center justify-center flex-wrap flex-row w-full my-6">
                <div className="flex w-full flex-col px-0 sm:px-32">
                  <Tabs
                    aria-label="Options"
                    selectedKey={selected}
                    color="primary"
                    variant="bordered"
                    className="flex-wrap flex"
                    onSelectionChange={(key: any) => {
                      setSelected(key);
                    }} // Adjust this line
                  >
                    <Tab
                      key="photoframes"
                      title={
                        <div className="flex flex-col flex-wrap items-center space-x-2">
                          <span>Several Photo Frames</span>
                        </div>
                      }
                    >
                      <Card>
                        <CardBody>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </CardBody>
                      </Card>
                    </Tab>
                    
                    <Tab
                      key="editing-materials"
                      title={
                        <div className="flex items-center space-x-2">
                          <span>Import your own editing materials</span>
                        </div>
                      }
                    >
                      <Card>
                        <CardBody>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur.
                        </CardBody>
                      </Card>
                    </Tab>
                    
                    <Tab
                      key="library"
                      title={
                        <div className="flex items-center space-x-2">
                          <span>Download from the library</span>
                        </div>
                      }
                    >
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    
                    <Tab
                      key="elements"
                      title={
                        <div className="flex items-center space-x-2">
                          <span>Quickly save your favorite elements</span>
                        </div>
                      }
                    >
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    
                    <Tab
                      key="aspect-ratio"
                      title={
                        <div className="flex items-center space-x-2">
                          <span>Produce Video in Different Aspect Ratio.</span>
                        </div>
                      }
                    >
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    
                    <Tab
                      key="blending"
                      title={
                        <div className="flex items-center space-x-2">
                          <span>Blending Modes</span>
                        </div>
                      }
                    >
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    
                    <Tab
                      key="fonts"
                      title={
                        <div className="flex items-center space-x-2">
                          <span>2000+ Built-in Fonts</span>
                        </div>
                      }
                    >
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab
                      key="color"
                      title={
                        <div className="flex items-center space-x-2">
                          <span>Significant Color</span>
                        </div>
                      }
                    >
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </div>

              <h1 className="text-5xl font-bold my-4 mt-16 text-center">
                Alight Motion Specifications
              </h1>
              <div className="flex xl:mx-24 gap-5 items-center justify-center flex-wrap flex-row w-full my-6">
                <Alert className="w-fit h-24 hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row items-left justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col h-full justify-center">
                    <AlertTitle className="text-primary">
                      Latest Version
                    </AlertTitle>
                    <AlertDescription>v5.0.200.1000653</AlertDescription>
                  </div>
                </Alert>

                <Alert className="w-fit h-24 hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row items-left justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col h-full justify-center">
                    <AlertTitle className="text-primary">Size</AlertTitle>
                    <AlertDescription>81.58 MB</AlertDescription>
                  </div>
                </Alert>

                <Alert className="w-fit h-24 hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row items-left justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col h-full justify-center">
                    <AlertTitle className="text-primary">
                      Released On
                    </AlertTitle>
                    <AlertDescription>Aug 5, 2018</AlertDescription>
                  </div>
                </Alert>

                <Alert className="w-fit h-24 hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row items-left justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col h-full justify-center">
                    <AlertTitle className="text-primary">
                      Last Updated On
                    </AlertTitle>
                    <AlertDescription>December 15, 2023</AlertDescription>
                  </div>
                </Alert>
                <Alert className="w-fit h-24 hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row items-left justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col h-full justify-center">
                    <AlertTitle className="text-primary">
                      Supported For
                    </AlertTitle>
                    <AlertDescription>Only Android 6.0 and up</AlertDescription>
                  </div>
                </Alert>

                <Alert className="w-fit h-24 hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row items-left justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col h-full justify-center hover:bg-primary/30 cursor-pointer transition-all">
                    <AlertTitle className="text-primary">File Type</AlertTitle>
                    <AlertDescription>APK</AlertDescription>
                  </div>
                </Alert>

                <Alert className="w-fit h-24 hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row items-left justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col h-full justify-center">
                    <AlertTitle className="text-primary">Price</AlertTitle>
                    <AlertDescription>100% Free</AlertDescription>
                  </div>
                </Alert>
                <Alert className="w-fit h-24 items-left hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col h-full justify-center">
                    <AlertTitle className="text-primary">Category</AlertTitle>
                    <AlertDescription>Video Editing</AlertDescription>
                  </div>
                </Alert>

                <Alert className=" w-48 h-24 items-left hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col h-full justify-center">
                    <AlertTitle className="text-primary">MOD Info</AlertTitle>
                    <AlertDescription>
                      Single Package APK (No SAI Needed)
                    </AlertDescription>
                  </div>
                </Alert>
                <Alert className="w-52 h-24 items-left hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col h-full justify-center">
                    <AlertTitle className="text-primary">
                      Developer/Publisher:
                    </AlertTitle>
                    <AlertDescription>
                      Alight Motion/Alight Creative Inc
                    </AlertDescription>
                  </div>
                </Alert>
                <Alert className="w-fit h-24 items-left hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col h-full justify-center">
                    <AlertTitle className="text-primary">
                      Subscription
                    </AlertTitle>
                    <AlertDescription>
                      Premium/Paid Subscription Unlocked
                    </AlertDescription>
                  </div>
                </Alert>
                <Alert className="w-fit h-24 items-left hover:bg-primary/30 cursor-pointer transition-all flex gap-3 flex-row justify-center">
                  <div className="flex-col w-fit h-full flex items-center justify-center">
                    <IoStarSharp className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col h-full justify-center">
                    <AlertTitle className="text-primary">
                      Google Play ID/Package Name
                    </AlertTitle>
                    <AlertDescription>
                      com.alightcreative.motion
                    </AlertDescription>
                  </div>
                </Alert>
              </div>

              <h1 id="faqs" className="text-6xl font-bold my-4 mt-16 text-center">
                FAQ&apos;s
              </h1>
              <div className="">
              <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="sm:w-96 w-full text-left">
                      Does Alight Motion Support XML Files?
                    </AccordionTrigger>
                    <AccordionContent className="sm:w-96 w-full text-left">
                      Yes, Alight Motion does offer support to the XML files.
                      With the help of this feature you become able to import
                      the files from any source or folder. Thus it makes your
                      own job easier and you get to experience better results.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="sm:w-96 w-full text-left">
                      How to remove Watermarks in the Alight Motion App?
                    </AccordionTrigger>
                    <AccordionContent className="sm:w-96 w-full text-left">
                      There are two methods to remove the watermarks from your
                      final products in Alight Motion Mod. Either you buy the
                      premium version and automatically get rid of the
                      watermarks. On the other hand you can download the mod
                      version of Alight Motion which will help you get rid of
                      all the watermarks.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="sm:w-96 w-full text-left">
                      How to install Alight Motion Pro on PC?
                    </AccordionTrigger>
                    <AccordionContent className="sm:w-96 w-full text-left">
                      Alight Motion Pro can also be downloaded on a PC because
                      it&apos;s obvious users want to create graphics on a big
                      screen of their laptop or PC. So for this purpose you need
                      to install an Android emulator like BlueStacks on your PC.
                      Afterwards you can install the Alight Motion Pro app on
                      your PC to get it running smoothly.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="sm:w-96 w-full text-left">
                      How To Use an Alight Motion App on Your Phone?
                    </AccordionTrigger>
                    <AccordionContent className="sm:w-96 w-full text-left">
                      How To Use an Alight Motion App on Your Phone?
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="sm:w-96 w-full text-left">
                      Why Use Alight Motion For Android?
                    </AccordionTrigger>
                    <AccordionContent className="sm:w-96 w-full text-left">
                      Powerful Editing Tool High-Resolution Video Publishing
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* <Accordion variant="bordered" className="sm:w-96 w-full">
                  <AccordionItem
                    key="1"
                    aria-label="Does Alight Motion Support XML Files?"
                    title="Does Alight Motion Support XML Files?"
                  >
                    Yes, Alight Motion does offer support to the XML files. With
                    the help of this feature you become able to import the files
                    from any source or folder. Thus it makes your own job easier
                    and you get to experience better results.
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="How to remove Watermarks in the Alight Motion App?"
                    title="How to remove Watermarks in the Alight Motion App?"
                  >
                    There are two methods to remove the watermarks from your
                    final products in Alight Motion Mod. Either you buy the
                    premium version and automatically get rid of the watermarks.
                    On the other hand you can download the mod version of Alight
                    Motion which will help you get rid of all the watermarks.
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="How to install Alight Motion Pro on PC?"
                    title="How to install Alight Motion Pro on PC?"
                  >
                    {" "}
                    Alight Motion Pro can also be downloaded on a PC because
                    it&apos;s obvious users want to create graphics on a big
                    screen of their laptop or PC. So for this purpose you need
                    to install an Android emulator like BlueStacks on your PC.
                    Afterwards you can install the Alight Motion Pro app on your
                    PC to get it running smoothly.
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="How To Use an Alight Motion App on Your Phone?"
                    title="How To Use an Alight Motion App on Your Phone?"
                  >
                    {" "}
                    How To Use an Alight Motion App on Your Phone?
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="Why Use Alight Motion For Android?"
                    title="Why Use Alight Motion For Android?"
                  >
                    {" "}
                    Powerful Editing Tool, High-Resolution Video Publishing
                  </AccordionItem>
                </Accordion> */}
              </div>

              <div className="flex flex-col text-center p-8">
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

              {/* <div>
              <Specification
                title="Latest Version"
                description="v5.0.200.1000653"
                icon={<GitGraph className="w-20 h-20 rounded-xl shadow-lg" />}
              />
              <Specification
                title="Size"
                description="81.58 MB"
                icon={<GitGraph className="w-20 h-20 rounded-xl shadow-lg" />}
              />
              <Specification
                title="Released On"
                description="Aug 5, 2018"
                icon={<GitGraph className="w-20 h-20 rounded-xl shadow-lg" />}
              />
              <Specification
                title="Last Updated On"
                description="December 15, 2023"
                icon={<GitGraph className="w-20 h-20 rounded-xl shadow-lg" />}
              />
              <Specification
                title="Last Updated On"
                description="December 15, 2023"
                icon={<GitGraph className="w-20 h-20 rounded-xl shadow-lg" />}
              />
            </div> */}
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
