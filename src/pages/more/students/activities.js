import React, { useEffect, useState } from "react";
import Card from "../../../components/CardNew";
import college_img1 from "../../../resources/images/3.jpg";
import profile from "../../../resources/images/admin/profile.jpg";
import image1 from "../../../resources/images/activities1.jpg";

const MainPage = () => {
    const quickLinks = [
        { name: "Gymkhana", href: "/gymkhana" },
        { name: "Activities", href: "/activities" },
        // { name:"General Administration", href: "/generaladministration" },
        // { name:"Other Administration", href: "/otheradministration" },
        { name: "Counselling", href: "/counselling" },
        { name: "Hostels", href: "/hostels" },
        { name: "Alumni", href: "https://alumni.iiitdmj.ac.in/" },
        { name: "Students Mess", href: "https://www.iiitdmj.ac.in/mess.iiitdmj.ac.in/" },
        { name: "PHC", href: "/primaryhealthcentre" },
      ];

  return (
    <div>
      {/* Full-width image with centered heading */}
      <div
        className="relative w-full h-96 bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${college_img1})` }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          Student Activities
        </h1>
      </div>

      {/* Main content area with flex for side-by-side layout */}
      <div className="container mx-auto mt-8 mb-8 flex flex-col md:flex-row">
        {/* 70% section */}
        <div className="w-full md:w-9/12 px-4 mb-8 md:mb-0">
          <div className="flex flex-row mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-newspaper w-16 h-16 mr-5 -mt-2 inline-block"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
              <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
            </svg>
            <h2 className="text-3xl font-semibold mb-4">Student Activities</h2>
          </div>

          {/* Text content area with formatted text and circular bullets */}
          <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
            {/* Adding images in a single row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 mb-4">
            <p className="text-gray-700 mb-4 font-semibold">
            IIITDMJ emphasizes on several extra-curricular activities in addition to its rigorous academic programme. Although the institute is in the growing stage, Football ground, Volleyball court, basketball court and tennis court are fully functional at the institute premises. IIITDMJ students have formed various clubs under Students Gymkhana, which organises various cultural, sports and science & technology activities throughout the year.
            </p>
  <img
    src={image1}
    alt="Image 1"
    className="w-full h-full object-cover"
  />
</div>
<p className="text-gray-700 mb-4 font-semibold">
<a href="https://www.iiitdmj.ac.in/students/downloads/IHPC_report_2017.pdf" className="no-underline">Report on the major activities and events conducted by the Indian Heritage and Philosophy Club in the session 2016-17</a>
            </p>
<hr></hr>
            <h2 className="text-2xl mb-4">Students' Participation in IIITDMJ- Japan Collaboration</h2>
            <p className="text-gray-700 mb-4 font-semibold">
                Participation of students in IIITDMJ - Japan collaboration has reached to new heights. Every year, both during winter and summer vacation, students are going to Japan for 10 days exposure visit, in which they not only visit leading industries, renowned laboratories and leading academic universities, but also are introduced to Japanese culture. Both Industry and academia of Japan are now having a very good impression of capabilities of our students and eager to place the students, both for MS program and in industry. Few among them are AMADA, Canon and GE energy. Some students are now pursuing MS in Japan’s leading academic Institutions, University of Tokyo and Tokyo Institute of Technology. With the introduction of project based internship (PBI) in the curriculum, in the year 2012 five students had been offered six month long internship in MHI, Canon and Chiba University. Based on their performance during internship, the students shall be offered jobs in respective companies.
            </p>
            <hr></hr>
            <h2 className="text-2xl mb-4">Annual Fest</h2>
            <p className="text-gray-700 mb-4 font-semibold">
            The students have been organizing annual inter-college festivals namely “Tarang” (Cultural Fest), “Abhikalpan” (Tech Fest) and “Gusto” (Sports Fest) in the campus regularly ever since the inception of the institute. These festivals have become very popular among the students of other colleges of Jabalpur and a significant number of students of other colleges participate in these events. Apart from this, various festivals at inter-hall level like DMD battle (Cultural event), Enthuse (Sports event) and various technical events such as Photography Exhibitions, Robotics events, etc, are also being organized by students. Institute has also opened SPIC-MACAY chapter under whose banner various cultural and folk events are being organised. National Festivals like Independence Day and Republic Day are also organized by IIITDMJ students with great enthusiasm.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 mb-4">
            <div class="aspect-w-16 aspect-h-9">
            <iframe
                class="w-full h-64"
                src="https://www.youtube.com/embed/GIhUJZUovRo"
                title="My YouTube Video"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
        <div class="aspect-w-16 aspect-h-9">
            <iframe
                class="w-full h-64"
                src="https://www.youtube.com/embed/wpUAdvtA-i0"
                title="My YouTube Video"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
        <div class="aspect-w-16 aspect-h-9">
            <iframe
                class="w-full h-64"
                src="https://www.youtube.com/embed/_t-xXCdAlqQ"
                title="My YouTube Video"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
        <div class="aspect-w-16 aspect-h-9">
            <iframe
                class="w-full h-64"
                src="https://www.youtube.com/embed/Rmp6gzGxFVk"
                title="My YouTube Video"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
</div>
          </div>
        </div>

        {/* 30% Quick Links section */}
        <div className="w-full md:w-3/12 px-4">
          <div className="flex flex-row">
            <h2 className="text-2xl font-semibold mb-2">See Also</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-link-45deg w-8 h-8 ml-1 mt-1 inline-block"
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
            </svg>
          </div>
          <ul className="list-disc ml-5">
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-2 -ml-3">
                <a href={link.href} className="text-blue-500 no-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default MainPage;
