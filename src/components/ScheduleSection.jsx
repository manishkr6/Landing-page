import React from "react";
import scheduleImage from "../assets/stats.webp";
import { IoIosArrowRoundForward } from "react-icons/io";

const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        <div className="md:w-1/2 w-full">
          <img src={scheduleImage} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-1/2 w-full">
          <p className="text-orange-500 font-semibold ">SCHEDULE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
            Stramline YOur Business <br />
            With Smart Schedule Solutions
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
            quos ipsum, officia praesentium aut id blanditiis fugit delectus
            dolore accusantium, dolorem explicabo rerum? Vero, in.
          </p>

          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore scheduling features
            <IoIosArrowRoundForward className="size-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
