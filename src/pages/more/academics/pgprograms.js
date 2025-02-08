import React, { useEffect, useState } from "react";
// import Card from "../../../components/CardNew";
// import college_img1 from "../../../resources/images/3.jpg";
import PageHeader from "../../../components/PageHeader";
import { Link } from "react-router-dom";
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
    const crumbs = [{crumb: "PG Program", link:"#"}]
    return (
        <div>
            {/* Full-width image with centered heading */}
            <PageHeader breadCrumbs={crumbs} title={"PG Admission for session 2024-25"}/>

            {/* Main content area with flex for side-by-side layout */}
            <div className="container mx-auto mt-8 mb-8 flex flex-col md:flex-row">
                {/* 70% section */}
                <div className="w-full md:w-9/12 px-4 mb-8 md:mb-0">


                    {/* First Text Content Area */}
                    
                        <div className="flex flex-row mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="black"
                                className="bi bi-newspaper w-28 h-28 mr-5 -mt-2 inline-block"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 mt-4">Information For Newly Admitted (M.Tech./M.Des.) Students (for the AY 2024-25) through CCMT / CEED
                            </h2>
                        </div>
                        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        {/* Table for Schedule */}
                        <table className="w-full text-left border-separate border-spacing-2 mb-6">
                            <tbody>
                                <tr>
                                    <td className="p-3 font-semibold text-black bg-gray-100 rounded-l-lg">Physical Reporting at the Institute</td>
                                    <td className="p-3 text-black bg-gray-100 rounded-r-lg">08.08.2024</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-semibold text-black bg-gray-100 rounded-l-lg">Department visit (Orientation)</td>
                                    <td className="p-3 text-black bg-gray-100 rounded-r-lg">09.08.2024 (tentative)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-semibold text-black bg-gray-100 rounded-l-lg">Orientation</td>
                                    <td className="p-3 text-black bg-gray-100 rounded-r-lg">17.08.2024</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-semibold text-black bg-gray-100 rounded-l-lg">Document Verification</td>
                                    <td className="p-3 text-black bg-gray-100 rounded-r-lg">08.08.2024 & 09.08.2024</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-semibold text-black bg-gray-100 rounded-l-lg">Classes commencement</td>
                                    <td className="p-3 text-black bg-gray-100 rounded-r-lg">
                                        12.08.2024</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3 mb-4">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/2024-25/Admission%2024-25/Documents%20list%20for%20PG%20admission.pdf" className="text-blue-600 no-underline ">
                                        List of documents required at the time of document verification</a>.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="https://formbuilder.ccavenue.com/live/indian-bank/iiitdm-jabalapur/newly-admitted-student/application-form" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Steps for Balance Fee payments  </span> <a href="https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/2024-25/Admission%2024-25/Payment%20Steps%20for%20MTech.pdf" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>
                        </ul>
                        <p className="text-black mb-4 font-semibold text-black pt-4">
                            Contact details: <br />
                            Helpline Email Address – admissions@iiitdmj.ac.in, aracad@iiitdmj.ac.in <br />
                            Helpline contact number – 6268371310(Whatsapp), 0761-2794035 & 2794036 <br />
                            (Helpline contact numbers will be available on working days, during 10 am – 5 pm)
                        </p>


                    </div>
                    {/* second Text Content Area */}
                        <div className="flex flex-row mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="black"
                                className="bi bi-newspaper w-16 h-16 mr-5 -mt-2 inline-block mt-12"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 mt-16">MDes SPOT Admission for Session 2024-25
                            </h2>
                        </div>
                        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3 mb-4">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">List of selected candidates for MDes SPOT Round </span> <a href="https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/2024-25/Admission%2024-25/List%20of%20selected%20candidate%20for%20MDes%20SPOT.pdf" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold mr-2 text-black">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Last date: 05 August 2024.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="https://formbuilder.ccavenue.com/live/indian-bank/iiitdm-jabalapur/newly-admitted-student/application-form" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Upload Payment Link  </span> <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-MSbnpRiU_RG_Cdo6LawDmpZ4z2bQkJlkHzGTS6w1yiC3Gg/viewform" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>
                            <li className="flex items-start mb-6 pb-4 border-b border-gray-200 translate-y-1">
                                <span className="font-semibold mr-2 text-black">&bull;</span>
                                <span className="font-semibold mr-2 text-black">
                                    M.Des Spot Round result will be displayed on 1st of August
                                </span>
                            </li>
                            <li className="flex items-start pt-4">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Advertisement</span>
                                <a href="https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/2024-25/Admission%2024-25/M.Des.Program%20(SPOT)%20advertisement%20for%20Session%202024-25.pdf" className="text-blue-600 no-underline">
                                    Click Here
                                </a>
                            </li>
                            <li className="flex items-start">
                                {/* <span className="font-semibold mr-2 text-black">&bull;</span> */}
                                <span className="font-semibold mr-2 text-red-700">Please Read all the instruction available in the Advertisement before filing the application form</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold mr-2 text-black">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Last Date for submission of Online Application 25th July 2024.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Online Application form:  </span> <a href="https://docs.google.com/forms/d/e/1FAIpQLScizQvZM8BhnKD_xGd9_bXfnchWbpUTgNqNPiI6GtgDkXKxOA/viewform" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="https://formbuilder.ccavenue.com/live/indian-bank/iiitdm-jabalapur/newly-admitted-student/application-form" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>
                        </ul>

                        <p className=" mb-4 font-semibold text-black pt-4">
                            Contact details: <br />
                            Helpline Email Address – admissions@iiitdmj.ac.in, aracad@iiitdmj.ac.in <br />
                            Helpline contact number – 6268371310(Whatsapp), 0761-2794035 & 2794036 <br />
                            (Helpline contact numbers will be available on working days, during 10 am – 5 pm)
                        </p>
                    </div>
                    {/* third Text Content Area */}
                    
                        <div className="flex flex-row mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="black"
                                className="bi bi-newspaper w-16 h-16 mr-5 -mt-2 inline-block mt-12"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 mt-16">MDes Admission for Session 2024-25
                            </h2>
                        </div>
                        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3 mb-4">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/2024-25/Admission%2024-25/M.Des.Program%20(SPOT)%20advertisement%20for%20Session%202024-25.pdf" className="text-blue-600 no-underline ">
                                        Request letter for withdrawal/Cancellation of Admission</a>.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/downloads/Notification_Revised_refund_rule.pdf" className="text-blue-600 no-underline ">
                                        Refund Rule</a>.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/2024-25/Admission%2024-25/MDes%20admission%20waiting%20list%203.pdf" className="text-blue-600 no-underline ">
                                        Selected Candidate for MDes Waiting List 3 due to vacant seat positions</a>.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold mr-2 text-black">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Last date: 11 July 2024.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="https://formbuilder.ccavenue.com/live/indian-bank/iiitdm-jabalapur/newly-admitted-student/application-form" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>

                            <li className="flex items-start mb-6 pb-4 border-b border-gray-200 translate-y-1">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Upload Payment Link  </span> <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-MSbnpRiU_RG_Cdo6LawDmpZ4z2bQkJlkHzGTS6w1yiC3Gg/viewform" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>

                            <li className="flex items-start pt-4">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/2024-25/Admission%2024-25/MDes%20admission%20waiting%20list%202.pdf" className="text-blue-600 no-underline ">
                                        Selected Candidate for MDes Waiting List 2 due to vacant seat positions</a>.
                                </span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/2024-25/Admission%2024-25/Selected%20candidates%20for%20MDes.%20Programme%20admission%20(1st%20Waiting%20List).pdf" className="text-blue-600 no-underline ">
                                        Selected Candidate for MDes Waiting List 1 due to vacant seat positions</a>.
                                </span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <a href="https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/2024-25/Admission%2024-25/M.Des.Program%20cutoff%201st%20sheet.pdf" className="text-blue-600 no-underline ">
                                        Selected candidates for M.Des Programme (Full Time) | Cutoff score for selected Candidates</a>.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="https://formbuilder.ccavenue.com/live/indian-bank/iiitdm-jabalapur/newly-admitted-student/application-form" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>

                            <li className="flex items-start mb-6 pb-4 border-b border-gray-200 translate-y-1">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Upload Payment Link  </span> <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-MSbnpRiU_RG_Cdo6LawDmpZ4z2bQkJlkHzGTS6w1yiC3Gg/viewform" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>

                            <li className="flex items-start pt-4">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Advertisement  </span> <a href="https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/2024-25/Admission%2024-25/M.Des.Program%20advertisement%20for%20Session%202024-25.pdf" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start">
                                {/* <span className="font-semibold mr-2 text-black">&bull;</span> */}
                                <span className="font-semibold mr-2 text-red-700">Please Read all the instruction available in the Advertisement before filing the application form</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold mr-2 text-black">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Last Date for submission of Online Application 25th July 2024.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Online Application form:  </span> <a href="https://docs.google.com/forms/d/e/1FAIpQLSdnRpA-4KZtplWFZx5DB_qcybEKyhEgzmG16O2x1ekPUt2Zxg/viewform" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="https://services.sabpaisa.in/pages/iitdm.html#ChildVerticalTab_12" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>
                        </ul>

                        <p className=" mb-4 font-semibold text-black pt-4">
                            Contact details: <br />
                            Helpline Email Address – admissions@iiitdmj.ac.in, aracad@iiitdmj.ac.in <br />
                            Helpline contact number – 6268371310(Whatsapp), 0761-2794035 & 2794036 <br />
                            (Helpline contact numbers will be available on working days, during 10 am – 5 pm)
                        </p>
                    </div>
                    {/* fourth Text Content Area */}
                    
                        <div className="flex flex-row mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="black"
                                className="bi bi-newspaper w-16 h-16 mr-5 -mt-2 inline-block mt-12"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 mt-16">M.Tech Admission for Session 2024-25
                            </h2>
                        </div>
                        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3 mb-4">

                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span>
                                    <a href="https://ccmt.admissions.nic.in/" className="text-blue-600 no-underline ">
                                        MTech Admission through CCMT</a>.
                                </span>
                            </li>

                        </ul>

                        <p className=" mb-4 font-semibold text-black pt-4">
                            Contact details: <br />
                            Helpline Email Address – admissions@iiitdmj.ac.in, aracad@iiitdmj.ac.in <br />
                            Helpline contact number – 6268371310(Whatsapp), 0761-2794035 & 2794036 <br />
                            (Helpline contact numbers will be available on working days, during 10 am – 5 pm)
                        </p>
                    </div>
                </div>

                {/* 30% Quick Links section */}
                <div className="w-full md:w-3/12 px-4">
                <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Notices</h2>
              <ul className="space-y-2">
                {notices.map((link, index) => (
                  <li key={index}>{renderLink(link)}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Other Important Links
              </h2>
              <ul className="space-y-2">
                {otherlinks.map((form, index) => (
                  <li key={index}>{renderLink(form)}</li>
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