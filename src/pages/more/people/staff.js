import React from 'react'; 
import college_img1 from "../../../resources/images/3.jpg";
import profile from "../../../resources/images/admin/profile.jpg";

const staff = () => {
  const tableData = [
    {
      name: 'Aayesha Begam Mansoori',
      designation: 'Senior Technician',
      Department: 'Electronics & Communication Engineering',
      Contact: "ayesha[at]iiitdmj.ac.in",
    },
    {
      name: 'Abhishek Bawane',
      designation: 'Junior Assistant',
      Department: 'Purchase and Store',
      Contact: "abhishekb[at]iiitdmj.ac.in",
    },
    {
      name: 'Adesh Kumar',
      designation: 'Senior Assistant',
      Department: 'Finance and Accounts',
      Contact: "adesh[at]iiitdmj.ac.in",
    },
    {
      name: 'Aishwarya Pradhan',
      designation: 'Junior Assistant',
      Department: 'Mechanical Engineering',
      Contact: "aishwarya[at]iiitdmj.ac.in",
    },
    {
      name: 'Akhilesh Srivastava',
      designation: 'Senior Technician',
      Department: 'Electronics & Communication Engineering',
      Contact: "akhil[at]iiitdmj.ac.in",
    },
    {
      name: 'Alok Kulkarni',
      designation: 'Senior Technician',
      Department: 'Computer Science & Engineering',
      Contact: "alok[at]iiitdmj.ac.in",
    },
    {
      name: 'Aloysius Beenu Michael',
      designation: 'Junior Superintendent',
      Department: 'Registrar Secretariat',
      Contact: "michael[at]iiitdmj.ac.in",
    },
    {
      name: 'Anil Kumar',
      designation: 'Junior Superintendent',
      Department: 'Placement Cell',
      Contact: "anil[at]iiitdmj.ac.in",
    },
    {
      name: 'Anup Bajpai',
      designation: 'Senior Technician',
      Department: 'Mechanical Engineering',
      Contact: "anupb[at]iiitdmj.ac.in",
    },
    {
      name: 'Anup Kumar Gupta',
      designation: 'Senior Technician',
      Department: 'Computer Science & Engineering',
      Contact: "ak[at]iiitdmj.ac.in",
    },
    {
      name: 'Anupam Shukla',
      designation: 'Senior Technician',
      Department: 'Mechanical Engineering',
      Contact: "anupam[at]iiitdmj.ac.in",
    },
    {
      name: 'Ashok Kumar',
      designation: 'Superintendent',
      Department: 'On Lien',
      Contact: "ashokk[at]iiitdmj.ac.in",
    },
    {
      name: 'Bharti Kewat',
      designation: 'Senior Technician',
      Department: 'Electronics & Communication Engineering',
      Contact: "bharti[at]iiitdmj.ac.in",
    },
    {
      name: 'Dev Krishna Jha',
      designation: 'Junior Superintendent',
      Department: 'Junior Superintendent',
      Contact: "devj[at]iiitdmj.ac.in",
    },
    {
      name: 'Ganesh Prashad Kashyap',
      designation: 'Driver',
      Department: 'General Administration',
      Contact: "ganesh[at]iiitdmj.ac.in",
    },
    {
      name: 'Ghanshyam Meshram',
      designation: 'Senior Technician',
      Department: 'Computer Science & Engineering',
      Contact: "shyam[at]iiitdmj.ac.in",
    },
    {
      name: 'Jitendra Bahadur Singh',
      designation: 'Senior Assistant',
      Department: 'Security & Central Mess',
      Contact: "jbsingh[at]iiitdmj.ac.in",
    },
    {
      name: 'Kamlesh Singh Warkade',
      designation: 'Senior Assistant',
      Department: 'General Administration',
      Contact: "kamlesh[at]iiitdmj.ac.in",
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const downloads = [
    { name: 'Annual Report 2023', href: '/downloads/annual_report_2023.pdf' },
    { name: 'Board Meeting Minutes', href: '/downloads/board_meeting_minutes.pdf' },
    { name: 'Governors List', href: '/downloads/governors_list.pdf' },
    { name: 'Policy Document', href: '/downloads/policy_document.pdf' },
  ];

  return (
    <div>
      {/* Full-width image with centered heading */}
      <div className="relative w-full h-96 bg-[length:100%_100%] bg-no-repeat bg-center" style={{ backgroundImage: `url(${college_img1})` }}>
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          Staff of IIITDM
        </h1>
      </div>

      {/* Main content area with flex for side-by-side layout */}
      <div className="container mx-auto mt-8 mb- flex flex-col md:flex-row">
        {/* 70% section */}
        <div className="w-full md:w-9/12 px-4 mb-8 md:mb-0">
          <div className="flex flex-row mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-people w-16 h-16 mr-5 inline-block -mt-5"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
            <h2 className="text-3xl font-semibold mb-4">Staff of IIITDM</h2>
          </div>

          {/* Table for staff information */}
          <div className="bg-white-200 p-7 rounded-lg shadow-2xl mb-5">
            <div className="overflow-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-200 mt-4">
                <thead>
                  <tr>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">S.No.</th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">Name</th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">Designation</th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">Department</th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-2 py-2 border border-gray-200">{index + 1}</td>
                      <td className="px-2 py-2 border border-gray-200">{row.name}</td>
                      <td className="px-2 py-2 border border-gray-200">{row.designation}</td>
                      <td className="px-2 py-2 border border-gray-200">{row.Department}</td>
                      <td className="px-2 py-2 border border-gray-200">{row.Contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 30% section */}
        <div className="w-full md:w-3/12 px-4">
          <div className="flex flex-row">
            <h2 className="text-2xl font-semibold mb-2">See Also</h2>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-link-45deg w-8 h-8 ml-1 mt-1 inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
            </svg>
          </div>
          <ul className="list-disc ml-5">
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-2 -ml-3">
                <a href={link.href} className="text-blue-500 no-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Downloads Section */}
          <div className="flex flex-row">
            <h2 className="text-2xl font-semibold mt-6 mb-2">Downloads</h2>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-download w-7 h-7 ml-3 mt-4 inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
            </svg>
          </div>
          <ul className="list-disc ml-5">
            {downloads.map((download, index) => (
              <li key={index} className="mb-2 -ml-3">
                <a
                  href={download.href}
                  className="text-blue-500 no-underline"
                >
                  {download.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default staff;