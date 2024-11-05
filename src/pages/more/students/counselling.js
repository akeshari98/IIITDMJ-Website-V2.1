import React, { useEffect, useState } from "react";
import college_img1 from "../../../resources/images/3.jpg";
import InfoDiv2 from "../../../components/InfoDiv2";

const MainPage = () => {
  const links = [];

  const [data, setData] = useState({
    coordinators: [],
    ug: [],
    pg: [],
    head: [],
    core: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, key) => {
    try {
      const response = await fetch(`http://localhost:5000/people/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${key} data`);
      }
      const result = await response.json();
      setData((prevState) => ({ ...prevState, [key]: result }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const endpoints = [
      { key: "pg", endpoint: "pg_counselling" },
      { key: "ug", endpoint: "ug_counselling" },
      { key: "coordinators", endpoint: "counselling_coordinator" },
      { key: "head", endpoint: "counselling_head" },
      { key: "core", endpoint: "counselling_core" },
    ];

    // Fetch all data
    endpoints.forEach(({ endpoint, key }) => {
      fetchData(endpoint, key);
    });
  }, []);

  return (
    <div>
      {/* Full-width image with centered heading */}
      <div
        className="relative w-full h-96 bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${college_img1})` }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          Counselling Service
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
            <h2 className="text-3xl font-semibold mb-4">Counselling Service</h2>
          </div>

          {/* Text content area with formatted text and circular bullets */}
          <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
            <p className="text-gray-700 mb-4 font-semibold">
              Counseling is a talking therapy, a way of exploring what might
              help a student find his way through his current difficulties. The
              counseling Service believes that with support, the student is the
              best person to work out what right for him. We only ‘provide help’
              to enable a student to find his own answers and work towards
              increasing his sense of competency and selfworth.
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
              Many students need the help of the counseling Service to talk
              about things like:
              <ul className="text-gray-700 mt-2 ml-2 mb-2 font-semibold">
                {[
                  "(a) Academic Problems",
                  "(b) Interpersonal Relationship",
                  "(c) Worry",
                  "(d) Feeling ‘down’ or ‘depressed",
                ].map((item, index) => (
                  <li key={index} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
              The counseling Service at IIITDMJ is supported by a strong team of
              students/Faculty/Counsellor. It is constituted by the following-
              <ul className="text-gray-700 mt-2 ml-2 mb-2 font-semibold">
                {[
                  "Head, counseling Service",
                  "Student Coordinators",
                  "Assistant Student Coordinators",
                  "Student Guides",
                  "Faculty Adviser",
                  "Professional Counsellor",
                  "Academic Helpers",
                ].map((item, index) => (
                  <li key={index} className="mb-1">
                    {index + 1}. {item}
                  </li>
                ))}
              </ul>
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
              The counseling Service provides logistics in improving student’s
              difficulties in various ways from academic to social life. It is
              an integral part of the Institute that closely works with the
              faculty members and the administration along with the student
              community.
            </p>
            {data.coordinators.map((entry) => (
              <p key={entry.roll_no} className="mb-0 font-bold">
                {entry.name} ({entry.roll_no}) - {entry.role}
              </p>
            ))}
            <br></br>
            <hr></hr>
            <h3 className="text-xl font-semibold">PG-Students Counseling Committee Members</h3>
            <div className="overflow-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-200 mt-4">
                <thead>
                  <tr>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Name
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Roll No.
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Batch
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Email ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.pg.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-2 py-2 border border-gray-200">
                        {row.name}
                      </td>
                      <td className="px-2 py-2 border border-gray-200">
                        {row.roll_no}
                      </td>
                      <td className="px-2 py-2 border border-gray-200">
                        {row.batch}
                      </td>
                      <td className="px-2 py-2 border border-gray-200">
                        {row.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <br></br>
            <h3 className="text-xl font-semibold">UG-Students Counseling Committee Members</h3>
            <div className="overflow-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-200 mt-4">
                <thead>
                  <tr>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Name
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Roll No.
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Batch
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Email ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.ug.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-2 py-2 border border-gray-200">
                        {row.name}
                      </td>
                      <td className="px-2 py-2 border border-gray-200">
                        {row.roll_no}
                      </td>
                      <td className="px-2 py-2 border border-gray-200">
                        {row.batch}
                      </td>
                      <td className="px-2 py-2 border border-gray-200">
                        {row.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 30% Quick Links section */}
        <div className="w-full md:w-3/12 px-4">
          <div className="flex flex-row">
            <h2 className="text-2xl font-semibold mb-2">Head Counselling Service</h2>
          </div>
          <ul className="list-disc ml-5">
            {data.head.map((info, index) => (
              <InfoDiv2 key={index} {...info} />
            ))}
          </ul>
          <div className="flex flex-row">
            <h2 className="text-2xl font-semibold mb-2">Core Faculty Team(Counseling):</h2>
          </div>
          <ul className="list-disc ml-5">
            {data.core.map((info, index) => (
              <InfoDiv2 key={index} {...info} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
