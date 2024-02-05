import Image from "next/image";
import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      {/* BG */}
      <div className="hero-map " />

      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
        <h1 className="bold-52 lg:bold-88">Arina Travels</h1>
        <p>
          We want to be on each of your journeys searching satisfaction of
          seeing the incorruptible beauty of nature. We can help you on and
          adventure across exotic and mervealous places around the world. We can
          help you on an adventure around the world in just one app.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(1, 0, 4)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <div className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Execellent Reviews
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button type="button" title="How It Works" icon="/play.svg" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex flex-1 items-start ">
        <div className="relative bg-green-90 p-6 rounded-3xl z-20 w-[268px] flex flex-col gap-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src={"/close.svg"} alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <div className="regular-16 block text-gray-20">Distance</div>
              <p className="bold-20 text-white">237.3</p>
            </div>
            <div className="flex flex-col">
              <div className="regular-16 block text-gray-20">Elavation</div>
              <p className="bold-20 text-white">23</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
