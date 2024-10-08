import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Marquee2 = ({ data }) => {
  const marqueeRef = useRef(null);

  const stopMarquee = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const startMarquee = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  return (
    <div>
      <marquee
        className="border-2 h-8 rounded-lg w-[80vw] text-gray-500 font-semibold"
        behavior="scroll"
        direction="left"
        scrollamount="10"
        scrolldelay="100"
        loop="infinite"
        onMouseOver={stopMarquee}
        onMouseOut={startMarquee}
        ref={marqueeRef}
      >
        {data
          ? data.map((val, i) => {
              return (
                <Link
                  key={i}
                  to="#"
                  target="_blank"
                  className="cursor-pointer inline-flex gap-2 items-center mx-4 underline hover:text-blue-600"
                >
                  
                  <span className="inline-flex items-center justify-center rounded-xl border-none bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-2 animate-pulse text-sm font-semibold text-white transition duration-200 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-white dark:focus:ring-white/80">
                    New
                  </span>
                  <span>{val.text}</span>
                </Link>
              );
            })
          : "No Data Available"}
      </marquee>
    </div>
  );
};

export default Marquee2;
