"use client";

import { useContext, useEffect, useState } from "react";
import ThemeToggler from "../themes";
import Link from "next/link";
import { menuItems } from "@/utils";
import { MenuItem } from "@/utils/types";
import Button from "../button";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "@/context";
import { BookKey } from "lucide-react";

export default function Header() {
  const [sticky, setSticky] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const { data: session } = useSession();
  const { setSearchResults, setSearchQuery } = useContext(GlobalContext);
  const router = useRouter();
  const pathName = usePathname();
  console.log(session, "session");

  function handleStickyNavbar() {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  }

  function handleNavbarToggle() {
    setNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  useEffect(() => {
    setSearchResults([]);
    setSearchQuery("");
  }, [pathName]);

  return (
    <div>
      <header
        className={`top-0 left-0 z-40 flex w-full items-center bg-transparent
        ${
          sticky
            ? "!fixed inset-x-0 border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:shadow-none dark:backdrop-blur-none !z-[9999] from-white/40 dark:bg-black/40"
            : "absolute"
        }
        `}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href={"/"}
                className={`flex font-mono text-[40px] font-bold cursor-pointer items-center w-full
                    ${sticky ? "py-5 lg:py-2" : "py-8"}
                    `}
              >
                <svg id="Layer_1" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="170px" height="41px" viewBox="0 0 1024 251" fill="white">
      
    <path d="M49.3,60c-0.1-0.3-0.2-0.5-0.4-0.7c-0.2-0.2-0.4-0.3-0.7-0.3c-5.2-0.9-10.5-0.9-15.7,0
      c-0.3,0.1-0.5,0.2-0.7,0.4c-0.2,0.2-0.4,0.4-0.5,0.6L0,154.9c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1
      c0,0,0.1,0,0.2,0.1c4.9,0.7,9.9,0.7,14.7-0.1c0.1,0,0.1,0,0.2-0.1c0.1,0,0.1-0.1,0.1-0.2l8-26.7h33.4l7.8,26.7
      c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0.1,0.2,0.1c5.1,0.8,10.3,0.8,15.4,0c0.1,0,0.1,0,0.1-0.1s0.1-0.1,0.1-0.1c0,0,0-0.1,0.1-0.2
      c0-0.1,0-0.1,0-0.2L49.3,60z M26.9,116.4l3.9-13C34,92.9,37,82.2,39.7,71.2h0.5c3,10.9,5.9,21.7,9.1,32.2l3.8,13H26.9z" className="st0"></path> <path d="M146.5,83.1c-2.1,0-4.1,0.1-6.2,0.4c-0.3,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.4,0.6-0.4,1v69.1c0,0.4,0.1,0.7,0.4,1
      c0.2,0.3,0.6,0.4,0.9,0.5c4.1,0.5,8.3,0.5,12.4,0c0.3,0,0.7-0.2,0.9-0.5c0.2-0.3,0.4-0.6,0.3-1V85c0-0.4-0.1-0.7-0.3-1
      c-0.2-0.3-0.6-0.4-0.9-0.5C150.6,83.2,148.6,83.1,146.5,83.1L146.5,83.1z" className="st0"></path> <path d="M146.5,73.4c5,0,9.1-4.1,9.1-9.2c0-5.1-4.1-9.2-9.1-9.2c-5,0-9.1,4.1-9.1,9.2C137.4,69.3,141.4,73.4,146.5,73.4
      z" className="st0"></path> <path d="M111.1,134.4V56.9c0-0.4-0.1-0.7-0.4-1c-0.2-0.3-0.6-0.4-0.9-0.5c-2-0.3-4.1-0.4-6.2-0.4
      c-2.1,0-4.2,0.1-6.2,0.4c-0.3,0.1-0.7,0.2-0.9,0.5c-0.2,0.3-0.4,0.6-0.4,1v77.5c0,4.6,1.4,9,4.1,12.7c2.7,3.7,6.4,6.4,10.8,7.8
      c2.8,0.9,5.8,1.1,8.7,0.6l1.5-0.3c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.2-0.3c0.4-2,0.5-4,0.5-6c0-2.3-0.2-4.6-0.5-6.8
      c0-0.1-0.1-0.2-0.1-0.2c-0.1-0.1-0.2-0.1-0.3-0.1C119.6,141.8,111.1,140.9,111.1,134.4z" className="st0"></path> <path d="M214.1,145.6h-13.2c-9.1,0-12-2.8-12-7.1c0-1.5,0.4-3,1.1-4.3c0.7-1.3,1.7-2.5,2.8-3.4
      c3.2,1.4,6.6,2.2,10.1,2.2c15,0,26.9-9.1,26.9-24.9c0.1-4.5-0.9-8.9-2.9-13c4.3-0.7,8.4-2.5,11.9-5.2c0.1-0.1,0.2-0.2,0.2-0.4
      c0-0.2,0-0.3-0.1-0.5l-0.7-1.4c-1.5-2.9-3.5-5.4-6.1-7.4l-0.6-0.5c-0.1-0.1-0.3-0.1-0.4-0.1s-0.3,0.1-0.4,0.1
      c-6.3,4.5-15.5,4-17.9,3.8c-3.2-1.2-6.6-1.8-10.1-2c-14.9,0-27.8,9.6-27.8,26c0.1,3.8,1,7.5,2.6,10.9c1.7,3.4,4.1,6.3,7.1,8.6
      l-0.3,0.3c-3.9,2.9-8,7.8-8,13.4c-0.1,2.4,0.5,4.8,1.6,6.9c1.2,2.1,2.8,3.9,4.9,5.1v0.7c-6.7,4.1-10.5,9.7-10.5,15.8
      c0,12.6,12.5,19.1,29.8,19.1c23,0,37.6-11.3,37.6-25.2C240,150.8,231.1,145.6,214.1,145.6z M202.9,92.4c7.6,0,13.6,5.6,13.6,15.4
      c0,9.7-6.1,15.5-13.6,15.5c-7.4,0-13.6-5.9-13.6-15.5C189.3,98,195.3,92.4,202.9,92.4L202.9,92.4z M204.6,178.5
      c-11.9,0-19.2-4.2-19.2-11.3c0-3.7,1.8-7.4,6.1-10.5c3.2,0.7,6.4,1,9.6,1h10.8c8.7,0,13.4,1.8,13.4,7.9
      C225.5,172.2,217.1,178.5,204.6,178.5z" className="st0"></path> <path d="M314.2,110.4c0-18.4-6.7-28.7-22-28.7c-11.4,0-17.4,4.8-22.7,10.9V55.3c0-0.1,0-0.2-0.1-0.2
      c-0.1-0.1-0.1-0.1-0.2-0.1c-2.4-0.3-4.7-0.5-7.1-0.5c-2.4,0-4.8,0.2-7.2,0.5c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0.1-0.1,0.2-0.1,0.2v100.3
      c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1c2.4,0.3,4.7,0.5,7.1,0.5c2.2,0,6-0.4,7.2-0.5c0.1,0,0.2-0.1,0.2-0.1
      c0.1-0.1,0.1-0.1,0.1-0.2v-42.1c0-3.6,1-7.2,2.9-10.2s4.7-5.5,7.9-7c2.1-1,4.5-1.4,6.8-1.4c8.5,0,12.1,5,12.1,17.5v43.3
      c0,0.1,0,0.2,0.1,0.3s0.1,0.1,0.2,0.1c2.3,0.3,4.7,0.5,7.1,0.5c2.4,0,4.8-0.2,7.2-0.5c0.1,0,0.2-0.1,0.2-0.1
      c0.1-0.1,0.1-0.2,0.1-0.2L314.2,110.4z" className="st0"></path> <path d="M375,143.3c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0-0.2,0
      c-2.3,0.9-4.7,1.4-7.2,1.5c-7.4,0-10.1-3.4-10.1-12V95.7h16.9c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2c0.4-3.8,0.4-7.6,0-11.4
      c0-0.1-0.1-0.2-0.1-0.2c-0.1-0.1-0.2-0.1-0.2-0.1h-16.9V66.8c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1,0-0.3-0.1-0.4,0
      c-0.1,0-0.2,0.1-0.3,0.2l-27.4,27.9c-0.1,0.1-0.2,0.3-0.2,0.4c0,0.2,0,0.3,0.1,0.5c0.1,0.1,0.2,0.3,0.3,0.4c0.1,0.1,0.3,0.1,0.5,0.1
      h12.9v36.6c0,15.2,5.6,25.4,21.8,25.4c4.6-0.1,9.2-0.9,13.6-2.5c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.3,0.1-0.4l-0.1-0.9
      c-0.3-3.5-1.2-6.9-2.6-10.1L375,143.3z" className="st0"></path> <path d="M550,119c0-25.1,16.6-39.5,35-39.5S620,94,620,119c0,24.8-16.6,39.1-35,39.1S550,143.8,550,119z M604,119
      c0-15.9-7.3-26.6-19.1-26.6c-11.8,0-18.9,10.6-18.9,26.6c0,15.9,7.3,26.3,18.9,26.3S604,134.8,604,119z" className="st0"></path> <path d="M729.1,119c0-25.1,16.6-39.5,35-39.5s35,14.5,35,39.5c0,24.8-16.6,39.1-35,39.1S729.1,143.8,729.1,119z
       M783.2,119c0-15.9-7.3-26.6-19.1-26.6s-18.9,10.6-18.9,26.6c0,15.9,7.3,26.3,18.9,26.3S783.2,134.8,783.2,119L783.2,119z" className="st0"></path> <path d="M815.4,81.4c4-0.8,8.1-0.8,12.1,0l0.5,0.1l1.2,10.3h0.4c6.9-6.7,14.4-12.3,24.6-12.3
      c15.8,0,22.9,10.6,22.9,29.7v46.2c0,0.2-0.1,0.4-0.2,0.6s-0.3,0.3-0.6,0.3l-1.3,0.2c-3.7,0.6-7.4,0.6-11,0l-1.6-0.3
      c-0.2,0-0.4-0.1-0.6-0.3c-0.1-0.2-0.2-0.4-0.2-0.6v-44.4c0-12.9-3.8-18.1-12.6-18.1c-6.9,0-11.6,3.5-18.3,10.2v52.3
      c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.3,0.3-0.6,0.3l-1.3,0.2c-3.7,0.6-7.4,0.6-11.1,0l-1.4-0.2c-0.2,0-0.4-0.2-0.6-0.3
      c-0.1-0.2-0.2-0.4-0.2-0.6v-74C815.3,81.5,815.3,81.5,815.4,81.4C815.4,81.4,815.4,81.4,815.4,81.4L815.4,81.4z" className="st0"></path> <path d="M702.8,82.8c-2.1,0-4.1,0.1-6.2,0.4c-0.4,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.4,0.6-0.4,1v70.7c0,0.4,0.1,0.7,0.4,1
      c0.2,0.3,0.6,0.4,0.9,0.5c4.1,0.5,8.3,0.5,12.4,0c0.3,0,0.7-0.2,0.9-0.5c0.2-0.3,0.4-0.6,0.3-1V84.6c0-0.4-0.1-0.7-0.4-1
      c-0.2-0.3-0.5-0.4-0.9-0.5C706.9,82.9,704.9,82.8,702.8,82.8L702.8,82.8z" className="st0"></path> <path d="M702.8,73.1c5,0,9.1-4.1,9.1-9.2c0-5.1-4.1-9.2-9.1-9.2c-5,0-9.1,4.1-9.1,9.2C693.7,69,697.8,73.1,702.8,73.1z" className="st0"></path> <path d="M675.2,142.9c-0.1-0.1-0.2-0.3-0.3-0.3c-0.1-0.1-0.3-0.1-0.5,0c-2.3,0.9-4.7,1.4-7.2,1.5
      c-7.4,0-10.1-3.4-10.1-12V95.3h16.9c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2c0.4-3.8,0.4-7.6,0-11.4c0-0.1-0.1-0.2-0.1-0.2
      c-0.1-0.1-0.2-0.1-0.2-0.1h-17V66.4c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1,0-0.3-0.1-0.4,0c-0.1,0-0.2,0.1-0.3,0.2
      l-27.4,27.9c-0.1,0.1-0.2,0.3-0.2,0.4c0,0.2,0,0.3,0.1,0.5c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.3,0.1,0.5,0.1h12.9v36.5
      c0,15.3,5.6,25.4,21.8,25.4c4.6-0.1,9.2-1,13.6-2.5c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.3,0.1-0.4l-0.1-1
      c-0.3-3.5-1.2-6.9-2.6-10.1V142.9z" className="st0"></path> <path d="M513.5,58.5c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.3,0.4c-2,5.9-22.1,62.5-24.3,69h-0.7
      c-2.2-6.4-22.6-63-24.7-69c-0.1-0.1-0.1-0.3-0.3-0.4c-0.1-0.1-0.3-0.2-0.4-0.2l-0.9-0.2c-4.7-0.8-9.5-0.8-14.2,0.1h-0.1
      c-0.2,0-0.4,0.1-0.5,0.3s-0.2,0.3-0.2,0.5l-6,98h0.4c4.5,1,9.2,1,13.7,0l4.5-75.2l24,65.5l0.4,0.1c3.1,0.9,6.3,0.9,9.4-0.1l0,0
      l23.8-65.1l4.5,74.8l0.7,0.1c4.3,0.9,8.8,0.9,13.2,0l0.8-0.2l-6.1-98c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.3h-0.4
      c-4.7-0.9-9.4-0.9-14.1,0L513.5,58.5z" className="st0"></path> <path d="M902.1,119.9c4.4,4.5,8,9.8,10.4,15.6c2.4,5.8,3.6,12.1,3.6,18.4c0,6.3-1.2,12.6-3.6,18.4
      c-2.4,5.8-5.9,11.1-10.4,15.6c-4.4,4.5-9.7,8-15.5,10.4c-5.8,2.4-12,3.7-18.3,3.7c-6.3,0-12.5-1.2-18.3-3.7s-11.1-6-15.5-10.4
      c-0.8-0.8-1.7-1.4-2.7-1.8c-1-0.4-2.1-0.6-3.2-0.6c-1.1,0-2.2,0.2-3.2,0.6c-1,0.4-1.9,1-2.7,1.8c-0.8,0.8-1.4,1.7-1.8,2.7
      c-0.4,1-0.6,2.1-0.6,3.2c0,1.1,0.2,2.2,0.6,3.2c0.4,1,1,1.9,1.8,2.7l0,0c5.2,5.2,11.4,9.4,18.2,12.2c6.8,2.8,14.1,4.3,21.4,4.3
      c7.4,0,14.6-1.5,21.4-4.3c6.8-2.8,13-7,18.2-12.2c5.2-5.2,9.3-11.5,12.1-18.3c2.8-6.8,4.3-14.2,4.3-21.6c0-7.4-1.4-14.8-4.3-21.6
      C911.4,131.4,907.3,125.2,902.1,119.9L902.1,119.9z" className="st0"></path> <path d="M864.5,251c23.6,0.2,46.3-9,63.1-25.7c16.8-16.6,26.5-39.3,26.7-63.1c0.3-23.8-8.8-46.6-25.3-63.7
      s-38.9-26.8-62.5-27.1C887.8,72,908,81,922.8,96.4c14.7,15.4,22.9,36.1,22.6,57.5c-0.3,21.4-8.9,41.9-24,56.9
      c-15.1,15-35.5,23.5-56.8,23.5c-2.1,0.1-4.2,1-5.6,2.6c-1.5,1.6-2.3,3.6-2.3,5.8c0,2.2,0.8,4.2,2.3,5.8
      C860.3,250,862.4,250.9,864.5,251L864.5,251z" className="st0"></path> <path d="M955,246.1c22.5-22.9,35.2-53.9,35.3-86.2c0.1-32.3-12.4-63.3-34.8-86.4s-52.9-36.4-84.9-37.1
      c-32-0.7-63.1,11.4-86.4,33.5C806,49.2,835,38,864.9,38.6c29.9,0.6,58.4,13,79.3,34.6c20.9,21.6,32.5,50.5,32.4,80.7
      c-0.1,30.1-12,59-33.1,80.4l0,0c-0.8,0.8-1.4,1.7-1.8,2.7c-0.4,1-0.6,2.1-0.6,3.2c0,1.1,0.2,2.2,0.6,3.2c0.4,1,1,1.9,1.8,2.7
      c0.8,0.8,1.7,1.4,2.7,1.8c1,0.4,2.1,0.6,3.2,0.6s2.2-0.2,3.2-0.6C953.4,247.4,954.3,246.8,955,246.1L955,246.1z" className="st0"></path> <path d="M868.6,0c-40.5,0-79.4,16-108.4,44.5c-29,28.5-45.8,67.3-46.8,108.1c1-38.9,17.2-75.8,45.1-102.8
      c27.9-27,65.1-41.8,103.8-41.3c38.6,0.5,75.5,16.3,102.7,44s42.4,65,42.5,103.9c0.1,2.2,1,4.2,2.5,5.7c1.5,1.5,3.6,2.3,5.7,2.3
      c2.1,0,4.2-0.8,5.7-2.3c1.5-1.5,2.4-3.5,2.5-5.7c0-20.6-4-40.9-11.8-59.9c-7.8-19-19.3-36.2-33.7-50.8
      c-14.4-14.5-31.6-26.1-50.4-33.9C909.2,4,889,0,868.6,0z" className="st0"></path></svg>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={handleNavbarToggle}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[7px] rotate-45" : ""}
                        `}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "opacity-0" : ""}
                        `}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[-8px] -rotate-45" : ""}
                        `}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4 
                px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100

                ${
                  navbarOpen
                    ? "visible top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }
                `}
                >
                  <ul className="lg:ml-[40%] block lg:flex lg:space-x-12">
                    {menuItems.map((item: MenuItem) => (
                      <li key={item.id} className="group relative">
                        <Link
                          href={item.path}
                          className={`flex py-2 text-lg font-sans font-semibold text-black group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}

                    <div className="lg:hidden xl:hidden md:hidden sm:flex sm:gap-3 xs:gap-3 sm:flex-row xs:flex-row xs:flex">
                      {session !== null ? (
                        <Link
                          href="/create"
                          className="rounded-md bg-primary mt-2 py-2 px-5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                        >
                          Create
                        </Link>
                      ) : null}

                      {session ? (
                        <button
                          className="rounded-md bg-primary mt-2 py-2 px-5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                          onClick={() => signOut()}
                        >
                          Signout
                        </button>
                      ) : (
                        <Link
                          className="rounded-md bg-primary mt-2 py-2 px-5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                          href="/register"
                        >
                          Register
                        </Link>
                      )}
                    </div>
                  </ul>
                </nav>
              </div>
              <div className="flex gap-4 items-center justify-end pr-16 lg:pr-0 md:flex xs:hidden sm:hidden">
                <div className="flex gap-3 items-center">
                  <ThemeToggler />
                </div>
                {session !== null ? (
                  <Button
                    onClick={() => {
                      router.push("/create");
                    }}
                    text="Create"
                  />
                ) : null}

                <Button
                  onClick={
                    session !== null ? () => signOut() : () => signIn("github")
                  }
                  text={session !== null ? "Logout" : "Login"}
                />
                
                {/* {session ? (
                  <Button onClick={() => signOut()} text="Signout" />
                ) : (
                  <Link
                    className="rounded-lg bg-primary py-3 px-7 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    href="/register"
                  >
                    Register
                  </Link>
                )} */}
              </div>
              <div className="hidden sm:flex xs:flex sm:relative xs:relative sm:right-16 xs:right-16 md:hidden 2xl:hidden">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
