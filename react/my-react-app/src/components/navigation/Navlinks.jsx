import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import React from "react";
const Navlinks = () => {
  return (
    <div className="flex gap-[75px] items-center ">
      <AiOutlineHome size={32} color="#ffffff" />
      <AiOutlineHeart size={32} color="#ffffff" />
      <AiOutlineHistory size={32} color="#ffffff" />
      <AiOutlineVideoCamera size={32} color="#ffffff" />
    </div>
  );
};

export default Navlinks;
