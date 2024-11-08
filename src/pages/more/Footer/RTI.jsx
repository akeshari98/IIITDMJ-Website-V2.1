import React, {useState,useEffect} from "react";
import InfoDiv from "../../../components/InfoDiv";
import college_img1 from "../../../resources/images/3.jpg";

const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
  
    return (
      <div className="bg-white rounded-lg shadow-md mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50"
        >
          <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
          <svg
            className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && <div className="px-6 pb-6">{children}</div>}
      </div>
    );
  };
  const RTIPage = () => {
    return (
      <div className="min-h-screen">
        {/* Header */}
        <header className="bg-white text-white py-8 top-0 z-50 rounded-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black" >
            <h1 className="text-4xl font-bold">Right to Information</h1>
            <p className="mt-2 text-lg">RTI Act 2005</p>
          </div>
        </header>
  
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Name & Title Section */}
          <CollapsibleSection title="Name & Title of the Act" defaultOpen={true}>
            <ul className="list-disc pl-5 text-gray-700">
              <li><a href="https://rti.gov.in/webactrti.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600">RTI 2005 (English)</a></li>
              <li><a href="https://rti.gov.in/rti-actinhindi.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">RTI 2005 (Hindi)</a></li>
              <li><a href="https://rti.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600">RTI Guidelines</a></li>
              
            </ul>
          </CollapsibleSection>
  
          {/* Definition Section */}
          <CollapsibleSection title="Definition">
            <p className="text-gray-700 mb-4">Right to Information means the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>inspection of work, documents, records</li>
              <li>taking notes, extracts or, certified copies of documents or records</li>
              <li>taking certified samples of material</li>
              <li>obtaining information in the form of diskettes, floppies, tapes, video cassettes or in any other electronic mode or through printouts where such information is stored in a computer or in any other device subject to relevant provisions in this regard</li>
            </ul>
          </CollapsibleSection>
  
          {/* Objective Section */}
          <CollapsibleSection title="Objective/Purpose">
            <p className="text-gray-700">
              To provide available information of the Institute as enshrined in RTI ACT to the Indian citizen on payment of prescribed fees.
            </p>
          </CollapsibleSection>
  
          {/* Users Section */}
          <CollapsibleSection title="Users">
            <p className="text-gray-700">Citizens of India</p>
          </CollapsibleSection>
  
          {/* Organization Details Section */}
          <CollapsibleSection title="Article 4(1)(b)(i) - Organization Details">
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Brief Historical Background</h4>
                <p className="text-gray-700">
                  Pandit Dwarka Prasad Mishra Indian Institute of Information Technology, Design & Manufacturing (PDPM IIITDM) Jabalpur was established by the Ministry of Human Resource Development on January 24, 2005 under Madhya Pradesh Society Registration Act 1973. The foundation stone of the Institute was laid by Late Shri Arjun Singh, the then Minister of Human Resource Development (MHRD) on February 7, 2005. The first academic session of PDPM IIITDM Jabalpur started from August, 2005. The Institute started operating from the temporary location at the IT Bhawan of the Jabalpur Engineering College. Prof Sanjay G. Dhande, Director, IIT Kanpur was given the additional charge as the Director of the Institute. Simultaneously, the efforts were on to find suitable land where the campus of the new Institute could be developed. On May 3, 2006 a land of 250 acres near Dumna Airport of Jabalpur was identified by the State Government of M.P. and was handed over to the Institute. Construction work of Phase I buildings was started in 2007.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Vision</h4>
                <p className="text-gray-700">
                  PDPM Indian Institute of Information Technology, Design and Manufacturing (IIITDM) Jabalpur shall emerge as a Global Knowledge Hub for quality research and teaching under the broad area of Design and Manufacturing through cross disciplinary, innovative, futuristic and dynamic approaches.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Mission</h4>
                <p className="text-gray-700">To create an environment of high quality research and training that:</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Provides maximal opportunities for intellectual and creative development.</li>
                  <li>Provides exposure to solve real life problems through interdisciplinary approaches.</li>
                  <li>Encourages students to learn through inquiry and hands on experience rather than simple transmission of knowledge through class room teaching.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Values</h4>
                <p className="text-gray-700 mb-2">
                  Besides continuing its ongoing activities, the Institute seeks to act in a manner that is guided by a deep rooted sense of shared values and aspirations for its future planning. Working under such a sound frame of reference, the Institute:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Seeks to establish and maintain an environment enabling academic community to take intellectual and creative risks and to embrace changes that will lead to the technological innovations and development in future years.</li>
                  <li>Encourages, recognizes and rewards high performance in learning, teaching, scholarship, research and other creative activities by promoting intellectual curiosity and protecting the basic principles of academic freedom.</li>
                  <li>Provides an environment that imbibes respect for nature and environment, culture and human values.</li>
                  <li>Aspires to build an environment of tolerance and reasoned debate without any gender, caste, religious, regional or cross country bias by affirming the worth and personal dignity of every constituent member of the Institute and by contributing to a campus climate of civility.</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
  
          {/* Powers & Duties Section */}
          <CollapsibleSection title="Article 4(1)(b)(ii) - Powers & Duties">
            <p className="text-gray-700">The powers & duties of its officers and employees:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Work distribution in IIITDMJ</li>
              <li><a href="/generaladministration" target="_blank" rel="noopener noreferrer" className="text-blue-600">Institute Administration</a></li>
              <li><a href="/staff" target="_blank" rel="noopener noreferrer" className="text-blue-600">Employees</a></li>
            </ul>
          </CollapsibleSection>
  
          {/* Decision Making Process Section */}
          <CollapsibleSection title="Article 4(1)(b)(iii) - Decision Making Process">
            <p className="text-gray-700">The procedure followed in the decision making process, including channels of supervision and accountability:</p>
            <p className="text-gray-700">As per  <a href="http://site.iiitdmj.ac.in/download/IIIT%20Act%2030_of_2014.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">IIIT Act 2014</a> and <a href="https://www.iiitdmj.ac.in/downloads/The%20Gazette%20publication%20of%20Statutes%20of%20IIITDM%20Jabalpur.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">Statutes</a></p>
          </CollapsibleSection>
  
          {/* Norms Section */}
          <CollapsibleSection title="Article 4(1)(b)(iv) - Norms">
            <p className="text-gray-700">The norms set by it for the discharge of its functions:</p>
            <p className="text-gray-700">As per <a href="http://site.iiitdmj.ac.in/download/IIIT%20Act%2030_of_2014.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">IIIT Act 2014</a> and <a href="https://www.iiitdmj.ac.in/downloads/The%20Gazette%20publication%20of%20Statutes%20of%20IIITDM%20Jabalpur.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">Statutes</a></p>
          </CollapsibleSection>
  
          {/* Rules & Regulations Section */}
          <CollapsibleSection title="Article 4(1)(b)(v) - Rules & Regulations">
            <p className="text-gray-700">The rules, regulations, instructions, manuals and records, held by it or under its control or used by its employees for discharging its functions:</p>
            <p className="text-gray-700">As per <a href="http://site.iiitdmj.ac.in/download/IIIT%20Act%2030_of_2014.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">IIIT Act 2014</a> and <a href="https://www.iiitdmj.ac.in/downloads/The%20Gazette%20publication%20of%20Statutes%20of%20IIITDM%20Jabalpur.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">Statutes</a></p>
          </CollapsibleSection>
  
          {/* Documents Section */}
          <CollapsibleSection title="Article 4(1)(b)(vi) - Documents">
            <p className="text-gray-700">A statement of the categories of documents that are held by it or under its control:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li><a href="http://site.iiitdmj.ac.in/download/IIIT%20Act%2030_of_2014.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">IIIT Act 2014</a> and <a href="https://www.iiitdmj.ac.in/downloads/The%20Gazette%20publication%20of%20Statutes%20of%20IIITDM%20Jabalpur.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">Statutes</a></li>
              <li><a href="/annual_account" target="_blank" rel="noopener noreferrer" className="text-blue-600"> Annual Accounts.</a></li>
              <li><a href="/annual_report" target="_blank" rel="noopener noreferrer" className="text-blue-600"> Annual Reports.</a></li>
              <li>All records of operations of the organization</li>
            </ul>
          </CollapsibleSection>
  
          {/* Consultation Arrangements Section */}
          <CollapsibleSection title="Article 4(1)(b)(vii) - Consultation Arrangements">
            <div className="space-y-4">
              <p className="text-gray-700">The particulars of any arrangement that exists for consultation with, or representation by, the members of the public in relation to the formulation of its policy or implementation thereof:</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>The Board of Governors is the apex decision making body of IIITDM Jabalpur and the Senate for academic and the <a href="/financecommittee" target="_blank" rel="noopener noreferrer" className="text-blue-600"> Finance committee</a> for financial matters are represented by eminent persons from industry, academic community, professional bodies and the nominees of the Govt. of India etc. who help in the formulation and implementation of the policies and programmes.</li>
                <li>Different local committees are formed on need basis to advice technical/financial matter and other aspects even in routine functions of the Institute.</li>
              </ul>
            </div>
          </CollapsibleSection>
  
          {/* Boards & Committees Section */}
          <CollapsibleSection title="Article 4(1)(b)(viii) - Boards & Committees">
            <div className="space-y-4">
              <p className="text-gray-700">Following are the Main Committees / Governing body of the Institute:</p>
              <div>
                <h4 className="font-medium text-gray-900 mb-2"><a href="/boardofgoverners" target="_blank" rel="noopener noreferrer" className="text-blue-600"> Board Of Governers</a></h4>
                <p className="text-gray-700">Current Chairman: Shri Deepak Ghaisas. Registrar, IIITDM Jabalpur is the Ex-officio Member Secretary of the BOG.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2"><a href="/financecommittee" target="_blank" rel="noopener noreferrer" className="text-blue-600"> Finance committee</a></h4>
                <p className="text-gray-700">The <a href="/financecommittee" target="_blank" rel="noopener noreferrer" className="text-blue-600"> Finance committee</a>of the Institute has the responsibility to look after resource mobilization, control of expenditure, etc. It is also responsible for stimulating resource generation from sources other than Government such as sponsored projects, research, consultancy, etc. and promotes Industry Institute Interaction.</p>
                <p className="text-gray-700">The Chairman of BOG ex-officio of the Institute is the Chairman of <a href="/financecommittee" target="_blank" rel="noopener noreferrer" className="text-blue-600"> Finance committee</a> while DR (FA), IIITDM Jabalpur is the Secretary.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2"><a href="/buildingworkscommittee" target="_blank" rel="noopener noreferrer" className="text-blue-600">Building and Works Committee</a></h4>
                <p className="text-gray-700">BWC of the Institute comprises of various statutory members who advised upon the building & other infrastructural requirements of the Institute keeping in view its future plans and projections.</p>
                <p className="text-gray-700">Director, IIITDM Jabalpur is the Ex-officio Chairman of the Building & Works Committee.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2"><a href="/grievanceandredressalcell" target="_blank" rel="noopener noreferrer" className="text-blue-600">Grievance Redressal Cell</a></h4>
                <p className="text-gray-700">The Grievance Redressal Committee of the Institute looks after all grievances of students, employees and the public at large relation to the Institute. The Committee works as per directions issued by the Board of Governors/Govt.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2"><a href="https://www.iiitdmj.ac.in/downloads/Anti-Ragging-Committee-and-Squad-2024.pdf " target="_blank" rel="noopener noreferrer" className="text-blue-600">Anti Ragging Squad</a></h4>
                <p className="text-gray-700">In order to prohibit, prevent and eliminate the scourge of ragging, Competent authority of the Institute has constituted Anti Ragging Squad which consists members from faculty and administration.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2"> <a href="https://www.iiitdmj.ac.in/womencell/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600">  Women's Cell</a></h4>
                <p className="text-gray-700">The committee has been formed to prevent the sexual harassment of women at workplace. The Committee works as per directions issued by the Board of Governors/Govt.</p>
              </div>
            </div>
          </CollapsibleSection>
          
          {/* Directory Section */}
          <CollapsibleSection title="Article 4(1)(b)(ix) - Directory">
            <p className="text-gray-700">Directory of <a href="http://www.iiitdmj.ac.in/downloads/IIITDMJ%20Telephone%20Directory.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">key officials</a> of IIITDM Jabalpur is available.</p>
          </CollapsibleSection>
  
          {/* Remuneration Section */}

          <CollapsibleSection title="Article 4(1)(b)(x) - Remuneration">
            <ul className="list-disc pl-5 text-gray-700">
              <li><a href="http://www.iiitdmj.ac.in/downloads/Pay%20Level%20of%20Faculty%20Members.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">Pay Level of Faculty Members</a></li>
              <li><a href="http://www.iiitdmj.ac.in/downloads/Pay%20Level%20of%20Non-Teaching%20Employees.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">Pay Level of Non-Teaching Employees</a></li>
              
            </ul>
          </CollapsibleSection>
  
          {/* Budget Section */}
          <CollapsibleSection title="Article 4(1)(b)(xi) - Budget">
            <p className="text-gray-700">The budget allocated to each of its agency, indicating the particulars of all plans, proposed expenditures and reports on disbursements made:</p>
            <p className="text-gray-700">Please see <a href="/annual_account" target="_blank" rel="noopener noreferrer" className="text-blue-600"> Annual Accounts.</a></p>
          </CollapsibleSection>
  
          {/* Subsidy Programs Section */}
          <CollapsibleSection title="Article 4(1)(b)(xii) - Subsidy Programs">
            <p className="text-gray-700">IIITDM Jabalpur does not operate any subsidy program.</p>
          </CollapsibleSection>
  
          {/* Concessions Section */}
          <CollapsibleSection title="Article 4(1)(b)(xiii) - Concessions">
            <p className="text-gray-700">No Such Scheme is established in IIITDM Jabalpur</p>
          </CollapsibleSection>
  
          {/* Electronic Information Section */}
          <CollapsibleSection title="Article 4(1)(b)(xiv) - Electronic Information">
            <p className="text-gray-700">As available on the website of IIITDM Jabalpur.</p>
            <p className="text-gray-700">www.iiitdmj.ac.in</p>
          </CollapsibleSection>
           <CollapsibleSection
        title="Article 4(1)(b)(xv) - Facilities Available to Citizens for Obtaining Information" >
        
            <p>
              Citizens have the facility to obtain information from the PIO. IIITDM Jabalpur operates five working days a week (Monday-Friday) with a weekly holiday on Saturday and Sunday. The working hours are from 09.00 a.m. to 05.30 p.m.
            </p>
          
        </CollapsibleSection>
     

      <CollapsibleSection
        title="Article 4(1)(b)(xvi) - Public Information Officers' Details">
        
            <p><strong>1) Transparency Officer</strong><br />
              Prof. P. N. Kondekar<br />
              Professor, PDPM IIITDM Jabalpur<br />
              Ph: +91-761-2794461<br />
              Email: <a href="mailto:pnkondekar@iiitdmj.ac.in" className="text-blue-600">pnkondekar@iiitdmj.ac.in</a>
            </p>
            <p><strong>2) Appellate Authority</strong><br />
              Mrs Swapnali D Gadekar<br />
              Deputy Registrar, PDPM IIITDM Jabalpur<br />
              Email: <a href="mailto:swapnali@iiitdmj.ac.in" className="text-blue-600">swapnali@iiitdmj.ac.in</a>
            </p>
            <p><strong>3) Public Information Officer</strong><br />
              Mr. Santosh Mahobia<br />
              Assistant Registrar, PDPM IIITDM Jabalpur<br />
              Ph: +91-761-2794032<br />
              Fax: +91-761-2794094<br />
              Email: <a href="mailto:santosh@iiitdmj.ac.in" className="text-blue-600">santosh@iiitdmj.ac.in</a>
            </p>
            <p>List of previous Public Authorities</p>
          
            </CollapsibleSection>

      <CollapsibleSection
        title="Article 4(1)(b)(xvii) - Other Prescribed Information">
          <p>
            All such information is updated periodically and available on the website of IIITDM Jabalpur: <a href="http://www.iiitdmj.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-600">www.iiitdmj.ac.in</a>.
          </p>
        </CollapsibleSection>
      <CollapsibleSection
        title="1.3 of DoPT guide lines">
            
          <p>
          <b>Transfer Policy and Transfer Orders - </b>Not applicable for IIITDM Jabalpur
          </p>
        </CollapsibleSection>
      <CollapsibleSection
        title="1.4 of DoPT guide lines">
            
          <p>
          <b>RTI Applications/ First Appeals and their replies - </b><a href="http://www.iiitdmj.ac.in/downloads/Some%20RTI%20Queries%20and%20Reply.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">Some RTI Queries and their replies</a>
          </p>
        </CollapsibleSection>
      <CollapsibleSection
        title="1.5 of DoPT guide lines">
            
          <p>
          <b>CAG & PAC Paras and the Action Taken Reports - </b> Please see <a href="/annual_account" target="_blank" rel="noopener noreferrer" className="text-blue-600"> Annual Accounts.</a>
          </p>
        </CollapsibleSection>
      <CollapsibleSection
        title="1.6 of DoPT guide lines">
            
          <p>
          <b>Citizens Charter - </b> Not applicable for IIITDM Jabalpur as no civic service is directly provided.
          </p>
        </CollapsibleSection>
    
        </main>
      </div>
    );
  }
const RTI = () => {
  const [data, setData] = useState({
    director: [],
    deans: [],
    hods: [],
    profs: [],
    special: [],
    secretary: [],
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
    const endpoints = [
      { key: "director", endpoint: "director" },
      { key: "deans", endpoint: "deans" },
      { key: "hods", endpoint: "hods" },
      { key: "profs", endpoint: "profs" },
      { key: "special", endpoint: "special" },
      { key: "secretary", endpoint: "registrar" },
    ];

    // Fetch all data
    endpoints.forEach(({ endpoint, key }) => {
      fetchData(endpoint, key);
    });
  }, []);
  const quickLinks = [
    { name:"Third Party Audit Report of Mandatory disclosure", href: "https://www.iiitdmj.ac.in/downloads/RTI/PDPM_Indian_Institute_of_Information_Technology_Design_and_Manufacturing_Jabalpur(1).pdf" },
    { name:"Right to Information Act. 2005 (RTI Act)", href: "https://www.iiitdmj.ac.in/downloads/RTI/RTI-Act-2005.pdf" },
    // { name:"General Administration", href: "/generaladministration" },
    // { name:"Other Administration", href: "/otheradministration" },
    // { name:"Senate", href: "/senate" },
    { name:"Details Regarding RTI Application-Appeal", href: "https://www.iiitdmj.ac.in/downloads/Details%20Regarding%20RTI%20Application-Appeal.pdf" },
    { name:"Organizational Chart", href: "https://www.iiitdmj.ac.in/downloads/Organizational%20Chart.pdf" },
  ];

  // Downloads data
//   const downloads = [
//     { name: "Senate Minutes", href: "/senateminutes" },
//     { name: "Senate Agenda", href: "/senateagenda" },
//   ];

  return (
    <div>
      {/* Full-width image with centered heading */}
      <div
        className="relative w-full h-96 bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${college_img1})` }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          RTI @Glance
        </h1>
      </div>

      {/* Main content area with flex for side-by-side layout */}
      <div className="container mx-auto mt-8 mb-8 flex flex-col md:flex-row">
        {/* 70% section */}
        <div className="w-full md:w-9/12 mb-8 md:mb-0">

          {/* Text content area with formatted text and circular bullets */}
        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
            {/* Table content */}
            <div className="overflow-auto">
            <RTIPage/> 
            </div>

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
          {/* <div className="flex flex-row">
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
          </div> */}
          {/* <ul className="list-disc ml-5">
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
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default RTI;