import React, { useEffect, useState } from "react";
import Card from "../../../components/CardNew";
import college_img1 from "../../../resources/images/3.jpg";

const MainPage = () => {
    const [data, setData] = useState({
        cardsData: [],
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
        const endpoints = [{ key: "cardsData", endpoint: "hostels" }];

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
                    Integrated MTech/MDes+PhD Programmes
                </h1>
            </div>

            {/* Main content area with flex for side-by-side layout */}
            <div className="container mx-auto mt-8 mb-8 flex flex-col md:flex-row">
                {/* 70% section */}
                <div className="w-full md:w-9/12 px-4 mb-8 md:mb-0">


                    {/* First Text Content Area */}
                    <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        <div className="flex items-start mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                className="bi bi-newspaper w-12 h-12 mr-5 shrink-0"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0">
                                Integrated (Master+PhD) Programmes
                            </h2>
                        </div>

                        <h6 className="font-semibold text-gray-800 ">Institute offers Integrated (MTech/MDes+PhD)programme in:</h6>
                        {/* Bulleted List */}
                        <ul className="list-none text-gray-800 mb-2 pb-6 border-b border-gray-200">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className=" mr-2 text-gray-800">Computer Science & Engineering</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className=" mr-2 text-gray-800">Electronics & Communication Engineering  </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className=" mr-2 text-gray-800">Mechanical Engineering </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className=" mr-2 text-gray-800">Design </span>
                            </li>
                        </ul>

                        <div className="flex items-start mb-3 pt-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                className="bi bi-newspaper w-12 h-12 mr-5 shrink-0"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0">
                                Fee Structure & Other Details
                            </h2>
                        </div>

                        <h6 className="font-semibold text-gray-800 ">Fees for Integrated Master+PhD:</h6>
                        <p className=" text-gray-800">
                            Equivalent to M.Tech./MDes for first two years or till formal admission in Ph.D. programme (clearance of comprehensive exam) whichever is earlier. After this period it will be equivalent to Ph.D. programme fees of equivalent batch (for example a student who has taken admission in 2021 then Ph.D. fees will be applicable for the Ph.D. students admitted in 2021 from 2023 onwards)
                        </p>

                        <a href="#" className="text-blue-600 no-underline mb-6">Details of Fee Structure</a>


                        <h6 className="font-semibold text-gray-800 pt-8">Assistantship for Integrated Master+PhD:</h6>
                        <p className=" text-gray-800 ">
                            Equivalent to M.Tech. for first two years or till formal admission in Ph.D. programme (clearance of comprehensive exam) whichever is earlier. After this period it will be equivalent to Ph.D. programme assistantship.
                        </p>
                        <a href="#" className="text-blue-600 no-underline mb-4">PhD Curriculum</a>


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
                        <p className=" mb-1 text-gray-800 ">
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
                        <p className=" mb-1 text-gray-800 ">
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
        </div >
    );
};

export default MainPage;