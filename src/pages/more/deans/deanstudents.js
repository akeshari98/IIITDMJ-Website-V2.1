import React from 'react';
import Card from '../../../components/CardNew';
import college_img1 from "../../../resources/images/3.jpg";
import profile from "../../../resources/images/admin/profile.jpg";

const  student= () => {
  const cardsData = [
    {
      image: profile,
      name: 'Dr. Mukesh Kumar Roy',
      designation: 'Faculty-in-Charge (Student Affairs)',
      role: '',
      address: '',
      contact: ['0761-2794171'],
      mail: [' dean.s@iiitdmj.ac.in'],
    },
    {
      image: profile,
      name: 'Shri. Santosh Mahobia',
      designation: 'Assistant Registrar (Students)',
      role: '',
      address: '',
      contact: ['0761-2794175'],
      mail: ['arsa@iiitdmj.ac.in'],
    },
    {
      image: profile,
      name: 'Shri. Rajesh Kanaujia',
      designation: 'Senior Assistant',
      role: '',
      address: '',
      contact: ['0761-2794174'],
      mail: ['krajesh@iiitdmj.ac.in'],
    },
    {
      image: profile,
      name: 'Ms. Aishwarya Pradhan',
      designation: 'Senior Assistant',
      role: '',
      address: '',
      contact: ['0761-2794174'],
      mail: ['aishwarya@iiitdmj.ac.in'],
    },
    {
      image: profile,
      name: 'Shri. Amit Kashyap',
      designation: 'Office Assistant',
      role: '',
      address: '',
      contact: ['0761-2794174'],
      mail: [' kashyapa@iiitdmj.ac.in'],
    },
    {
      image: profile,
      name: 'Shri. Monti Jatav',
      designation: 'Peon',
      role: '',
      address: '',
      contact: [''],
      mail: [''],
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
        Office of Dean Students
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
            <h2 className="text-3xl font-semibold mb-4">Office of Dean (Students)</h2>
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
          <br />
          {/* </div> */}
          <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
          <h3 className="font-semibold mt-4">Messages for Students</h3>

  <p className="block my-4 mx-0 isolate text-[#888888]  font-sans font-semibold">
  <i>
        Dear Students,
    </i>
    <br></br>
  Hearty congratulations on being taken a wise move of joining IIITDMJ community. I extend a warm welcome and assure you to take this treasured journey together in the right earnest.
  <br />
  PDPM IIITDMJ is one of the unique academic Institutes with regard to its curriculum and emphasize on project-oriented learning. I am happy to write that Indian as well as Japanese industries are recognizing enhanced capabilities of our students due to the unique curriculum. The atmosphere on the campus is lively and I am sure you will enjoy every moment spent here and will cherish for the rest of your life.
  <br />
  Rest assured that our academic standards are by no means easy and this year is no exception. Being a growing Institute, every year new laboratories and new courses are adding-on. Institute infrastructure is ever-growing. You will find the campus to be lush green with spread out areas earmarked for (a) student halls of residence (there are two and one more will come up soon), (b) the academic area and (c) residential area for faculty members and staff. Students are making every effort for betterment of Gymkhana facilities and you must make good use of it. I sincerely hope that within no time you will become part of one or more of gymkhana clubs that are organizing year-round activities. I strongly believe that by blending the studies with extra-curricular activities in the right balance, an allround personality may be built.
  <br />
  You are advised to take note of the rules and regulations that exists for all and available in our website, both academic guidelines and the rules for conduct and discipline. We strongly believe in educating students and expect them to behave as a responsible person. You will find the IIITDMJ community most cooperating, compassionate, and at the same time professional, firm in dealing with violators of our code of conduct and discipline.
  <br />
  Please be firm to say no to any act of ragging. Help us in eliminating this menace from our society by standing firm against it. We have a series of plans to deter such acts of ragging and we are quite sure we will be able to offer you an incident-free stay so that you can concentrate on your primary objective of studying and enjoying the student life here in the Institute. We have in place a strong counselling service comprising of faculty and students to help you tide over the early days here and lend you a helping hand when you need it most. If you ever require a listening ear or a person to talk with, do not hesitate to come and meet me or drop an email or contact Head, counselling services immediately. Feel free to get in touch with us in case you need any help or if you need any clarification on any matter. Have a great time at IIITDMJ.
  <br />
  A final word of caution: Remain focused on your primary objective. At times students drift so far away that coming back becomes a time-consuming job if not impossible.
        </p>
        </div>
        </div>
        

        {/* 30% Quick Links section */}
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

export default student;