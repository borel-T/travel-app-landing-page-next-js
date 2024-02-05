import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

interface CampSiteProps {
  bgImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  bgImage,
  title,
  subtitle,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${bgImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div
        className="h-full flex  flex-col items-start justify-between p-6 lg:px-20
       lg:py-10 border-2 border-blue-500"
      >
        {/* MAP */}
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-2">
            <Image src={"/folded-map.svg"} alt="map" height={28} width={28} />
          </div>
          <div className="flex flex-col gap-1 text-white">
            <h4 className="bold-18">{title}</h4>
            <p className="regular-14">{subtitle}</p>
          </div>
        </div>
        {/* FOLLOWERS */}
        <div className="flexCenter gap-6 ">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url, key) => (
              <Image
                src={url}
                key={key}
                alt="person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16t md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

function Camp() {
  return (
    <section
      className="border-2 border-green-500 2xl:max-container relative flex flex-col
  py-10 lg:mb-10 lg:py-20 xl:mb-20"
    >
      <div
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto 
      lg:h-[400px] xl:h-[640px]
      "
      >
        <CampSite
          bgImage="bg-bg-img-1 bg"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          bgImage="bg-bg-img-1 bg"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
      </div>
    </section>
  );
}

export default Camp;