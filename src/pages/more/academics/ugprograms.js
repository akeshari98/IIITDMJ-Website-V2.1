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
                    UG Program
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
                        <h2 className="text-3xl font-semibold mb-4">Undergraduate programs</h2>
                    </div>

                    {/* Text content area with formatted text and circular bullets */}
                    <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        {/* Links at the top aligned to the right */}
                        <div className="flex flex-col items-end gap-3 mb-6">
                            <a
                                href="https://www.iiitdmj.ac.in/downloads/FAQ-2024-25.pdf"
                                className="text-blue-500 text-lg font-bold no-underline hover:text-blue-800 transition duration-300"
                            >
                                Need Help for Physical Reporting || FAQ
                            </a>
                            <a
                                href="https://www.iiitdmj.ac.in/downloads/Bus-Schedule_orient-16&17-Aug2024.pdf"
                                className="text-blue-500 text-lg font-bold no-underline hover:text-blue-800 transition duration-300"
                            >
                                Bus facility for New UG students and their parents on 16th and 17th August 2024
                            </a>
                        </div>

                        {/* Info Header */}
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                            Information For Newly Admitted Students (for the AY 2024-25) through JoSSA / CSAB / UCEED / SII / DASA
                        </h2>

                        {/* Table for Schedule */}
                        <table className="w-full text-left border-separate border-spacing-2 mb-6">
                            <tbody>
                                <tr>
                                    <td className="p-4 font-semibold text-gray-700 bg-gray-100 rounded-l-lg">Physical Reporting at the Institute</td>
                                    <td className="p-4 text-gray-600 bg-gray-100 rounded-r-lg">16.08.2024</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-gray-700 bg-gray-100 rounded-l-lg">Orientation</td>
                                    <td className="p-4 text-gray-600 bg-gray-100 rounded-r-lg">17.08.2024</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-gray-700 bg-gray-100 rounded-l-lg">Document Verification</td>
                                    <td className="p-4 text-gray-600 bg-gray-100 rounded-r-lg">16.08.2024</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-gray-700 bg-gray-100 rounded-l-lg">Classes Commencement</td>
                                    <td className="p-4 text-gray-600 bg-gray-100 rounded-r-lg">19.08.2024</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-gray-800 p-3">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <span className="font-semibold">Regarding in-campus accommodation for Parents/ Guardians:</span>
                                    Institute offers Visitors' Hostel (VH) facility on campus, but it has a limited number of rooms available.
                                    Parents/Guardians who wish to visit the campus (before 10th August) may forward their request
                                    for VH accommodation at <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                        vh@iiitdmj.ac.in</a>.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                During the physical reporting and document verification process of newly admitted students, VH facility won't be available.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                Detailed instructions for students who have been offered admissions through UCEED / SII/ DASA will be posted shortly.

                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                Hostel allotment related details will be posted shortly.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                List of documents to be carried out (in original and a set of photocopies) during the document verification process.
                            </li>
                        </ul>

                        {/* Bordered Table for Required Documents */}
                        <table className="w-full border-collapse border border-gray-400 mb-6">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 p-2 ">Sno</th>
                                    <th className="border border-gray-300 p-2">Documents</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">1</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">Original Provisional Admission Letter/ Allotment Letter/ Offer Letter</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">2</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">Class X (High School) Marksheet</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">3</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">Mark sheet of Class XII</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">4</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">JEE Main Score Card & Admit card</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">5</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">Transfer, Character & Migration certificate (must be original)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">6</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">Certificate of category (OBC / SC / ST / EWS), if applicable, issued by the competent authority. (OBC/EWS certificate must be issued on or after April 1, 2024, in central Govt. format as per JOSAA/CSAB/UCEED).</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">7</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">Caste validity certificate for Maharashtra State candidates issued by the competent authority.</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">8</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">Certificate for Persons with Disabilities (PWD), if applicable</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">9</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">Fee Receipt (Fee paid in JoSAA/CSAB/UCEED)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">10</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">
                                        <a href="https://www.iiitdmj.ac.in/academics/download/UG/new/Proforma%20for%20Medical%20certificate.pdf" className="text-blue-600 no-underline">Medical fitness Certificate from the doctor, not below the rank of Senior Medical Officer in prescribed format or JoSAA format</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">11</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">Anti ragging declaration to be filled at <a href="https://www.antiragging.in/" className="text-blue-600 no-underline ">www.antiragging.in</a>. Bring a downloaded copy of the same. Kindly fill it once you receive your roll number.</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">12</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">
                                    <a href="https://www.iiitdmj.ac.in/academics/download/UG/new/Anti-drug%20declaration%20form%20to%20be%20signed%20by%20the%20student.pdf" className="text-blue-600 no-underline">Anti-Drug declaration form in prescribed format</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">13</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">Online receipt of Remaining Institute fee</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">14</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">Copy of Aadhaar card as proof of address</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-gray-700">15</td>
                                    <td className="border border-gray-300 p-2 text-gray-700">5 Passport size photographs</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default MainPage;
