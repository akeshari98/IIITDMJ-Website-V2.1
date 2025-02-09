import React, { useEffect, useState } from "react";
import PageHeader from "../../../components/PageHeader";
import { Link } from "react-router-dom";
const MainPage = () => {

    const [data, setData] = useState({
        cardsData: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (endpoint, key) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_Backend}/people/${endpoint}`);
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
        const endpoints = [{ key: "cardsData", endpoint: "hostels" }];

        // Fetch all data
        endpoints.forEach(({ endpoint, key }) => {
            fetchData(endpoint, key);
        });
    }, []);
    const quicklinks = [
            {
                name: "Archive",
                href: "/",
            },
            {
                name: "Programme",
                href: "/",
            },
        ];
        const renderLink = (item) =>
                item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    className="text-blue-500 no-underline"
                  >
                  
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 no-underline"
                  >
                  
                    <span>{item.name}</span>
                  </a>
                );
    const crumbs = [{crumb: "Curriculum", link:"#"}]
    return (
        <div>
            {/* Full-width image with centered heading */}
            <PageHeader breadCrumbs={crumbs} title={"Curriculum & Syllabus"}/>

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
                        <h2 className="text-3xl font-semibold mb-4">Curriculum & Syllabus</h2>
                    </div>
                    <div>
                        <table class="w-full border border-gray-300 text-left">
                            <thead>
                                <tr>
                                    <th colspan="2" class="p-4 text-center text-xl font-semibold border-b border-gray-300">
                                    Under Graduate Programs
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-300">
                                    <td class="p-3  font-semibold w-1/3 align-top border-r border-gray-300">
                                        B.Tech Course Curriculum
                                    </td>
                                    <td class="p-3">
                                        <a href="" class="text-blue-600 no-underline">General Curriculum with effect from 2020 batch</a>
                                        
                                        
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-300">
                                    <td class="p-3 font-semibold align-top border-r border-gray-300">
                                    Program wise Curriculum
                                    </td>
                                    <td class="p-3">
                                        <a href="#" class="text-blue-600 no-underline">B.Tech in Smart Manufacturing Curriculum structure</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="#" class="text-blue-600 no-underline"> BTech in Mechanical Engineering Curriculum structure</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="#" class="text-blue-600 no-underline">BTech in Electronics and Communication Engineering Curriculum structure</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="#" class="text-blue-600 no-underline">BTech in Computer Science and Engineering Curriculum structure</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="#" class="text-blue-600 no-underline">BTech in Mechanical Engineering Curriculum V7</a>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-300">
                                    <td class="p-3 font-semibold align-top border-r border-gray-300">
                                    Syllabus
                                    </td>
                                    <td class="p-3">
                                        <a href="https://www.iiitdmj.ac.in/academics/download/B.Tech_B.Des%20Syllabus.pdf" class="text-blue-600 no-underline">B.Tech - B.Des Syllabus Batch 2021 & Onwards</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="https://www.iiitdmj.ac.in/academics/download/B.Tech_B.Des%20Syllabus.pdf" class="text-blue-600 no-underline">Annexure-1</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="https://www.iiitdmj.ac.in/academics/download/B.Tech_B.Des%20Syllabus.pdf" class="text-blue-600 no-underline">Annexure-2</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="https://www.iiitdmj.ac.in/academics/download/BDes_curriculumSept%202016.pdf" class="text-blue-600 no-underline">B.Des Syllabus</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <table class="w-full border border-gray-300 text-left">
                            <thead>
                                <tr>
                                    <th colspan="2" class="p-4 text-center text-xl font-semibold border-b border-gray-300">
                                    Post Graduate Programs
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-300">
                                    <td class="p-3 text-blue-700 font-semibold align-top border-r border-gray-300">
                                        <a href="https://www.iiitdmj.ac.in/academics/download/PG%20course%20structure_evaluation%20scheme28092017.pdf" class="text-blue-600 no-underline">Course Structure and Evaluation Scheme of M.Tech. Program</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="https://www.iiitdmj.ac.in/academics/download/PG%20CSE_02112017.pdf" class="text-blue-600 no-underline">Computer Science</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="https://www.iiitdmj.ac.in/academics/download/PG%20ECE_03112017.pdf" class="text-blue-600 no-underline">Electronics and Communication</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="https://www.iiitdmj.ac.in/academics/download/PG%20ME_02112017.pdf" class="text-blue-600 no-underline">Mechanical</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="https://www.iiitdmj.ac.in/academics/download/PG%20ME_02112017.pdf" class="text-blue-600 no-underline">Mechatronics</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="https://www.iiitdmj.ac.in/academics/download/PG%20ME_02112017.pdf" class="text-blue-600 no-underline">Natural Science</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="https://www.iiitdmj.ac.in/academics/download/PG%20ME_02112017.pdf" class="text-blue-600 no-underline">Liberal Arts</a>
                                        <hr class="my-2 border-gray-300" />
                                        <a href="https://www.iiitdmj.ac.in/academics/download/MDes_Sept2016.pdf" class="text-blue-600 no-underline">Course Structure and Evaluation Scheme of MDes Program</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <table class="w-full border border-gray-300 text-left">
                            <thead>
                                <tr>
                                    <th colspan="2" class="p-4 text-center text-xl font-semibold border-b border-gray-300">
                                        Minor Degree
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-300">
                                    <td class="p-3 text-blue-700 font-semibold align-top border-r border-gray-300">
                                        <a href="#" class="text-blue-600 no-underline">Minor Degree</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 30% Quick Links section */}
                <div className="w-full md:w-3/12 px-4">
                <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">See Also</h2>
              <ul className="space-y-2">
                {quicklinks.map((link, index) => (
                  <li key={index}>{renderLink(link)}</li>
                ))}
              </ul>
            </section>
          </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;