import React, { useEffect, useState } from "react";
import Card from "../../../components/CardNew";
import college_img1 from "../../../resources/images/3.jpg";
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
    const crumbs = [{crumb: "Fee Structure", link:"#"}]
    return (
        <div>
            {/* Full-width image with centered heading */}
            <PageHeader breadCrumbs={crumbs} title={"Fee Structure"}/>

            {/* Main content area with flex for side-by-side layout */}
            <div className="container mx-auto mt-8 mb-8 flex flex-col md:flex-row">
                {/* 70% section */}
                <div className=" w-full md:w-9/12 px-4 mb-8 md:mb-0 ">
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
                        <h2 className="text-3xl font-semibold mb-4">Fee Structure</h2>
                    </div>



                    {/* Text content area with formatted text and circular bullets */}
                    <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
                        <p><span className="text-lg font-semibold ">Clarification: </span>The fees under the heading "Semester Fees" are per semester fees.</p>
                        <br></br>
                        {/* Table 1 for Schedule with margins */}
                        <div className="mx-4">
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">Fee Structure 2024-25</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2024-25/UG2024.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Details of Fee to be paid by B.Tech./B.Des. 2024 Batch
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2024-25/PhD2024.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by PhD 2024 Batch
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2024-25/PG2024.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by M.Tech./M.Des. 2024 Batch
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2024-25/Integrated%20(M+P)%202024.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by Integrated (M.Tech./M.Des. + PhD) 2024 Batch
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 2 for Schedule with margins */}
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">Fee Structure 2023-24</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2023-24/BTech_BDes%20Fee%20Structure%202023-24.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Details of Fee to be paid by B.Tech/B. Des Students - Batch 2023
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2023-24/PG%20(MTech_MDes)%202023.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by M.Tech/M.Des Students - Batch 2023
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2023-24/Fee%20Structure%20PhD%202023%20batch.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by Ph. D Students - Batch 2023
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 3 for Schedule with margins */}
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">Fee Structure 2022-23</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2022-23/B.Tech_B.Des.2022.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Details of Fee to be paid by B.Tech/B. Des Students - Batch 2022
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2022-23/M.Tech_M.Des%202022.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by M.Tech/M.Des Students - Batch 2022
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2022-23/phd%202022%20batch.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by Ph. D Students - Batch 2022
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2022-23/Integrated%20(Master+PhD)%202022.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by Integrated(M.Tech,M.Des+PhD)- Batch 2022
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 4 for Schedule with margins */}
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">Fee Structure 2021-22</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2021-22/B.Tech,B.Des%20(2021-22).pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Details of Fee to be paid by B.Tech/B. Des Students - Batch 2021
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2021-22/M.Tech,M.Des(2021-22).pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by M.Tech/M.Des Students - Batch 2021
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2021-22/Ph.D%202021.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by Ph. D Students - Batch 2021
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2021-22/Integrated(M.Tech,M.Des+PhD)2021.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by Integrated(M.Tech,M.Des+PhD)- Batch 2021
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 5 for Schedule with margins */}
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">Fee Structure 2020-21</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2020-21/fee-structure-Btech-Bdes-2020-21.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Details of Fee to be paid by B.Tech/B. Des Students - Batch 2020
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2020-21/fee-structure-Mtech-Mdes-2020-21.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by M.Tech/M.Des Students - Batch 2020
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2020-21/fee-structure-PhD-2020-21.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by Ph. D Students - Batch 2020
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 6 for Schedule with margins */}
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">Fee Structure 2019-20</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2019-20/fee-structure-B.Tech-2019-20.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Details of Fee to be paid by B.Tech/B. Des Students - Batch 2019
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2019-20/fee-structure-M.Tech-M.Des-2019-20.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by M.Tech/M.Des Students - Batch 2019
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/fee-structure-2019-20/fee-structure-P.hD-2019-20.pdf"
                                                className="text-blue-500 no-underline hover:text-blue-700">
                                                Details of Fee to be paid by Ph. D Students - Batch 2019
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 7 for Schedule with margins */}
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">Details of Fee to be paid by B.Tech/B. Des/Ph. D/M. Tech Students (2018 onwards)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/Fees%20details%20-%202018.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Fee Structure 2018 onwards
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 8 for Schedule with margins */}
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">
                                            Details of Fee to be paid by B.Tech/B. Des/Ph. D/M. Tech Students (2017 onwards)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/B.TechB.%20DesPh.%20DM.%20Tech%20Students%20(2017%20onwards).pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Fee Structure 2017 onwards
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 9 for Schedule with margins */}
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">Details of the Fee to be paid by B. Tech /B.Des. Students (2016 batch onwards)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/FeesstructureUG2016.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Fee Structure 2016
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 10 for Schedule with margins */}
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">Details of the Fee to be paid by B. Tech Students (2015 batch onwards)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/FeesstructureUG2015.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Fee Structure 2015
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 11 for Schedule with margins */}
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">Details of the Fee to be paid by B. Tech Students (2013 batch onwards)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/FeesstructureUG2013.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Fee Structure 2013
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 12 for Schedule with margins */}
                            <table className="w-full border-collapse mb-10">
                                <thead>
                                    <tr>
                                        <th className="p-2 font-semibold text-black bg-gray-300">Details of the Fee to be paid by B. Tech Students (2012 batch onwards)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/Fee%20Structre%20For%20Batch%202012-%203rd%20Semester%20onwards.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Fee Structre 2012
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Table 13 for Schedule with margins */}
                            <table className="w-full border-collapse mb-6">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/Ph.D-fee%20structure%202017.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Fee Structure for PhD (2017 onwards)
                                            </a>
                                        </td>
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/M.TechM.Des%20fee%20structure%202017.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                                Fee structure of M.Tech/M.Des (2017 onward)
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/Fee%20Stucture%20PG%202015%20onwards_Revised.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">

                                                Fees Structure for the PhD Students
                                            </a>
                                        </td>
                                        <td className="p-2 text-black bg-gray-50 text-center">
                                            <a href="https://www.iiitdmj.ac.in/academics/download/Fee%20Stucture%20PG%20Mtech-Mdes%2013-14.pdf"
                                                className="text-blue-500  hover:text-blue-700  no-underline">
                                               Fees Structure for the MTech & MDes Students
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>


                    </div>
                </div>
                
                 {/* 30% Quick Links section */}
                 <div className="w-full md:w-3/12 px-4">
                    <div className="flex flex-row">
                        <h2 className="text-2xl font-semibold mb-2">Mode of online payment</h2>
                    </div>
                    <ul className="list-disc ml-5">
                    <li  className="mb-2 -ml-3">
                                <a href="https://services.sabpaisa.in/pages/iitdm.html#ChildVerticalTab_12" className="text-blue-500 no-underline">
                                Indian Bank - SabPaisa fee payment link
                                </a>
                    </li>
                    <li  className="mb-2 -ml-3">
                                <a href="https://iiitdm.iweb.ltd/Account/LoginMVC" className="text-blue-500 no-underline">
                                HDFC Fee Payment link
                                </a>
                    </li>
                    <li  className="mb-2 -ml-3">
                                <a href="https://easypay.axisbank.co.in/easyPay/makePayment?mid=MzY3NjY%3D" className="text-blue-500 no-underline">
                                Axis Easy pay - fee Payment lin
                                </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
