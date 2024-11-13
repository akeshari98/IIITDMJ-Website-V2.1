import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Globe, FileText, Twitter, Linkedin, Github, ChevronDown, ChevronUp, Calendar, Building, GraduationCap, Trophy, Briefcase } from 'lucide-react';
import axiosInstance from '../../../axios'; // Assuming you have axios instance configured
import { useParams } from 'react-router-dom';
const Collapsible = ({ title, children, defaultOpen = false, icon }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
      >
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const QualificationCard = ({ degree, college, year }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500 mb-3">
    <div className="flex items-start gap-3">
      {/* <GraduationCap className="w-6 h-6 text-blue-500 mt-1" /> */}
      <div>
        <h4 className="font-semibold text-lg">{degree}</h4>
        <p className="text-gray-600">{college}</p>
        <p className="text-sm text-gray-500">{year}</p>
      </div>
    </div>
  </div>
);

const ExperienceCard = ({ title, description, from, to }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-green-500 mb-3">
    <div className="flex items-start gap-3">
      {/* <Briefcase className="w-6 h-6 text-green-500 mt-1" /> */}
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{from} - {to || 'Present'}</span>
        </div>
      </div>
    </div>
  </div>
);

const AdminPositionCard = ({ title, description, from, to }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-purple-500 mb-3">
    <div className="flex items-start gap-3">
      {/* <Building className="w-6 h-6 text-purple-500 mt-1" /> */}
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{from} - {to || 'Present'}</span>
        </div>
      </div>
    </div>
  </div>
);

const HonorCard = ({ title, description, period }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-yellow-500 mb-3">
    <div className="flex items-start gap-3">
      {/* <Trophy className="w-6 h-6 text-yellow-500 mt-1" /> */}
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{period}</span>
        </div>
      </div>
    </div>
  </div>
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
    <div className="p-6 space-y-6">
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
        icon={<Briefcase className="w-6 h-6 text-green-500" />}
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
        icon={<Building className="w-6 h-6 text-purple-500" />}
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
        icon={<Trophy className="w-6 h-6 text-yellow-500" />}
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
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border p-2 bg-gray-50">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border p-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
// Replace the existing TabContent case for 'about' with:
const TabContent = ({ tab, userId }) => {
  const courseTableHeaders = ['Course Code', 'Course Name', 'Category', 'Institute', 'Department'];
  const currentCourses = [
    ['CS8018', 'Blockchain Technology', 'UG', 'IIITDM', 'Computer Science'],
    ['ME6023', 'Advanced Manufacturing', 'PG', 'IIITDM', 'Mechanical Engineering'],
  ];
  const previousCourses = [
    ['CS7016', 'Machine Learning', 'UG', 'IIITDM', 'Computer Science'],
    ['ME5021', 'CAD/CAM', 'PG', 'IIITDM', 'Mechanical Engineering'],
  ];

  const studentTableHeaders = ['Roll No', 'Name', 'Status', 'Year', 'Specialization', 'Co-guide'];
  const phdStudents = [
    ['2020PHD01', 'John Doe', 'Ongoing', '2020', 'AI in Manufacturing', 'Dr. Smith'],
    ['2021PHD03', 'Jane Smith', 'Completed', '2021', 'Smart Materials', 'Dr. Johnson'],
  ];
  switch (tab) {
    case 'about':
      return <AboutTab userId={userId} />;
      case 'courses':
        return (
          <div className="p-6 space-y-6">
            <Collapsible title="Current Courses" defaultOpen={true}>
              <Table headers={courseTableHeaders} data={currentCourses} />
            </Collapsible>

            <Collapsible title="Previous Courses">
              <Table headers={courseTableHeaders} data={previousCourses} />
            </Collapsible>
          </div>
        );

      case 'research':
        return (
          <div className="p-6 space-y-6">
            <Collapsible title="Areas / Specialization" defaultOpen={true}>
              <ul className="list-disc list-inside space-y-2">
                <li>Smart Manufacturing Systems</li>
                <li>Industrial IoT and Industry 4.0</li>
                <li>AI-driven Process Optimization</li>
                <li>Sustainable Manufacturing</li>
              </ul>
            </Collapsible>

            <Collapsible title="Project Activities">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Smart Manufacturing Lab Development</h4>
                  <p className="text-gray-600">Funded by DST (2021-2024)</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">AI in Manufacturing Processes</h4>
                  <p className="text-gray-600">Industry Collaboration (2020-2023)</p>
                </div>
              </div>
            </Collapsible>

            <Collapsible title="Books/Book Chapters">
              <ul className="list-disc list-inside space-y-2">
                <li>Smart Manufacturing: Principles and Applications (2022)</li>
                <li>Chapter in "Advanced Manufacturing Technologies" (2021)</li>
              </ul>
            </Collapsible>

            <Collapsible title="Publications">
              <ul className="list-disc list-inside space-y-2">
                <li>"AI-driven optimization in smart manufacturing" - Journal of Manufacturing Systems, 2023</li>
                <li>"Industry 4.0 implementation framework" - International Journal of Production Research, 2022</li>
              </ul>
            </Collapsible>

            <Collapsible title="Conference / Workshop">
              <ul className="list-disc list-inside space-y-2">
                <li>International Conference on Smart Manufacturing (Organizer, 2023)</li>
                <li>Workshop on Industry 4.0 (Speaker, 2022)</li>
              </ul>
            </Collapsible>

            <Collapsible title="Students">
              <div className="space-y-6">
                <h4 className="font-semibold mb-2">Ph.D. Students</h4>
                <Table headers={studentTableHeaders} data={phdStudents} />
                
                <h4 className="font-semibold mb-2">M.Tech Students</h4>
                <Table 
                  headers={studentTableHeaders} 
                  data={[
                    ['2022MT01', 'Alice Cooper', 'Ongoing', '2022', 'Manufacturing', 'Dr. Brown'],
                    ['2022MT02', 'Bob Wilson', 'Ongoing', '2022', 'Design', 'Dr. White']
                  ]} 
                />
                
                <h4 className="font-semibold mb-2">M.Des Students</h4>
                <Table 
                  headers={studentTableHeaders} 
                  data={[
                    ['2022MD01', 'Carol Davis', 'Ongoing', '2022', 'Product Design', 'Dr. Green'],
                    ['2021MD02', 'David Miller', 'Completed', '2021', 'UX Design', 'Dr. Black']
                  ]} 
                />
              </div>
            </Collapsible>
          </div>
        );

      case 'gallery':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
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
// (id int, first_name varchar, last_name varchar, designation varchar, email varchar, contact varchar, address text, profile_picture varchar, department varchar, about varchar, interests varchar, linkedin varchar, github varchar)
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Sidebar */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 h-74">
            <div className="flex flex-col items-center mb-6">
              <img
                src={basicInfo.profile_picture}
                alt="Faculty Profile"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h1 className="text-2xl font-bold text-center">{basicInfo.first_name} {basicInfo.last_name}</h1>
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
            <nav className="bg-white rounded-lg shadow-md mb-6">
              <ul className="flex flex-wrap">
                {['about', 'courses', 'research', 'gallery'].map((tab) => (
                  <li key={tab} className="flex-1">
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`w-full p-4 text-center capitalize transition-colors ${
                        activeTab === tab
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tab}
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
