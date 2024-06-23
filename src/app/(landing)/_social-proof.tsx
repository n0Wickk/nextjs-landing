import React from "react";

import NumberTicker from "@/components/magicui/number-ticket";
import Marquee from "@/components/magicui/marquee";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

function SocialProof() {
  return (
    <>
      <section className="pb-16 px-4 lg:px-40 flex justify-center gap-16">
        <div className="text-center">
          <span className="text-5xl font-bold">
            <NumberTicker value={98} className="" />%
          </span>
          <p className="font-semibold">Customer Satisfaction Rate</p>
        </div>

        <div className="text-center">
          <span className="text-5xl font-bold">
            <NumberTicker value={100} className="" />+
          </span>
          <p className="font-semibold">Schools</p>
        </div>

        <div className="text-center">
          <span className="text-5xl font-bold">
            <NumberTicker value={600000} className="" />+
          </span>
          <p className="font-semibold">Students</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="py-4">
          <div className="container mx-auto px-4 md:px-8">
            <h3 className="text-center text-sm font-semibold text-gray-500">
              TRUSTED BY LEADING SCHOOLS
            </h3>
            <div className="relative mt-6">
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-4">
                <Marquee pauseOnHover className="[--duration:20s]">
                  {companies.map((logo, idx) => (
                    <img
                      key={idx}
                      src={`https://cdn.magicui.design/companies/${logo}.svg`}
                      className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                      alt={logo}
                    />
                  ))}
                </Marquee>
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background dark:from-black"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background dark:from-black"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SocialProof;