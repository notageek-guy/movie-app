import React from "react";

export default function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col    hover:text-white items-center cursor-pointer w-12 sm:w-20">
      <Icon className="h-8 mb-1  group-hover:animate-bounce" />
      <p className=" opacity-100 hover:opacity-100 tracking-widest">{title}</p>
    </div>
  );
}
