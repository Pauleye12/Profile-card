import React from "react";

function Info() {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <h2 className="text-[25px] font-[700] ">Igoji Caroline</h2>
      <h3 className="text-[16px] font-[400]">Fashion Designer</h3>
      <h4 className="text-[13px] font-[400]">
        CEO <b>CEES Clothing</b>{" "}
      </h4>
      <section className="flex justify-center gap-[20px] mt-2">
        <a
          href="https://www.snapchat.com/add/obiye2020?share_id=j8OpyvmzgN0&locale=en-GB"
          className="bg-white text-black py-[9px] px-[13px] border[1px] rounded-[6px] text-[14px] font-[500] snapchat"
        >
          <i className="uil uil-snapchat-alt mr-3"></i>
          Snapchat
        </a>
        <a
          href="mailto:igojicaroline@gmail.com"
          target="_blank"
          className="bg-[#5093E2] py-[9px] px-[13px] shadow-[0px 1px 2px rgba(0, 0, 0, 0.05)] rounded-[6px] text-[14px] font-[500] email"
        >
          <i className="uil uil-envelope-add mr-2"></i>
          E-mail
        </a>
      </section>
    </div>
  );
}

export default Info;
