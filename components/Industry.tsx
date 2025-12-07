"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import IndustriesCarousel from "./IndustriesCarousel";
const Industry = () => {
  const serve = useRef(null);
  useGSAP(() => {
    gsap.from(serve.current, {
      duration: 1,
      x: 100,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: serve.current,
        scrub: 1,
        start: "top 85%",
        end: "bottom center",
      },
    });
  });
  return (
    <div className="overflow-hidden">
      <div className="w-full h-auto py-30 min-w-[200px] mx-auto px-10 sm:py-40 md:py-20 flex flex-col justify-center ">
        <div
          ref={serve}
          className="text-white text-center mb-10 md:text-center font-light text-5xl font-head"
        >
          Industries We Serve
        </div>
        <div className="w-full flex justify-center items-center">
          <IndustriesCarousel />
        </div>
      </div>
    </div>
  );
};

export default Industry;
