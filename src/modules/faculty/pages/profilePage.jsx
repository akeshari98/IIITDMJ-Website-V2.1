import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Globe, FileText, Twitter, Linkedin, Github, ChevronDown, ChevronUp, Calendar, Building, GraduationCap, Trophy, Briefcase, Presentation,BookCopy, BookOpenText, ScrollText, CalendarRange, Users, Brain } from 'lucide-react';
import axiosInstance from '../../../axios'; // Assuming you have axios instance configured
import { useParams } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader';
const Collapsible = ({ title, children, defaultOpen = false, icon }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    
    <div className="border rounded-lg mb-2 shadow-sm hover:shadow-md transition-shadow">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 rounded-lg flex justify-between items-center hover:bg-gray-50"
      >
        <div className="flex items-center gap-2">
          {icon}
          <h3 className=" text-lg">{title}</h3>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && <div className="p-2">{children}</div>}
    </div>
  );
};

const QualificationCard = ({ degree, college, year }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500 mb-3">
    <div className="flex items-start gap-1">
      {/* <GraduationCap className="w-6 h-6 text-blue-500 mt-1" /> */}
      <div>
        <h4 className=" text-md">{degree}</h4>
        <p className="text-sm text-gray-600">{college}</p>
        <p className="text-sm text-gray-500">{year}</p>
      </div>
    </div>
  </div>
);

const ExperienceCard = ({ title, description, from, to }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500 mb-3">
    <div className="flex items-start gap-1">
      {/* <Briefcase className="w-6 h-6 text-green-500 mt-1" /> */}
      <div>
        <h4 className=" text-md">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
        {from && <Calendar className="w-4 h-4" />}
          <span className='text-sm'>{from} - {to || 'Present'}</span>
        </div>
      </div>
    </div>
  </div>
);

const AdminPositionCard = ({ title, description, from, to }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500 mb-3">
    <div className="flex items-start gap-1">
      {/* <Building className="w-6 h-6 text-purple-500 mt-1" /> */}
      <div>
        <h4 className="text-md">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
        {from && <Calendar className="w-4 h-4" />}
          <span className='text-sm'>{from} - {to || 'Present'}</span>
        </div>
      </div>
    </div>
  </div>
);

const HonorCard = ({ title, description, period }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500 mb-3">
    <div className="flex items-start gap-1">
      {/* <Trophy className="w-6 h-6 text-yellow-500 mt-1" /> */}
      <div>
        <h4 className=" text-md">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          {period && <Calendar className="w-4 h-4" />}
          <span className='text-sm'>{period}</span>
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, pi, co_pi, start_date, finish_date }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500 mb-3">
    <div className="flex items-start gap-1">
      {/* <Briefcase className="w-6 h-6 text-green-500 mt-1" /> */}
      <div>
        <h4 className="text-md mb-2 leading-tight">{title}</h4>
        <p className="text-sm text-gray-600">PI: {pi || 'NA'}</p>
        <p className="text-sm text-gray-600">Co-PI: {co_pi || 'NA'}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span className='text-sm mt-1'>
            {start_date ? new Date(start_date).toLocaleDateString() : 'NA'} -{' '}
            {finish_date ? new Date(finish_date).toLocaleDateString() : 'Present'}
          </span>
        </div>
      </div>
    </div>
  </div>
);



const BooksCard = ({ title, pyear, publisher, authors}) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500 mb-3">
    <div className="flex items-start gap-3">
      {/* <Briefcase className="w-6 h-6 text-green-500 mt-1" /> */}
      <div>
        <h4 className=" text-md mb-2 leading-tight">{title}</h4>
        <p className="text-sm text-gray-600">Author: {authors || 'NA'}</p>
        <p className="text-sm text-gray-600">Publisher: {publisher || 'NA'}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span className='text-sm mt-1'>{pyear}</span>
        </div>
      </div>
    </div>
  </div>
);


const Publication = ({ authors, title_paper, name, volume_no, page_no, year, doi}) => (
  <p className="text-gray-600">
    {authors}{title_paper && `,`} {title_paper && `"`}{title_paper}{title_paper && `"`}{name && `,`} {name}{volume_no && `,`} {volume_no}{page_no && `:`} {page_no}{year && `,`} {year}{doi && `,`} <br></br>{doi && <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer">Link: {doi}</a>}
  </p>
);


const Conference = ({ role, name, venue, start_date}) => (
  <p className="text-gray-600">
    {role}{name && `,`} {name && `"`}{name}{name && `"`}{venue && `,`} {venue}{start_date && `,`} {start_date && new Date(start_date).toLocaleDateString()}
  </p>
);

const AboutTab = ({ userId }) => {
  const [qualifications, setQualifications] = useState([]);
  const [experience, setExperience] = useState([]);
  const [adminPositions, setAdminPositions] = useState([]);
  const [honors, setHonors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [qualificationsRes, experienceRes, adminPositionsRes, honorsRes] = await Promise.all([
          axiosInstance.get(`/facultyInfo/faculty/${userId}/qualifications`),
          axiosInstance.get(`/facultyInfo/faculty/${userId}/experience`),
          axiosInstance.get(`/facultyInfo/faculty/${userId}/admin-position`),
          axiosInstance.get(`/facultyInfo/faculty/${userId}/honors`)
        ]);

        setQualifications(qualificationsRes.data);
        setExperience(experienceRes.data);
        setAdminPositions(adminPositionsRes.data);
        setHonors(honorsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);
//  console.log(qualifications);
  return (
    <div className="p-4 space-y-3">
      <Collapsible 
        title="Qualifications" 
        defaultOpen={true}
        icon={<GraduationCap className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          {qualifications.map((qual, index) => (
            <QualificationCard
              key={index}
              degree={qual.degree}
              college={qual.college}
              year={qual.year}
            />
          ))}
        </div>
      </Collapsible>

      <Collapsible 
        title="Professional Experience"
        icon={<Briefcase className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              description={exp.description}
              from={exp.from}
              to={exp.to}
            />
          ))}
        </div>
      </Collapsible>

      <Collapsible 
        title="Administrative Positions"
        icon={<Building className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          {adminPositions.map((pos, index) => (
            <AdminPositionCard
              key={index}
              title={pos.title}
              description={pos.description}
              from={pos.from}
              to={pos.to}
            />
          ))}
        </div>
      </Collapsible>

      <Collapsible 
        title="Honors & Awards"
        icon={<Trophy className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          {honors.map((honor, index) => (
            <HonorCard
              key={index}
              title={honor.title}
              description={honor.description}
              period={honor.period}
            />
          ))}
        </div>
      </Collapsible>
    </div>
  );
};
const Table = ({ headers, data }) => (
  data.length > 0 ? (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="text-left border p-1 bg-gray-50">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="border p-1">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="text-gray-500">No data available.</p>
  )
);


// Replace the existing TabContent case for 'about' with:
const TabContent = ({ tab, userId }) => {
  const courseTableHeaders = ['Course Code', 'Course Name', 'Department'];
  const [currentCourses, setCourses] = useState([]);
  const [Specialization, setSpecialization] = useState([]);
  const [projects, setProjects] = useState([]);
  const [books, setBooks] = useState([]);
  const [publications, setPublications] = useState([]);
  const [conferences, setConferences] = useState([]);
  const [students, setStudents] = useState([]);
  // const Specializtaion = [
  //   {about:'ai,ml,deep learning'},
  // ];
  // const previousCourses = [
  //   ['CS7016', 'Machine Learning', 'UG', 'IIITDM', 'Computer Science'],
  //   ['ME5021', 'CAD/CAM', 'PG', 'IIITDM', 'Mechanical Engineering'],
  // ];

  const studentTableHeaders = ['Roll No', 'Name', 'Status', 'Year', 'Specialization', 'Co-guide'];
  const phdStudents = [
    ['2020PHD01', 'John Doe', 'Ongoing', '2020', 'AI in Manufacturing', 'Dr. Smith'],
    ['2021PHD03', 'Jane Smith', 'Completed', '2021', 'Smart Materials', 'Dr. Johnson'],
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesRes, specializationRes, projectsRes, booksRes, publicationsRes, conferencesRes, studentsRes] = await Promise.all([
          axiosInstance.get(`/facultyInfo/faculty/${userId}/currentCourses`),
          axiosInstance.get(`/facultyInfo/faculty/${userId}/specialization`),
          axiosInstance.get(`/facultyInfo/faculty/${userId}/projects`),
          axiosInstance.get(`/facultyInfo/faculty/${userId}/books`),
          axiosInstance.get(`/facultyInfo/faculty/${userId}/publications`),
          axiosInstance.get(`/facultyInfo/faculty/${userId}/conferences`),
          axiosInstance.get(`/facultyInfo/faculty/${userId}/students`),
        ]);

        setCourses(coursesRes.data);
        setSpecialization(specializationRes.data);
        setProjects(projectsRes.data)
        setBooks(booksRes.data)
        setPublications(publicationsRes.data)
        setConferences(conferencesRes.data)
        setStudents(studentsRes.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);
  switch (tab) {
    case 'about':
      return <AboutTab userId={userId} />;
      case 'courses':
        return (
          <div className="p-4 space-y-3">
            <Collapsible title="Current Courses" defaultOpen={true}
            icon={<Presentation className="w-6 h-6 text-blue-500" />}>
              <Table headers={courseTableHeaders} data={currentCourses} />
            </Collapsible>

            {/* <Collapsible title="Previous Courses">
              <Table headers={courseTableHeaders} data={previousCourses} />
            </Collapsible> */}
          </div>
        );

      case 'research':
        return (
          <div className="p-4 space-y-3">
            <Collapsible title="Areas / Specialization" defaultOpen={true}
            icon={<Brain className="w-6 h-6 text-blue-500" />}>
              <ul className="leading-tight list-disc list-inside space-y-1">
                {Specialization.map((entry, entryIndex) =>
                  entry.about.split(',').map((item, itemIndex) => (
                    <li key={`${entryIndex}-${itemIndex}`}>{item.trim()}</li>
                  ))
                )}
              </ul>
            </Collapsible>

            <Collapsible title="Project Activities"
            icon={<BookOpenText className="w-6 h-6 text-blue-500" />}>
              <div className="space-y-4">
                {projects.map((pos, index) => (
                  <ProjectCard
                    key={index}
                    title={pos.title}
                    pi={pos.pi}
                    co_pi={pos.co_pi}
                    start_date={pos.start_date}
                    finish_date={pos.finish_date}
                  />
                ))}
              </div>
            </Collapsible>

            <Collapsible title="Books/Book Chapters"
            icon={<BookCopy className="w-6 h-6 text-blue-500" />}>
              <div className="space-y-4">
                {books.map((pos, index) => (
                  <BooksCard
                    key={index}
                    title={pos.title}
                    authors={pos.authors}
                    publisher={pos.publisher}
                    pyear={pos.pyear}
                  />
                ))}
              </div>
            </Collapsible>

            <Collapsible title="Publications"
            icon={<ScrollText className="w-6 h-6 text-blue-500" />}>
              <ul className="list-disc list-inside space-y-2">
                {publications.map((pos, index) => (
                  <div className='flex flex-row'>
                    <p className='text-gray-600 mr-1'>{index+1}.</p>
                    <Publication
                    key={index}
                    title_paper={pos.title_paper}
                    authors={pos.authors}
                    name={pos.name}
                    volume_no={pos.volume_no}
                    page_no={pos.page_no}
                    year={pos.year}
                    doi={pos.doi}
                  />
                  </div>
                ))}
              </ul>
            </Collapsible>

            <Collapsible title="Conference / Workshop"
            icon={<CalendarRange className="w-6 h-6 text-blue-500" />}>
            <ul className="list-disc list-inside space-y-2">
                {conferences.map((pos, index) => (
                  <div className=' flex flex-row'>
                    <p className=' text-gray-600 mr-1'>{index+1}.</p>
                    <Conference
                    key={index}
                    role={pos.role}
                    name={pos.name}
                    venue={pos.venue}
                    start_date={pos.start_date}
                  />
                  </div>
                ))}
              </ul>
            </Collapsible>

            <Collapsible title="Students"
            icon={<Users className="w-6 h-6 text-blue-500" />}>
              <Table headers={studentTableHeaders} data={students} />
            </Collapsible>
          </div>
        );

      case 'gallery':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-medium mb-6">Photo Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative aspect-square">
                  <img
                    src={`/api/placeholder/300/300`}
                    alt={`Gallery image ${i}`}
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
  }
};

// Update the ProfilePage component to pass userId to TabContent:
const ProfilePage = () => {
  const {id} = useParams();
  const userId = id;
  const [activeTab, setActiveTab] = useState('about');
  const [basicInfo,setBasicInfo] = useState('');
  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const fetchedData = await axiosInstance.get(`facultyInfo/faculty/${userId}/faculty-basic-info`);
        setBasicInfo(fetchedData.data[0]);
      } catch (error) {
        console.error('Error fetching basic info', error);
      }
    };
    fetchData()
  },[userId])
  console.log(basicInfo);
  const crumbs = [{crumb:"Faculties",link:"/employee"},{crumb:basicInfo.first_name + basicInfo.last_name, link:"#"}]
// (id int, first_name varchar, last_name varchar, designation varchar, email varchar, contact varchar, address text, profile_picture varchar, department varchar, about varchar, interests varchar, linkedin varchar, github varchar)
  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader breadCrumbs={crumbs} title={"Faculties"}/>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Sidebar */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 h-auto self-start">
            <div className="flex flex-col items-center mb-6">
              <img
                src={basicInfo.profile_picture}
                alt="Faculty Profile"
                className="w-40 h-40 mb-4"
              />
              <h1 className="text-2xl font-medium text-center">{basicInfo.first_name} {basicInfo.last_name}</h1>
              <p className="text-gray-600">{basicInfo.designation}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-sm">{basicInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <span className="text-sm">{basicInfo.contact}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className="text-sm">{basicInfo.department}</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-600" />
                <a href="#" className="text-blue-600 hover:text-blue-800">Personal Webpage</a>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-600" />
                <a href="#" className="text-blue-600 hover:text-blue-800">Download C.V.</a>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              {/* <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-400 cursor-pointer" /> */}
              <a href={basicInfo.Linkedin}><Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-700 cursor-pointer" /></a>
              <a href={basicInfo.Github}><Github className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" /></a>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3">
            {/* Navigation */}
            <nav className="border-b-2 mb-5">
              <ul className="flex gap-4">
                {['about', 'courses', 'research'].map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`text-lg relative p-2 text-left capitalize transition-colors ${
                        activeTab === tab
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {tab}
                      {/* Thicker line effect */}
                      <span
                        className={`absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                          activeTab === tab ? 'w-full' : 'w-0'
                        }`}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Content Area */}
            <div className="bg-white rounded-lg shadow-md">
              <TabContent tab={activeTab} userId={userId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
