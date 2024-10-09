import React from 'react';
import Card from '../../components/CardNew';
import college_img1 from "../../resources/images/3.jpg";
import profile from "../../resources/images/admin/profile.jpg";

const MainPage = () => {
  const cardsData = [
    {
      image: profile,
      name: 'Shri Deepak Ghaisas',
      designation: '',
      role: 'Chairman, BOG',
      address: 'Gencoval Strategic Services Pvt. Ltd. 501, Windfall, Sahar Plaza Complex, Andheri, Kurla Road, Andheri (East), Mumbai - 400059',
      contact: ['+91 22 42547001 (office)', '+91 98765 43210 (mobile)'],
      mail: ['deepak.ghaisas@gencoval.com', 'info@gencoval.com'],
    },
    {
      image: profile,
      name: 'Shri Sanjay Dubey',
      designation: '',
      role: 'Member',
      address: 'Additional Chief Secretary, Department of Science and Technology, Government of MP, Mantralaya - 462004, Bhopal',
      contact: [],
      mail: [],
    },
    {
      image: profile,
      name: 'Smt. Saumya Gupta',
      designation: '',
      role: 'Member',
      address: 'Joint Secretary (IIITs), Room No. 107-C, Shastri Bhawan, New Delhi, 011-23073687',
      contact: [],
      mail: ['saumya.gupta@ias.nic.in'],
    },
    {
      image: profile,
      name: 'Shri A.K. Pipal',
      designation: '',
      role: 'Member',
      address: 'Scientist ‘G’ & Group Coordinator, Ministry of Electronics and Information Technology, Room No. 4002, Electronics Niketan, 6, CGO Complex, New Delhi – 110 003',
      contact: ['011-24364777'],
      mail: ['pipal@meity.gov.in'],
    },
    {
      image: profile,
      name: 'Prof. Deepak Kumar Srivastava',
      designation: '',
      role: 'Member',
      address: 'Director, IIM Ranchi, 5th Floor, Suchana Bhawan, Meur’s Road, Audrey House Campus, Jharkhand 834008',
      contact: ['+91 0651 2280113', '+91 0651 2280940'],
      mail: ['director.office@iimranchi.ac.in', 'office.ipc@iimranchi.ac.in'],
    },
    {
      image: profile,
      name: 'Ms. Swapnali D. Gadekar',
      designation: '',
      role: 'Secretary, BOG',
      address: 'Acting Registrar, PDPM IIITDM Jabalpur',
      contact: ['0761-2794021', '0761-2794025', '0761-2794092'],
      mail: ['pipal@meity.gov.in'],
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

    // Downloads data
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
          Board Of Governors
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
              className="bi bi-newspaper w-16 h-16 mr-5 inline-block"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
              <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
            </svg>
            <h2 className="text-3xl font-semibold mb-4">Elected List Of Governors</h2>
          </div>

          {/* Subheading for card section */}
          {/* <div> */}
          {/* <h3 className="text-xl font-semibold mt-4">Meet Our Governors</h3> */}

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
          {/* </div> */}
        </div>
        

        {/* 30% Quick Links section */}
        <div className="w-full md:w-3/12 px-4">
          <h2 className="text-2xl font-semibold mb-2">See Also</h2>
          <ul className="list-disc ml-5">
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a href={link.href} className="text-blue-500 hover:underline">{link.name}</a>
              </li>
            ))}
          </ul>

          {/* Downloads Section */}
          <h2 className="text-2xl font-semibold mt-8 mb-2">Downloads</h2>
          <ul className="list-disc ml-5">
            {downloads.map((download, index) => (
              <li key={index} className="mb-2">
                <a href={download.href} className="text-blue-500 hover:underline">{download.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
