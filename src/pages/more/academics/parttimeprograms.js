import React, { useEffect, useState } from "react";
// import Card from "../../../components/CardNew";
// import college_img1 from "../../../resources/images/3.jpg";
import PageHeader from "../../../components/PageHeader";
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
    const crumbs = [{crumb: "Programme", link:"#"}]
    return (
        <div>
            {/* Full-width image with centered heading */}
            <PageHeader breadCrumbs={crumbs} title={"Special Part Time MTech/MDes Programmes"}/>

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
                                Special Part Time MTech/MDes Programmes
                            </h2>
                        </div>

                        <h6 className="font-semibold text-gray-800 ">Institute offers Special Part Time MTech Programmes in:</h6>
                        {/* Bulleted List */}
                        <ul className="list-none text-gray-800 mb-2">
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
                        </ul>

                        <h6 className="font-semibold text-gray-800 ">Institute offers Special Part Time MTech Programmes in:</h6>
                        {/* Bulleted List */}
                        <ul className="list-none text-gray-800 mb-2 pb-6 border-b border-gray-200">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className=" mr-2 text-gray-800">Design</span>
                            </li>
                        </ul>

                        <h6 className="font-semibold text-gray-800 ">Eligibility for Admissions:</h6>
                        {/* Bulleted List */}
                        <ul className="list-none text-gray-800 mb-2">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="mr-2 text-gray-800">Part time Master’s Programme for Working Professionals:</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="mr-2 text-gray-800">A minimum of 60 percent marks OR a CPI/CGPA of 6.0 (on the scale of 10.00) or equivalent shall be required in the qualifying examination (B.Tech/B.Des. or equivalent) as the specified minimum for admission in a master’s programme.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="mr-2 text-gray-800">For such candidates requirement of GATE/CEED is waived.</span>
                            </li>
                            <li className="list-none text-gray-800">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="mr-2 text-gray-800">The person must be employed in:</span>
                                <ul className="list-none text-gray-600 mt-2 ml-6">
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <span className="mr-2 text-gray-600">defense establishment, interested applicant should require to submit their applications must be properly forwarded by the Organization or</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <span className="mr-2 text-gray-600">in a company/industry having turnover of Rs. 100 crores or more at executive position and have 05 years or more experience in a company.
                                        </span>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="mr-2 text-gray-800">Other details are given in <a href="#" className="no-underline">Annexure III
                                </a> </span>
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

                        <h6 className="font-semibold text-gray-800 ">Fees for Special Part Time MTech/MDes Programmes in:</h6>
                        <p className=" text-gray-800">
                        Equivalent to M.Tech./MDes programme (Hostel is not alloted for Part time program so Hostel fee is not required in part time Program).
                        </p>

                        <a href="#" className="text-blue-600 no-underline mb-6">Details of Fee Structure</a>


                        <h6 className="font-semibold text-gray-800 pt-8">Courses for Special Part Time MTech/MDes Programmes in:</h6>
                        <p className=" text-gray-800 ">
                        courses are also equvalance to MTech/MDes program.
                        </p>
                        <a href="#" className="text-blue-600 no-underline mb-4">PG Curriculum</a>


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