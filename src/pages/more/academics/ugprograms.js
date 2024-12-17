import React, { useEffect, useState } from "react";
import Card from "../../../components/CardNew";
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
    const crumbs = [{crumb: "UG Program", link:"#"}]
    return (
        <div>
            {/* Full-width image with centered heading */}
            <PageHeader breadCrumbs={crumbs} title={"UG Program"}/>

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
                        <div className="flex flex-col items-end mb-6">
                            <a
                                href="https://www.iiitdmj.ac.in/downloads/FAQ-2024-25.pdf"
                                className="text-blue-500 text-lg font-medium no-underline hover:text-blue-800 transition duration-300"
                            >
                                Need Help for Physical Reporting || FAQ
                            </a>
                            <a
                                href="https://www.iiitdmj.ac.in/downloads/Bus-Schedule_orient-16&17-Aug2024.pdf"
                                className="text-blue-500 text-lg font-medium no-underline hover:text-blue-800 transition duration-300"
                            >
                                Bus facility for New UG students and their parents on 16th and 17th August 2024
                            </a>
                        </div>

                        {/* Info Header */}
                        <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-gray-300 pb-2">
                            Information For Newly Admitted Students (for the AY 2024-25) through JoSSA / CSAB / UCEED / SII / DASA
                        </h2>

                        {/* Table for Schedule */}
                        <table className="w-full text-left border-separate border-spacing-2 mb-6">
                            <tbody>
                                <tr>
                                    <td className="p-4 font-semibold text-black bg-gray-100 rounded-l-lg">Physical Reporting at the Institute</td>
                                    <td className="p-4 text-black bg-gray-100 rounded-r-lg">16.08.2024</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-black bg-gray-100 rounded-l-lg">Orientation</td>
                                    <td className="p-4 text-black bg-gray-100 rounded-r-lg">17.08.2024</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-black bg-gray-100 rounded-l-lg">Document Verification</td>
                                    <td className="p-4 text-black bg-gray-100 rounded-r-lg">16.08.2024</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-black bg-gray-100 rounded-l-lg">Classes Commencement</td>
                                    <td className="p-4 text-black bg-gray-100 rounded-r-lg">19.08.2024</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3">
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
                                    <td className="border border-gray-300 p-2 text-black">1</td>
                                    <td className="border border-gray-300 p-2 text-black">Original Provisional Admission Letter/ Allotment Letter/ Offer Letter</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">2</td>
                                    <td className="border border-gray-300 p-2 text-black">Class X (High School) Marksheet</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">3</td>
                                    <td className="border border-gray-300 p-2 text-black">Mark sheet of Class XII</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">4</td>
                                    <td className="border border-gray-300 p-2 text-black">JEE Main Score Card & Admit card</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">5</td>
                                    <td className="border border-gray-300 p-2 text-black">Transfer, Character & Migration certificate (must be original)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">6</td>
                                    <td className="border border-gray-300 p-2 text-black">Certificate of category (OBC / SC / ST / EWS), if applicable, issued by the competent authority. (OBC/EWS certificate must be issued on or after April 1, 2024, in central Govt. format as per JOSAA/CSAB/UCEED).</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">7</td>
                                    <td className="border border-gray-300 p-2 text-black">Caste validity certificate for Maharashtra State candidates issued by the competent authority.</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">8</td>
                                    <td className="border border-gray-300 p-2 text-black">Certificate for Persons with Disabilities (PWD), if applicable</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">9</td>
                                    <td className="border border-gray-300 p-2 text-black">Fee Receipt (Fee paid in JoSAA/CSAB/UCEED)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">10</td>
                                    <td className="border border-gray-300 p-2 text-black">
                                        <a href="https://www.iiitdmj.ac.in/academics/download/UG/new/Proforma%20for%20Medical%20certificate.pdf" className="text-blue-600 no-underline">Medical fitness Certificate from the doctor, not below the rank of Senior Medical Officer in prescribed format or JoSAA format</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">11</td>
                                    <td className="border border-gray-300 p-2 text-black">Anti ragging declaration to be filled at <a href="https://www.antiragging.in/" className="text-blue-600 no-underline ">www.antiragging.in</a>. Bring a downloaded copy of the same. Kindly fill it once you receive your roll number.</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">12</td>
                                    <td className="border border-gray-300 p-2 text-black">
                                    <a href="https://www.iiitdmj.ac.in/academics/download/UG/new/Anti-drug%20declaration%20form%20to%20be%20signed%20by%20the%20student.pdf" className="text-blue-600 no-underline">Anti-Drug declaration form in prescribed format</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">13</td>
                                    <td className="border border-gray-300 p-2 text-black">Online receipt of Remaining Institute fee</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">14</td>
                                    <td className="border border-gray-300 p-2 text-black">Copy of Aadhaar card as proof of address</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 text-black">15</td>
                                    <td className="border border-gray-300 p-2 text-black">5 Passport size photographs</td>
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
