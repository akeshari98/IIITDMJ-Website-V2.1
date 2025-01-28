import React from 'react';
import { 
  ChevronRight, 
  BookOpen, 
  FileText, 
  School, 
  Download, 
  ExternalLink,
  Building,
  GraduationCap,
  BookCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader';
const PGCurriculum = () => {
  const mTechSeats = [
    {
      discipline: "Computer Science & Engineering (CSE)",
      specializations: [
        { name: "AI and ML", seats: 20 },
        { name: "Data Science", seats: 20 }
      ]
    },
    {
      discipline: "Electronics & Communication Engineering (ECE)",
      specializations: [
        { name: "Communication System Design", seats: 10 },
        { name: "Nanoelectronics and VLSI Design", seats: 10 },
        { name: "Power and Control", seats: 10 }
      ]
    },
    {
      discipline: "Mechanical Engineering (ME)",
      specializations: [
        { name: "Design", seats: 10 },
        { name: "CAD/CAM", seats: 10 },
        { name: "Smart Manufacturing", seats: 10 }
      ]
    },
    {
      discipline: "Mechatronics (MT)",
      specializations: [
        { name: "Mechatronics", seats: 10 }
      ]
    }
  ];

  const documentLinks = [
    {
      category: "Curriculum Documents",
      links: [
        { text: "MTech Curriculum and Courses", href: "https://www.iiitdmj.ac.in/academics/download/PG%20course%20structure_evaluation%20scheme28092017.pdf" },
        { text: "PG Natural Science", href: "https://www.iiitdmj.ac.in/academics/download/PG%20NS%2002112017.pdf" },
        { text: "PG Mechanical", href: "https://www.iiitdmj.ac.in/academics/download/MTech%20ME%20Curriculum%20Structure-Mechanical.pdf" },
        { text: "PG Electronics and Communication", href: "https://www.iiitdmj.ac.in/academics/download/PG%20ECE_03112017.pdf" },
        { text: "PG Computer Science", href: "https://www.iiitdmj.ac.in/academics/download/PG%20CSE_02112017.pdf" },
        { text: "PG Mechatronics", href: "https://www.iiitdmj.ac.in/academics/download/PG_MT_02112017.pdf" }
      ]
    },
    {
      category: "Additional Resources",
      links: [
        { text: "MDes Course Content", href: "http://www.iiitdmj.ac.in/academics/download/MDes_Sept2016.pdf" },
        { text: "PhD Curriculum", href: "http://www.iiitdmj.ac.in/academics/download/curriculum_PhD2016.pdf" },
        { text: "Eligibility & General Info", href: "https://www.iiitdmj.ac.in/academics/download/PhD_2017%20Adver..pdf" },
        { text: "Apply Online", href: "http://admission.iiitdmj.ac.in/" },
        { text: "Proforma for OBC Certificate", href: "https://www.iiitdmj.ac.in/academics/download/Proforma_for_OBC_2.pdf" },
        { text: "Fee Structure", href: "https://www.iiitdmj.ac.in/academics/admission/fee_structure.php" },
        { text: "Revised Refund Rule 2019", href: "https://www.iiitdmj.ac.in/downloads/Revised%20Refund%20Rule%20%202019.pdf" }
      ]
    },
    {
      category: "Seat Matrix Documents",
      links: [
        { text: "Seat Matrix 2020-21", href: "https://www.iiitdmj.ac.in/academics/download/Seat%20Matrix%202020-21.pdf" },
        { text: "Seat Matrix 2019-20", href: "https://www.iiitdmj.ac.in/academics/download/Seat%20Matrix%202019-20.pdf" },
        { text: "Seat Matrix 2018-19", href: "https://www.iiitdmj.ac.in/academics/download/Seat%20Matrix%202018-19.pdf" },
        { text: "Seat Matrix for DASA 2018", href: "https://www.iiitdmj.ac.in/academics/download/PG%20Seat%20Matrix%20DASA-2018_IIITDMJ.xlsx" }
      ]
    }
  ];
  const crumbs = [{crumb: "Pg Programme", link:"#"}]
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader breadCrumbs={crumbs} title={"Post Graduate Programmes"}/>
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Graduate Programs</h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="hover:text-blue-200">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Post Graduate</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Programs Overview */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <School className="w-6 h-6 text-blue-600" />
                Available Programs
              </h2>
              <div className="prose max-w-none">
                <p>The Institute offers Master's programmes in:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Link to="#MTech" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Master of Technology (M.Tech.)
                    </Link>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Link to="#MDes" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Master of Design (M.Des.)
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* M.Tech Section */}
            <div id="MTech" className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">M.Tech Program Structure</h2>
              <div className="space-y-6">
                <div className="prose max-w-none">
                  <p>The Institute offers M.Tech. programs in various Disciplines. Each discipline offers specialization looking to the current requirements of Industry/academia.</p>
                </div>

                {/* Specializations Table */}
                {mTechSeats.map((discipline, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-medium text-lg mb-3">{discipline.discipline}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {discipline.specializations.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                          <span>{spec.name}</span>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {spec.seats} seats
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Admission Process */}
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Admissions</h3>
                  <p>Admissions to the M.Tech. programs will be carried out through the CCMT (<a href="http://www.ccmt.nic.in/" className="text-blue-600 hover:text-blue-800">www.ccmt.nic.in</a>). At the time of admissions through CCMT no specialization will be allotted to the students.</p>
                  
                  <h4 className="text-lg font-semibold mt-4 mb-2">Allotment of Specializations:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The candidates admitted through CCMT will be allowed to fill the choice of specialization at the time of final registration in the Institute.</li>
                    <li>The candidate will be allotted the specialization on the basis of the merit (Gate rank) and availability of seat as per the seat matrix.</li>
                    <li>If first choice is not met, second choice will be allotted, if available and vice versa.</li>
                    <li>In case number of candidates in an specialization are less than 5, the degree will be awarded in the discipline without any specialization.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* M.Des Section */}
            <div id="MDes" className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">M.Des Program</h2>
              <div className="prose max-w-none">
                <p>M.Des. admissions will be through Institute level counselling based on the GATE/CEED score/rank.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium">GATE Qualified Seats</h4>
                    <p className="text-2xl font-bold text-blue-600">10</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium">CEED Qualified Seats</h4>
                    <p className="text-2xl font-bold text-blue-600">20</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600">Note: In case, sufficient candidates are not available with GATE or CEED qualification, the seats will be added with seats of other qualifying exams.</p>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <table className="min-w-full">
                    <tbody>
                      <tr>
                        <td className="font-medium">Design (DS)</td>
                        <td className="text-center">-</td>
                        <td className="text-center font-bold">30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Document Categories */}
            {documentLinks.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <BookCheck className="w-6 h-6 text-blue-600" />
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.links.map((link, idx) => (
                    <ResourceLink key={idx} href={link.href} text={link.text} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-blue-600" />
                See Also
              </h3>
              <div className="space-y-3">
                <SidebarLink 
                  href="https://www.iiitdmj.ac.in/academics/download/PG%20course%20structure_evaluation%20scheme28092017.pdf"
                  text="MTech Curriculum and Courses"
                />
                <SidebarLink 
                  href="http://www.iiitdmj.ac.in/academics/download/curriculum_PhD2016.pdf"
                  text="PhD Curriculum"
                />
              </div>
            </div>

            {/* Rules and Regulations */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Rules and Regulations
              </h3>
              <div className="space-y-3">
                <SidebarLink 
                  href="https://www.iiitdmj.ac.in/academics/download/SACS-Manual.pdf"
                  text="SACs Manual"
                />
                <SidebarLink 
                  href="https://www.iiitdmj.ac.in/academics/download/SPACS-fellowships.pdf"
                  text="SPACS Manual for guidelines & procedures (Updated -June 10, 2014)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourceLink = ({ href, text }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-4 border rounded-lg hover:bg-blue-50 transition-colors"
  >
    <Download className="w-5 h-5 text-blue-600" />
    <span className="text-gray-700 hover:text-blue-600">{text}</span>
  </a>
);

const SidebarLink = ({ href, text }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
  >
    <ChevronRight className="w-4 h-4" />
    <span>{text}</span>
  </a>
);

export default PGCurriculum;