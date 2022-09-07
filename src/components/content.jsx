import React from "react";
import About from "./about";
import Address from "./address";
import Socials from "./Socials";
import Info from "./info";
import Image from "./image";

function Content() {
  return (
    <div className="flex flex-col gap-2 items-center w-[317px] mx-auto bg-[#1A1B21] text-[14px] rounded-[10px]">
      <Image />
      <div className="flex flex-col gap-2 px-[35px]">
        <Info />
        <About />
        <Address />
      </div>
        <Socials />
    </div>
  );
}

export default Content;
