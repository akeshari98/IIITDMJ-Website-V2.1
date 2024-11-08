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

const MainPage = () => {
    const notices = [
        { name: "Request letter for withdrawal/Cancellation of Admission", href: "https://docs.google.com/forms/d/e/1FAIpQLScz5Vlu2hatEO5MC_qzJml6lLj4F_1ltMTEBKlDrMfj-Qa56g/viewform" },
        { name: "Refund Rule", href: "https://www.iiitdmj.ac.in/downloads/Notification_Revised_refund_rule.pdf" },
        { name: "MTech Admission through CCMT", href: "https://ccmt.admissions.nic.in/" },
    ];

    const otherlinks = [
        {
            name: "Important Forms",
            href: "/",
        },
        {
            name: "Academic office",
            href: "/deanacademics",
        },
        {
            name: "Dean Student office",
            href: "/deanstudents",
        },
        {
            name: "Mess",
            href: "https://www.iiitdmj.ac.in/mess.iiitdmj.ac.in/",
        },
        {
            name: "Course Details",
            href: "/",
        },
    ];

    const guidelines = [
        {
            name: "G-101_Guidelines for Student Senate Election",
            href: "https://www.iiitdmj.ac.in/students/downloads/guidelines/G-101_Guidelines%20for%20%20Student%20Senate%20%20Election.pdf",
        },
        {
            name: "G-102_Guidelines for Gymkhana Office Bearer",
            href: "https://www.iiitdmj.ac.in/students/downloads/guidelines/G-102_Guidelines%20for%20Gymkhana%20Office%20Bearer.pdf",
        },
        {
            name: "G-103_Guidelines For Funds Distribution While Organizing Gymkhana Events-Activities-Functions",
            href: "https://www.iiitdmj.ac.in/students/downloads/guidelines/G-103_Guidelines%20For%20Funds%20Distribution%20While%20Organizing%20Gymkhana%20Events-Activities-Functions.pdf",
        },
    ];
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
                Convocation
                </h1>
            </div>

            {/* Main content area with flex for side-by-side layout */}
            <div className="container mx-auto mt-8 mb-8 flex flex-col md:flex-row">
                {/* 70% section */}
                <div className="w-full md:w-9/12 px-4 mb-8 md:mb-0">



                    {/* third Text Content Area */}
                    <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        <div className="flex flex-row mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="black"
                                className="bi bi-newspaper w-16 h-16 mr-5 -mt-2 inline-block"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0">13th Convocation
                            </h2>
                        </div>

                        <h5 className="font-semibold ml-2">List of Students (in English & Hindi) graduated in the year 2024</h5>

                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-gray-800 p-1 mb-2">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/downloads/convocation13/2019.pdf" className="text-blue-600 no-underline ">
                                    2019</a>
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/downloads/convocation13/2020%20CSE.pdf" className="text-blue-600 no-underline ">
                                    2020 CSE</a>
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/downloads/convocation13/2020%20DS.pdf" className="text-blue-600 no-underline ">

                                    2020 DS</a>
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold mr-2 text-gray-600">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/downloads/convocation13/2020%20ECE.pdf" className="text-blue-600 no-underline ">

                                    2020 ECE</a>
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold mr-2 text-gray-600">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/downloads/convocation13/2020%20ME.pdf" className="text-blue-600 no-underline ">

                                    2020 ME</a>
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold mr-2 text-gray-600">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/downloads/convocation13/2020%20SM.pdf" className="text-blue-600 no-underline ">

                                    2020 SM</a>
                                </span>
                            </li>

                        </ul>
                        
                    </div>
                </div>
                {/* 30% Quick Links section */}
                <div className="w-full md:w-3/12 px-4">
                    <div className="flex flex-row">
                        <h2 className="text-2xl font-semibold mb-2">Past Convocation</h2>
                    </div>
                    <ul className="list-disc ml-5">
                    <li  className="mb-2 -ml-3">
                                <a href="#" className="text-blue-500 no-underline">
                                12th Convocation, 11th July 2024
                                </a>
                    </li>
                    <li  className="mb-2 -ml-3">
                                <a href="#" className="text-blue-500 no-underline">
                                List of Graduates - 2022
                                </a>
                    </li>
                    <li  className="mb-2 -ml-3">
                                <a href="#" className="text-blue-500 no-underline">
                                List of Graduates - 2021
                                </a>
                    </li>
                    <li  className="mb-2 -ml-3">
                                <a href="#" className="text-blue-500 no-underline">
                                List of Graduates - 2020    
                                </a>
                    </li>
                    <li  className="mb-2 -ml-3">
                                <a href="#" className="text-blue-500 no-underline">
                                List of Graduates - 2018-2019
                                </a>
                    </li>
                    <li  className="mb-2 -ml-3">
                                <a href="#" className="text-blue-500 no-underline">
                                List of Graduates - 2017
                                </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainPage;