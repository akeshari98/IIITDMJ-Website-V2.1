import React from "react";
import ImageGallery from "../../components/ImageGallery";

import MemberTableView from "../../components/MemberTableView";




const CellArrayData = [
  {
    title: "CSE",
    subTitle: "Computer Science Engineering",
  },
  {
    title: "ECE",
    subTitle: "Electronics & Communication Engineering",
  },
  {
    title: "ME",
    subTitle: "Mechanical Engineering",
  },
];

const committeeMemberArray = [
  {
    name: "Atul Gupta",
    designation: "Proffesor",
    batch: "CSE",
    connect: "atul@iiitdmj.ac.in",
  },
  {
    name: "Vinod Kumar Jain",
    designation: "Asst. Professor",
    batch: "CSE",
    connect: "vkjain@iiitdmj.ac.in",
  },
  {
    name: "Preeti Khanna",
    designation: "Professor",
    batch: "CSE",
    connect: "xyz@iiitdmj.ac.in",
  },
  {
    name: "P.N. Kondekar",
    designation: "Professor",
    batch: "ECE",
    connect: "xyz@iiitdmj.ac.in",
  },
  {
    name: "Sanjeev Narayan Sharma",
    designation: "Professor",
    batch: "ECE",
    connect: "xyz@iiitdmj.ac.in",
  },
  {
    name: "Sachin Kumar Jain",
    designation: "Asst. Professor",
    batch: "ECE",
    connect: "xyz@iiitdmj.ac.in",
  },
];

const Club = () => {
  return (
    <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
      <h1 className="text-5xl font-semibold text-center my-10">
        Faculty Members
      </h1>

    <MemberTableView  data={committeeMemberArray} DESIGNATION BATCH/>
      <div className="flex justify-center items-center flex-col gap-10 ">
        {CellArrayData.map((item, key) => {
          return (
            <ImageGallery
              key={key}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Club;
