import React from "react";

const Cover = ({ path, coverTitle }) => {
  return (
    <div className="relative">
      <div className="lg:h-[320px] h-[254px] bg-[#07332F]">
        <h1 className=" absolute top-32 custScreen:left-32 left-28 lg:left-24 tracking-wide text-white">
          Home/{path}
        </h1>
        <h1 className=" absolute top-36 custScreen:left-[90px] left-20 lg:left-24 tracking-wide text-3xl mt-2 font-bold text-white">
          {coverTitle}
        </h1>
      </div>
    </div>
  );
};

export default Cover;
