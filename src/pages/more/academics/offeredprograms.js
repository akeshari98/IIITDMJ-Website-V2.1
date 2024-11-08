import React, { useEffect, useState } from "react";
import Card from "../../../components/CardNew";
import college_img1 from "../../../resources/images/3.jpg";
import profile from "../../../resources/images/admin/profile.jpg";
import image1 from "../../../resources/images/vasishtha.jpg";
import image2 from "../../../resources/images/aryabhatta.jpg";
import image3 from "../../../resources/images/vivekananda.jpg";
import image4 from "../../../resources/images/nagarjuna.jpg";
import image5 from "../../../resources/images/panini.jpg";
import image6 from "../../../resources/images/maa-saraswati.jpg";
import image7 from "../../../resources/images/offeredprograms.png";

const MainPage = () => {
    const notifications = [
        {
            name: "Notification regarding constitution of Council of Wardens, dated: August 24, 2023 | Corrigendum, dated: August 25, 2023",
            href: "https://www.iiitdmj.ac.in/students/downloads/Corrigendum%20of%20notification%20regarding%20constitution%20of%20Council%20of%20Wardens..pdf",
        },
        {
            name: "Notification regarding Council of Wardens, dated: February 01, 2023",
            href: "https://www.iiitdmj.ac.in/students/downloads/Notification%20regarding%20Council%20of%20Wardens.pdf",
        },
        {
            name: "Noitification 1",
            href: "https://www.iiitdmj.ac.in/students/downloads/Notifications/Notification%20regarding%20Convener%20and%20Co%20Convener%20of%20Student%20Senate%20-1(38921460593254).jpg",
        },
        {
            name: "Noitification 2",
            href: "https://www.iiitdmj.ac.in/students/downloads/Notifications/Notification%20regarding%20Convener%20and%20Co%20Convener%20of%20Student%20Senate%20-1(38921460593254).jpg",
        },
    ];

    const info = [
        {
            name: "CODE OF CONDUCT",
            href: "https://www.iiitdmj.ac.in/students/downloads/Imp_Info/CODE%20OF%20CONDUCT.pdf",
        },
        {
            name: "Unauthorized Conduct in the Campus",
            href: "https://www.iiitdmj.ac.in/students/downloads/Imp_Info/Unauthorized%20Conduct%20in%20the%20Campus.pdf",
        },
        {
            name: "Guidelines for Entry, Exit at Main Gate",
            href: "https://www.iiitdmj.ac.in/students/downloads/Imp_Info/Guidelines%20for%20Entry,%20Exit%20at%20Main%20Gate.pdf",
        },
    ];

    const amenities = [
        {
            name: "Barber Shop & Laundry Shop Vasishtha Hostel (Hall-I)",
            href: null,
        },
        { name: "One cafeteria(2:00P.M to 12:00A.M)", href: null },
        { name: "Stationary shop", href: null },
        { name: "Wi-Fi internet facility", href: null },
        { name: "Guest Room", href: null },
        { name: "Printing and photocopy facility", href: null },
        { name: "24*7 ambulance facility", href: null },
        { name: "Gymnasium", href: null },
        {
            name: "Reading room(all most all news papers,employment news and magzines)",
            href: null,
        },
        { name: "Stadium for outdoor games", href: null },
        { name: "Indoor games like carom,T.T.tabeles etc.", href: null },
        {
            name: "Bus facility (Time Table)",
            href: "https://www.iiitdmj.ac.in/downloads/time%20table%20Detailed.pdf",
        },
    ];

    const vasishtha = [
        { name: "B.TECH BATCH-2019", href: "https://www.iiitdmj.ac.in/students/downloads/allotment/Vasishtha%20Hostel%20(HALL-I)/B.TECH%20BATCH-2019.pdf" },
        { name: "B.TECH BATCH-2022", href: "https://www.iiitdmj.ac.in/students/downloads/allotment/Vasishtha%20Hostel%20(HALL-I)/B.TECH%20BATCH-2022.pdf" },
    ];
    const aryabhatta = [
        { name: "2020 BATCH", href: "https://www.iiitdmj.ac.in/students/downloads/allotment/Aryabhatta%20Hostel%20(HALL-III)/2020%20BATCH.pdf" },
    ];
    const vivekananda = [
        { name: "B.TECH BATCH-2021", href: "https://www.iiitdmj.ac.in/students/downloads/allotment/Vivekananda%20Hostel%20(HALL-IV)/B.TECH%20BATCH-2021.pdf" },
    ];
    const nagarjuna = [
        { name: "Nagarjuna Hostel (Block A&B)", href: "https://www.iiitdmj.ac.in/students/downloads/allotment/Nagarjuna%20Hostel%20(PG%20Married)/Nagarjuna%20Hostel%20(Block%20A&B).pdf" },
        { name: "Nagarjuna_C Block Girls UG 2022", href: "https://www.iiitdmj.ac.in/students/downloads/allotment/Nagarjuna%20Hostel%20(PG%20Married)/Nagarjuna_C%20Block%20Girls%20UG22.pdf" },
    ];
    const panini = [
        { name: "Panini Hostel Block A", href: "https://www.iiitdmj.ac.in/students/downloads/allotment/Panini%20Hostel%20(PG%20Unmarried)/Block-A/" },
        { name: "Panini Hostel Block B", href: "https://www.iiitdmj.ac.in/students/downloads/allotment/Panini%20Hostel%20(PG%20Unmarried)/Panini%20Hostel%20%20Block%20B.pdf" },
    ];
    const saraswati = [

    ];
    const rewa = [
        { name: "Rewa Residency Block (A&B)", href: "https://www.iiitdmj.ac.in/students/downloads/allotment/Rewa%20Residency%20Block%20(A&B)/Rewa%20Residency%20Block%20(A&B).pdf" },
    ];


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
                    Offered Programmes
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
                        <h2 className="text-3xl font-semibold mb-4">Undergraduate Programme</h2>
                    </div>

                    {/* Text content area with formatted text and circular bullets */}
                    <div className="bg-white-200 p-7 rounded-lg shadow-2xl border-b border-gray-300 mb-4">
                        <div className="text-black-900 font-semibold text-[17px] leading-relaxed">
                            <p className="mb-2 font-semibold">
                                Institute offers Four Year Undergraduate degree (B.Tech.) programme in:
                            </p>

                            {/* Bulleted List */}
                            <ul className="list-none space-y-2 text-gray-800 p-3 mb-4">
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
                            <p className="mb-2 font-semibold ">
                                Emphasis is laid on synthesis, creativity, hands-on experience, innovation, communication and entrepreneurship. Learning is largely based on real-world situation in different sectors. This would bring in the concept of verticals which could be the:
                            </p>
                        </div>


                        <div className="flex space-x-4 text-black-900 font-semibold text-[17px] leading-relaxed">
                            <div className="flex-1">
                                {/* Bulleted List */}
                                <ul className="list-none space-y-2 text-gray-800 p-3 mb-2">
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
                                <p className=" mb-4 text-gray-800 ">
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
                            className="bi bi-newspaper w-16 h-16 mr-5 -mt-2 inline-block"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                            <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                        </svg>
                        <h2 className="text-3xl font-semibold mb-4">Postgraduate Programme</h2>
                    </div>
                    <div className="bg-white-200 p-7 rounded-lg shadow-2xl border-b border-gray-300 mb-4">
                        <div className="text-gray-700">

                            <h5 className="mb-4 font-semibold ">Institute offers postgraduate programmes in :</h5>
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
                                <ul className="list-none text-gray-800 mb-2">
                                    <li className="flex items-start">
                                        <span className="text-xl mr-2">&bull;</span>
                                        <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                            Master of Design</a>.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h6 className="font-semibold">Ph.D.</h6>
                                <ul className="list-none text-gray-800 mb-2">
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
                                <ul className="list-none text-gray-800 mb-2">
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
                                <ul className="list-none text-gray-800 mb-2">
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
                                <ul className="list-none text-gray-800 mb-2">
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
        </div>
    );
};

export default MainPage;


