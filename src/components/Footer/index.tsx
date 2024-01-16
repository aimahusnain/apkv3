import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineFacebook } from "react-icons/md";
import { SlSocialYoutube } from "react-icons/sl";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";

import Link from "next/link";


const Footer = () => {
  return (
    <div className="flex flex-col text-center p-8">
      <div className="h-fit flex gap-14 py-8 justify-center">
        <Tooltip content="Twitter">
            <Link target="_blank" href="https://twitter.com/alightcreative">
              <RiTwitterXFill size={40} className="hover:scale-125 transition-all" />
            </Link>
        </Tooltip>

        <Tooltip content="Facebook">
          <Link target="_blank" href="https://www.facebook.com/alightcreative">
            <MdOutlineFacebook size={40} className="hover:scale-125 transition-all" />
          </Link>
        </Tooltip>

        <Tooltip content="Youtube">
          <Link target="_blank" href="https://youtube.com/alightmotion">
            <SlSocialYoutube size={40} className="hover:scale-125 transition-all w-8" />
          </Link>
        </Tooltip>
      </div>
      <p>
        Copyright © Splice Video Editor S.r.l. | Corso Como 15, 20154 Milan,
        Italy | VAT, tax code, and number of registration with the Milan Monza
        Brianza Lodi Company Register 11505810967 | REA number MI 2608304 |
        Contributed capital €10.000,00 | Sole shareholder company subject to the
        management and coordination of Bending Spoons S.p.A.{" "}
      </p>
    </div>
  );
};

export default Footer;
