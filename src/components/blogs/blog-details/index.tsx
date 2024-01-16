"use client";

import Feature from "../features";
import { Blog } from "@/utils/types";
import { Facebook, LucideTwitter } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { IoStarSharp } from "react-icons/io5";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Specification from '../Specification'

export default function BlogDetailsHome({ blogData }: { blogData: Blog }) {
  console.log(blogData, "blogData");

  const [comment, setComment] = useState<string>("");
  const { data: session } = useSession();
  const router = useRouter();

  async function handleCommentSave() {
    let extractComments = [...blogData.comments];

    extractComments.push(`${comment}|${session?.user?.name}`);

    const response = await fetch(
      `${process.env.URL}/api/blog-post/update-post`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: blogData?.id,
          comments: extractComments,
        }),
      }
    );

    const data = await response.json();

    console.log(data, "comment123");

    if (data && data.success) {
      setComment("");
      router.refresh();
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      router.refresh();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!blogData) return null;

  return (
    <>
      <div>
        <div className="absolute -mt-8">
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
          <div className="absolute z-[999] p-7 pt-20 w-full h-full">
            <div className="justify-center items-center flex flex-col gap-4">
              <div
                className="justify-center items-center flex flex-col gap-4 
              lg:mx-44 md:mx-16 sm:mx-4"
              >
                <h1 className="sm:text-5xl text-4xl font-bold text-center">
                  {blogData?.title.replace("'", "&apos;")}
                </h1>

                <p className="sm:text-[1.2rem] text-[1rem] sm:leading-[30px] leading-[25px] text-[#a6a6a6] text-center sm:mx-14 mx-2">
                  {`Create stunning motion designs, videos, and animations with the
                world's first professional motion graphics toolset for mobile
                platforms. From keyframe animation to video compositing to
                visual effects, do it all from your iPhone, iPad, Mac (with
                  Apple Silicon), or Android device.`.replace("'", "&apos;")}
                </p>
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

              <h1 className="text-6xl font-bold my-4 mt-16">
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

              <div className="flex xl:mx-24 gap-5 items-center justify-center flex-wrap flex-row w-full my-6">
                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>Latest Version</AlertTitle>
                  <AlertDescription>v5.0.200.1000653</AlertDescription>
                </Alert>
                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>Size</AlertTitle>
                  <AlertDescription>81.58 MB</AlertDescription>
                </Alert>
                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>Released On</AlertTitle>
                  <AlertDescription>Aug 5, 2018</AlertDescription>
                </Alert>

                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>Last Updated On</AlertTitle>
                  <AlertDescription>December 15, 2023</AlertDescription>
                </Alert>
                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>Developer</AlertTitle>
                  <AlertDescription>Alight Motion</AlertDescription>
                </Alert>
                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>Category/Genres</AlertTitle>
                  <AlertDescription>
                    Video Editing/Video Players & Editors
                  </AlertDescription>
                </Alert>
                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>File Type</AlertTitle>
                  <AlertDescription>APK</AlertDescription>
                </Alert>
                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>Supported For</AlertTitle>
                  <AlertDescription>Only Android 6.0 and up</AlertDescription>
                </Alert>
                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>Price</AlertTitle>
                  <AlertDescription>100% Free</AlertDescription>
                </Alert>
                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>MOD Info</AlertTitle>
                  <AlertDescription>
                    Premium/Paid Subscription Unlocked- No Watermark- Single
                    Package APK (No SAI Needed)
                  </AlertDescription>
                </Alert>
                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>Developer/Publisher:</AlertTitle>
                  <AlertDescription>
                    Alight Motion/Alight Creative Inc
                  </AlertDescription>
                </Alert>
                <Alert className="w-72 h-32">
                  <IoStarSharp className="h-4 w-4" />
                  <AlertTitle>Google Play ID/Package Name</AlertTitle>
                  <AlertDescription>com.alightcreative.motion</AlertDescription>
                </Alert>
              </div>
              
              <div>
               {/* <Specification /> */}
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
// <div className="w-full h-full">
//   {/* Top Title Sectoin */}
//   <div className="my-32 px-16 flex gap-8 flex-col">
//     {/* <!-- Breadcrumb --> */}
//     <nav className="flex text-black rounded-lg">
//       <ol className="inline-flex items-center space-x-1">
//         <li className="inline-flex items-center">
//           <Link
//             href="/"
//             className="inline-flex items-center text-sm font-medium dark:hover:text-white dark:text-zinc-400 text-zinc-700 hover:text-blue-600"
//           >
//             <svg
//               className="w-3 h-3 me-2.5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
//             </svg>
//             Home
//           </Link>
//         </li>
//         <li>
//           <div className="flex items-center">
//             <svg
//               className="rtl:rotate-180 block w-3 h-3 mx-1 text-zinc-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//             <a
//               href="/games"
//               className="ms-1 text-sm font-medium text-zinc-700 hover:text-blue-600 md:ms-2 dark:text-zinc-400 dark:hover:text-white"
//             >
//               Games
//             </a>
//           </div>
//         </li>
//         <li>
//           <div className="flex items-center">
//             <svg
//               className="rtl:rotate-180 block w-3 h-3 mx-1 text-zinc-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//             <a
//               href="#"
//               className="ms-1 text-sm font-medium text-zinc-700 hover:text-blue-600 md:ms-2 dark:text-zinc-400 dark:hover:text-white"
//             >
//               Casual
//             </a>
//           </div>
//         </li>
//         <li>
//           <div className="flex items-center">
//             <svg
//               className="rtl:rotate-180 w-3 h-3 mx-1 text-zinc-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//             <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-zinc-400">
//               Animash
//             </span>
//           </div>
//         </li>
//       </ol>
//     </nav>

//     <div className="flex flex-wrap gap-4 w-full justify-between items-center">
//       <div className="flex gap-4">
//       <img
//         className="rounded-3xl aspect-square object-cover"
//         width={100}
//         height={100}
//         src={blogData?.image || ""}
//         alt={blogData.title}
//         />
//       <div className="flex flex-col">
//       <h1 className="text-xl font-bold">{blogData?.title}</h1>
//       <p className="text-md">
//       <div className="flex !flex-row">
//       <IoStarSharp />
//       <IoStarSharp />
//       <IoStarSharp />
//       <IoStarSharp />
//       <IoStarSharp />
//       </div>
//       </p>
//       </div>
//         </div>
//       <Button className="rounded-full !bg-primary !text-white h-full w-fit py-4 font-bold px-8"><Download /> Download Now</Button>
//     </div>
//   </div>
//   {/* Information */}
//   <div></div>
//   {/* Blog Text */}
//   <div></div>
//   {/* Comments */}
//   <div></div>
// </div>

// <div className="w-full h-full">
//   <div className="flex flex-row m-20 gap-6 shadow-2xl">
//     <img
//       className="rounded-2xl max-h-[200px] object-cover"
//       width={180}
//       src={blogData?.image || ""}
//       alt={blogData.title}
//     />
//     <div className="flex flex-col">
//       <div className="flex flex-row gap-3 mb-1 text-zinc-300 font-bold">
//         <a
//           href="/"
//           className="p-0 hover:underline underline-green-500 border-[#68CB5B] text-[#68CB5B]"
//         >
//           Home
//         </a>
//         /
//         <a
//           href="/"
//           className="p-0 hover:underline underline-green-500 border-[#68CB5B] text-[#68CB5B]"
//         >
//           Games
//         </a>
//         /
//         <a
//           href="/"
//           className="p-0 hover:underline underline-green-500 border-[#68CB5B] text-[#68CB5B]"
//         >
//           Role Playing
//         </a>
//         /
//         <Link
//           className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white"
//           href={`blogs/category/${blogData?.category}`}
//         >
//           {blogData?.category}
//         </Link>
//       </div>

//       <h1 className="text-2xl font-bold">{blogData?.title}</h1>

//       <span className="text-gray-500 text-sm mt-2">
//         {/* add a link of website */}
//         {/* {blog.description} */}
//       </span>

//       <p className="mt-2 text-gray-600 text-sm">
//         {blogData?.description}
//       </p>

//       <div className="flex gap-5 p-3">
//         <Link href="/" className="w-5 h-7">
//           <Facebook className="w-full h-full hover:text-emerald-500 transition-all" />
//         </Link>
//         <Link href="/" className="w-5 h-7">
//           <LucideTwitter className="w-full h-full hover:text-emerald-500 transition-all" />
//         </Link>
//         <Link href="/" className="w-5 h-7">
//           {/* <FaXTwitter className="w-full h-full hover:text-emerald-500 transition-all" /> */}
//         </Link>
//         <Link href="/" className="w-5 h-7">
//           {/* <FaWhatsapp className="w-full h-full hover:text-emerald-500 transition-all" /> */}
//         </Link>
//       </div>
//       <Button className="transition-all hover:bg-emerald-700 p-3 bg-emerald-500 text-white font-bold uppercase text-xl rounded-md mt-3">
//         Download
//       </Button>
//     </div>
//   </div>
//   <div>
//     {/* Make Blog Details */}
//     {/* <BlogDetails blog={blog} slug={blogData.slug} /> */}
//     <div className="w-full h-fit flex justify-center items-center">
//       <Button className="transition-all px-12 mt-6 hover:bg-emerald-700 p-3 bg-emerald-500 text-white font-bold uppercase text-xl rounded-full">
//         Download
//       </Button>
//     </div>
//   </div>
// </div>
// <section className="pt-[150px] pb-[120px]">
//   <div className="container">
//     <div className="-mx-4 flex flex-col gap-4 items-center justify-center">
//       <div className="w-full px-4 lg:w-8/12">
//         <div>
//           <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
//             {blogData?.title}
//           </h2>
//           <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
//             <div className="flex flex-wrap items-center">
//               <div className="mr-10 mb-5 flex items-center">
//                 <div className="mr-4">
//                   <div className="relative h-10 w-10 overflow-hidden rounded-full">
//                     <Image src={blogData?.userimage} alt="User" fill />
//                   </div>
//                 </div>
//                 <div className="w-full">
//                   <h4 className="mb-1 text-base font-medium text-body-color">
//                     By
//                     <span className="pl-2">
//                       {blogData?.userid.split("_")[0]}
//                     </span>
//                   </h4>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-5">
//               <Link
//                 className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white"
//                 href={`blogs/category/${blogData?.category}`}
//               >
//                 {blogData?.category}
//               </Link>
//             </div>
//           </div>
//           <div>
//             <div className="mb-10 w-full overflow-hidden rounded">
//               <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
//                 <Image
//                   src={blogData?.image || ""}
//                   alt="Blog"
//                   className="object-cover object-center"
//                   fill
//                 />
//               </div>
//             </div>
//             <p
//               className="mb-8 leading-relaxed text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
//               style={{ wordWrap: "break-word" }}
//             >
//               {blogData?.description}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full lg:w-8/12 flex gap-4">
//         {session !== null ? (
//           <>
//             <input
//               name="comment"
//               id="comment"
//               autoFocus
//               autoComplete="off"
//               placeholder="Add comment here"
//               value={comment}
//               onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
//                 setComment(event.target.value)
//               }
//               className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
//             />
//             <Button onClick={handleCommentSave}>Add</Button>
//           </>
//         ) : null}
//       </div>
//       <section className="dark:bg-gray-900 py-8 lg:py-16 w-full lg:w-8/12">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-lg lg:text-2xl font-bold text-black dark:text-white">
//             Comments ({blogData?.comments.length})
//           </h2>
//         </div>
//         {blogData && blogData.comments && blogData.comments.length > 0
//           ? blogData.comments.map((comment, index) => (
//               <div
//                 key={index}
//                 className="p-6 text-base rounded-lg dark:bg-gray-900"
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <div className="flex items-center">
//                     <p className="inline-flex items-center mr-3 text-sm text-black dark:text-white font-semibold">
//                       {comment.split("|")[1] === blogData?.userid
//                         ? `${
//                             comment.split("|")[1].split("_")[0]
//                           } (Author)`
//                         : comment.split("|")[1].split("_")[0]}
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   {comment.split("|")[0]}
//                 </p>
//               </div>
//             ))
//           : null}
//       </section>
//     </div>
//   </div>
// </section>
