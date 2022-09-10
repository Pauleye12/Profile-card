import React from "react";

function Socials() {
  return (
    <div className="bg-[#161619] flex gap-4 items-center justify-center w-full rounded-b-md h-[55px] text-[24px] mt-3">
      <a
        href="https://instagram.com/cees_clothings?igshid=YmMyMTA2M2Y="
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.snapchat.com/add/obiye2020?share_id=j8OpyvmzgN0&locale=en-GB"
        target="_blank"
      >
        <i class="uil uil-snapchat-alt"></i>
      </a>

      <a href="#" target="_blank">
        <i class="uil uil-twitter-alt"></i>
      </a>

      <a href="http://wa.me/+2348145076195" target="_blank">
        <i class="uil uil-whatsapp"></i>
      </a>
    </div>
  );
}

export default Socials;
