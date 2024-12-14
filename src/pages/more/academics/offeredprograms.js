import React, { useEffect, useState } from "react";
import PageHeader from "../../../components/PageHeader";
const MainPage = () => {
    const image7 = process.env.REACT_APP_Backend + "/public/WebsiteImages/offeredprograms-min.png";
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
    const crumbs = [{crumb: "Programme", link:"#"}]
    return (
        <div>
            {/* Full-width image with centered heading */}
            <PageHeader breadCrumbs={crumbs} title={"Offered Programmes"}/>

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
                        <h2 className="text-3xl font-semibold">Undergraduate Programme</h2>
                    </div>

                    {/* Text content area with formatted text and circular bullets */}
                    <div className="bg-white-200 p-7 rounded-lg shadow-2xl border-b border-gray-300 mb-4">
                        <div className="text-black font-medium leading-relaxed">
                            <p className="mb-2 font-semibold">
                                Institute offers Four Year Undergraduate degree (B.Tech.) programme in:
                            </p>

                            {/* Bulleted List */}
                            <ul className="list-none text-black text-md">
                                <li className="flex items-start">
                                    <span className="text-xl mr-2">&bull;</span>
                                    Computer Science & Engineering
                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-2">&bull;</span>
                                    Electronics & Communication Engineering
                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-2">&bull;</span>
                                    Design
                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-2">&bull;</span>
                                    Mechanical Engineering
                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-2">&bull;</span>
                                    Smart Manufacturing
                                </li>
                            </ul>
                            <p className="mt-2 mb-2 font-semibold ">
                                Emphasis is laid on synthesis, creativity, hands-on experience, innovation, communication and entrepreneurship. Learning is largely based on real-world situation in different sectors. This would bring in the concept of verticals which could be the:
                            </p>
                        </div>


                        <div className="flex space-x-4 text-black font-medium text-md leading-relaxed">
                            <div className="flex-1">
                                {/* Bulleted List */}
                                <ul className="list-none text-black text-md">
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        Automobile sector
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        Aerospace and Defence Sector
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        Industrial Machinery Sector
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        Engineering Services Sector
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        High-tech Electronics and
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        Consumer Durables / Life-style Products etc.
                                    </li>
                                </ul>
                                <p className=" mb-4 text-black mt-2">
                                    For each vertical, key industry players would be identified and invited to partner with the Institute for both academic and research activities.
                                </p>
                            </div>

                            <div className="flex-1">
                                <img
                                    src={image7}
                                    alt="Image 2"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="black"
                            className="bi bi-newspaper w-16 h-16 mr-5 -mt-2 inline-block mt-12"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                            <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                        </svg>
                        <h2 className="text-3xl font-semibold mt-16">Postgraduate Programme</h2>
                    </div>
                    <div className="bg-white-200 p-7 rounded-lg shadow-2xl border-b border-gray-300 mb-4">
                        <div className="text-black">

                            <h5 className="mb-4 font-medium text-xl">Institute offers postgraduate programmes in :</h5>
                            <h6 className=" font-semibold">M.Tech. number of seats and Specializations</h6>
                            <table className="w-full border-collapse border border-gray-300 mb-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Discipline</th>
                                        <th className="border border-gray-300 px-4 py-2">Specialization</th>
                                        <th className="border border-gray-300 px-4 py-2">Number of Seats</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2" rowspan="2">
                                            Computer Science & Engineering (CSE)
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">AI and ML</td>
                                        <td className="border border-gray-300 px-4 py-2">20</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Data Science</td>
                                        <td className="border border-gray-300 px-4 py-2">20</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2" rowspan="3">
                                            Electronics & Communication Engineering (ECE)
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">Communication System Design</td>
                                        <td className="border border-gray-300 px-4 py-2">10</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Nanoelectronics and VLSI Design</td>
                                        <td className="border border-gray-300 px-4 py-2">10</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Power and Control</td>
                                        <td className="border border-gray-300 px-4 py-2">10</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2" rowspan="2">
                                            Mechanical Engineering (ME)
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">Design</td>
                                        <td className="border border-gray-300 px-4 py-2">10</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">CAD/CAM</td>
                                        <td className="border border-gray-300 px-4 py-2">10</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Smart Manufacturing (SM)</td>
                                        <td className="border border-gray-300 px-4 py-2">Smart Manufacturing</td>
                                        <td className="border border-gray-300 px-4 py-2">10</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Mechatronics (MT)</td>
                                        <td className="border border-gray-300 px-4 py-2">Mechatronics</td>
                                        <td className="border border-gray-300 px-4 py-2">10</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Design (DS)</td>
                                        <td className="border border-gray-300 px-4 py-2">-</td>
                                        <td className="border border-gray-300 px-4 py-2">30</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h6 className="font-semibold">Note:</h6>

                            <ul className="list-none mb-3 text-black text-[17px]">
                                <li className="flex items-start">
                                    <span className="text-xl mr-2">&bull;</span>
                                    The students will be given choice to choose specialization at the time of admission and will be allocated specialization based on GATE rank.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-2">&bull;</span>
                                    All admissions in M.Tech will be through CCMT

                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-2">&bull;</span>
                                    M.Des. admissions will be through Institute level counseling with 10 seats for GATE qualified and 20 seats for CEED qualified candidates. In case seat is not filled from one qualifying exam it will be added to other.
                                </li>
                            </ul>

                            <div className="mb-4">
                                <h6 className="font-semibold">M.Des.</h6>
                                <ul className="list-none text-black mb-2">
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Master of Design</a>.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h6 className="font-semibold">Ph.D.</h6>
                                <ul className="list-none text-black mb-2">
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Computer Science & Engineering (CSE)</a>.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Electronics & Communication Engineering (ECE)</a>.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Mechanical Engineering (ME)</a>.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Design</a>.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Natural Sciences (NS)</a>.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h6 className="font-semibold">Integrated (MTech + Ph.D.)</h6>
                                <ul className="list-none text-black mb-2">
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Computer Science & Engineering (CSE)</a>.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Electronics & Communication Engineering (ECE)</a>.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Mechanical Engineering (ME)</a>.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Design</a>.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h6 className="font-semibold">Special Part Time MTech/MDes Program</h6>
                                <ul className="list-none text-black mb-2">
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Computer Science & Engineering (CSE)</a>.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Electronics & Communication Engineering (ECE)</a>.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Mechanical Engineering (ME)</a>.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            MDes</a>.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="list-none text-black mb-2">
                                    <li className="flex items-start">
                                        {/* <span className="text-xl mr-2">&bull;</span> */}
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            PhD Curriculum</a>.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 30% Quick Links section */}
                <div className="w-full md:w-3/12 px-4">
                    <div className="flex flex-row">
                        <h2 className="text-2xl font-semibold mb-2">Student Gymkhana</h2>
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
                    <div className="mb-4">
                        <p className=" mb-1 text-black ">
                            Students’ Gymkhana is constituted to evolve a disciplined self-governance for carrying out various extracurricular in-campus activities and to establish a responsible and accountable student body.
                        </p>
                        <ul className="list-disc ml-3 ">

                            <li className="mb-2 -ml-3">
                                <a className="text-blue-500 no-underline">
                                    More Info
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-row">
                        <h2 className="text-2xl font-semibold mb-2">Hostels</h2>
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

                    <div>
                        <p className=" mb-1 text-black ">
                        IIITDM Jabalpur is a fully residential campus. All the students are required to be resident of Institute hostels.
                        </p>
                        <ul className="list-disc ml-3">

                            <li className="mb-2 -ml-3">
                                <a className="text-blue-500 no-underline">
                                    More Info
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default MainPage;


