import React, { useEffect, useState } from "react";
// import Card from "../../../components/CardNew";
// import college_img1 from "../../../resources/images/3.jpg";
import PageHeader from "../../../components/PageHeader";
import { Link } from "react-router-dom";
const MainPage = () => {
    const notices = [
        // { name: "Request letter for withdrawal/Cancellation of Admission", href: "https://docs.google.com/forms/d/e/1FAIpQLScz5Vlu2hatEO5MC_qzJml6lLj4F_1ltMTEBKlDrMfj-Qa56g/viewform" },
        // { name: "Refund Rule", href: "https://www.iiitdmj.ac.in/downloads/Notification_Revised_refund_rule.pdf" },
        // { name: "MTech Admission through CCMT", href: "https://ccmt.admissions.nic.in/" },
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
    const crumbs = [{crumb: "PhD Program", link:"#"}]
    return (
        <div>
            {/* Full-width image with centered heading */}
            <PageHeader breadCrumbs={crumbs} title={"PhD Admission for session 2024-25"}/>

            {/* Main content area with flex for side-by-side layout */}
            <div className="container mx-auto mt-8 mb-8 flex flex-col md:flex-row">
                {/* 70% section */}
                <div className="w-full md:w-9/12 px-4 mb-8 md:mb-0">


                    {/* First Text Content Area */}
                    
                        <div className="flex items-start mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                className="bi bi-newspaper w-12 h-12 mr-5 shrink-0 mt-2"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 ">
                                Advertisement for PhD admissions Winter Session for the AY 2024-25
                            </h2>
                        </div>
                        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        <h6 className=" text-black ">Please Read all the instruction available in the Advertisement before filing the application form</h6>
                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3 mb-4">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Advertisement</span>
                                <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Online Application form:  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
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
                    {/* Second Text Content Area */}
                    
                        <div className="flex items-start mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                className="bi bi-newspaper w-12 h-12 mr-5 shrink-0 mt-16"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 mt-16">
                                Advertisement for PhD admissions under the Visvesvaraya PhD Scheme(Winter Session) for the AY 2024-25
                            </h2>
                        </div>
                        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        <h6 className=" text-black ">Please Read all the instruction available in the Advertisement before filing the application form</h6>
                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3 mb-4">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Advertisement</span>
                                <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Online Application form:  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
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
                    {/* third Text Content Area */}
                    
                        <div className="flex items-start mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                className="bi bi-newspaper w-12 h-12 mr-5 shrink-0 mt-14"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 mt-14">
                                PhD Admission for Session 2024-25 (Nov-2024)
                            </h2>
                        </div>
                        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        <h6 className=" text-black ">Please Read all the instruction available in the Advertisement before filing the application form</h6>
                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3 mb-4">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Advertisement</span>
                                <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Online Application form:  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>
                        </ul>
                        <p className="text-black mb-4 font-semibold text-black pt-4">
                            Contact details: <br />
                            Helpline Email Address - admissions@iiitdmj.ac.in, aracad@iiitdmj.ac.in <br />
                            Helpline contact number – 6268371310(Whatsapp), 0761-2794035 & 2794036 <br />
                            (Helpline contact numbers will be available on working days, during 10 am – 5 pm)
                        </p>


                    </div>
                    {/* Forth Text Content Area */}
                    
                        <div className="flex items-start mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                className="bi bi-newspaper w-12 h-12 mr-5 shrink-0 mt-12"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 mt-12">
                                Information For Newly Admitted Ph.D. Students
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
                                <span className="font-semibold mr-2 text-black">List of documents required at the time of document verification:  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>

                        </ul>
                        <p className="text-black mb-4 font-semibold text-black pt-4">
                            Contact details: <br />
                            Helpline Email Address – admissions@iiitdmj.ac.in, aracad@iiitdmj.ac.in <br />
                            Helpline contact number – 6268371310(Whatsapp), 0761-2794035 & 2794036 <br />
                            (Helpline contact numbers will be available on working days, during 10 am – 5 pm)
                        </p>


                    </div>
                    {/* Fifth Text Content Area */}
                    
                        <div className="flex items-start mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                className="bi bi-newspaper w-12 h-12 mr-4 shrink-0 mt-14"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 mt-16">
                                PhD Admission for Session 2024-25 (July-2024)
                            </h2>
                        </div>
                        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3 mb-4">
                        <li className="flex items-start">
                                {/* <span className="font-semibold mr-2 text-black">&bull;</span> */}
                                <span className="font-semibold mr-2 text-red-600">The deadline for the applications has been extended till 28th July 2024</span>
                            </li>
                            <li className="flex items-start">
                                {/* <span className="font-semibold mr-2 text-black">&bull;</span> */}
                                <span className="font-semibold mr-2 text-grey-800">Please Read all the instruction available in the Advertisement before filing the application form</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Advertisement</span>
                                <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Online Application form:  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>
                        </ul>
                        <p className="text-black mb-4 font-semibold text-black pt-4">
                            Contact details: <br />
                            Helpline Email Address - admissions@iiitdmj.ac.in, aracad@iiitdmj.ac.in <br />
                            Helpline contact number - 6268371310(Whatsapp), 0761-2794035 & 2794036 <br />
                            (Helpline contact numbers will be available on working days, during 10 am - 5 pm)
                        </p>


                    </div>
                    {/* Sixth Text Content Area */}
                    
                        <div className="flex items-start mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                className="bi bi-newspaper w-12 h-12 mr-5 shrink-0 mt-14"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 mt-16">
                                PhD Admission for Session 2024-25
                            </h2>
                        </div>
                        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3 mb-4">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">List of Shortlist candidates for PhD (ECE): </span>
                                <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">List of Shortlist candidates for PhD ALL:  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Advertisement  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>
                            <li className="flex items-start">
                                {/* <span className="font-semibold mr-2 text-black">&bull;</span> */}
                                <span className="font-semibold mr-2 text-red-600">Please Read all the instruction available in the Advertisement before filing the application form</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Online Application form:  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>

                        </ul>
                        <p className="text-black mb-4 font-semibold text-black pt-4">
                            Contact details: <br />
                            Helpline Email Address - admissions@iiitdmj.ac.in, aracad@iiitdmj.ac.in <br />
                            Helpline contact number - 6268371310(Whatsapp), 0761-2794035 & 2794036 <br />
                            (Helpline contact numbers will be available on working days, during 10 am - 5 pm)
                        </p>


                    </div>
                    {/* Seventh Text Content Area */}
                    
                        <div className="flex items-start mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                className="bi bi-newspaper w-12 h-12 mr-5 shrink-0 mt-16"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 mt-16">
                                PhD Admission Under the “Visvesvaraya PhD Scheme for Electronics and IT”
                            </h2>
                        </div>
                        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3 mb-4">
                            <li className="flex items-start">
                                {/* <span className="font-semibold mr-2 text-black">&bull;</span> */}
                                <span className="font-semibold mr-2 text-red-600">Last date has been extended upto 07/05/2024.</span>
                            </li>
                            <li className="flex items-start">
                                {/* <span className="font-semibold mr-2 text-black">&bull;</span> */}
                                <span className="font-semibold mr-2 text-red-600">Please Read all the instruction available in the Advertisement before filing the application form</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Advertisement</span>
                                <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Online Application form:  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
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
                    {/* Eigth Text Content Area */}
                    
                        <div className="flex flex-row mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="black"
                                className="bi bi-newspaper w-12 h-12 mr-5 mt-14 inline-block"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
                            </svg>
                            <h2 className="text-3xl font-semibold mb-0 mt-16">PhD Admission for AY 2023-24 (starting from March 2024)
                            </h2>
                        </div>
                        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        {/* Bulleted List */}
                        <ul className="list-none space-y-2 text-black p-3 mb-4">
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Selected candidates for Ph.D. Programme (Full Time) Admission in NS(Mathematics) Discipline: </span>
                                <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Selected candidates for Ph.D. Programme (Full Time) Admission in various Discipline:  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start mb-6 pb-4 border-b border-gray-200 translate-y-1">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Payment Link  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here</a>.
                            </li>


                            <li className="flex items-start">
                                <span className="text-xl mr-2 shrink-0">&bull;</span>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-black">
                                        List of shortlisted candidates for Written Test/Interview for Ph.D. (Full Time) Admission in various disciplines:
                                    </span>
                                    <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                        Click Here
                                    </a>.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Advertisement</span>
                                <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here
                                </a>
                            </li>
                            <li className="flex items-start">
                                {/* <span className="font-semibold mr-2 text-black">&bull;</span> */}
                                <span className="font-semibold mr-2 text-red-600">Please Read all the instruction available in the Advertisement before filing the application form</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-xl mr-2">&bull;</span>
                                <span className="font-semibold mr-2 text-black">Online Application form:  </span> <a href="mailto:vh@iiitdmj.ac.in" className="text-blue-600 no-underline">
                                    Click Here </a>.
                            </li>
                            <li className="flex items-start">
                                {/* <span className="text-xl mr-2">&bull;</span> */}
                                <span className="font-semibold mr-2 text-black">Last Date for application: 31.03.2024
                                </span>
                            </li>

                        </ul>
                        <p className="text-black mb-4 font-semibold text-black pt-4">
                            Contact details: <br />
                            Helpline Email Address – admissions@iiitdmj.ac.in, aracad@iiitdmj.ac.in <br />
                            Helpline contact number – 6268371310(Whatsapp), 0761-2794035 & 2794036 <br />
                            (Helpline contact numbers will be available on working days, during 10 am – 5 pm)
                        </p>


                    </div>



                </div>

                {/* 30% Quick Links section */}
                <div className="w-full md:w-3/12 px-4">
                    <div className="flex flex-row">
                        <h2 className="text-2xl font-semibold mb-2">Notices</h2>
                    </div>
                    <ul className="list-disc ml-5">
                        {notices.map((link, index) => (
                            <li key={index} className="mb-2 -ml-3">
                               {renderLink(link)}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-row">
                        <h2 className="text-2xl font-semibold mb-2">Other Important Link</h2>
                    </div>
                    <ul className="list-disc ml-5">
                        {otherlinks.map((link, index) => (
                            <li key={index} className="mb-2 -ml-3">
                                {renderLink(link)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default MainPage;