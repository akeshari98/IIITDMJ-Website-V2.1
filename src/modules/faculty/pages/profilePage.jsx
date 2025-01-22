import React, { useState, useEffect } from 'react';
import { 
  User, Book, Rocket, Globe, Mail, Phone, MapPin, FileText, 
  Linkedin, Github, GraduationCap, Building, Briefcase, Trophy,
  ScrollText, BookCopy, Lightbulb, Award, Users, CalendarRange,
  BookOpenText, Navigation, Presentation, Brain, Bookmark, 
  BookOpen, GlobeIcon, Map, Sparkles, ChevronDownCircle
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../axios';
import PageHeader from '../../../components/PageHeader';
const ExpandableSection = ({ children, maxHeight = "24rem" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={`${
          isExpanded ? "h-auto" : "h-[20rem]"
        } overflow-hidden transition-all duration-500`}
      >
        {children}
        {/* {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        )} */}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center py-3 mt-2 text-blue-600 hover:text-blue-800 transition-colors group"
      >
        <span className="mr-2">{isExpanded ? "Show Less" : "View More"}</span>
        <ChevronDownCircle className={`w-4 h-4 transition-transform duration-300 ${
          isExpanded ? "rotate-180" : ""
        } group-hover:scale-110`} />
      </button>
    </div>
  );
};
// Decorative background pattern component
const BackgroundPattern = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
);

const TabButton = ({ active, onClick, children, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 text-md font-medium transition-all relative ${
      active 
        ? 'text-blue-600 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-600 before:rounded-t-full' 
        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
    }`}
  >
    <Icon className={`w-4 h-4 transition-transform ${active ? 'scale-110' : ''}`} />
    {children}
    {/* {active && <Sparkles className="w-3 h-3 absolute top-2 right-2 text-blue-400 animate-pulse" />} */}
  </button>
);

const SubTabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm rounded-full transition-all ${
      active 
        ? 'bg-blue-100 text-blue-600 shadow-sm transform scale-105' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500 relative overflow-hidden ${className}`}>
    <div className="absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 rotate-45 bg-blue-50 opacity-50" />
    {children}
  </div>
);
const ContentSection = ({ title, icon: Icon, children }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-blue-500" />
      <h2 className="text-lg font-medium">{title}</h2>
    </div>
    <ExpandableSection>

    {children}
    </ExpandableSection>
  </div>
);

const SocialLinks = ({ linkedin, github }) => (
  <div className="flex justify-center gap-4 mt-6">
    {linkedin && (
      <a 
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    )}
    {github && (
      <a 
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Github className="w-5 h-5" />
      </a>
    )}
  </div>
);

const ProfilePage = () => {
  // Initialize with default tabs
  const {id} = useParams();
  const [activeTab, setActiveTab] = useState('about');
  const [activeSubTab, setActiveSubTab] = useState('education');
  const [basicInfo, setBasicInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    qualifications: [],
    experience: [],
    adminPositions: [],
    currentCourses: [],
    publications: [],
    books: [],
    projects: [],
    consultancyProjects: [],
    patents: [],
    organizedEvents: [],
    organizedConferences: [],
    visits: [],
    achievements: [],
    expertLectures: [],
    students: [],
    honors:[]
  });

  // Function to get default subtab for each main tab
  const getDefaultSubTab = (tab) => {
    switch (tab) {
      case 'about': return 'education';
      case 'publications': return 'research';
      case 'projects': return 'research-projects';
      case 'outreach': return 'events';
      case 'achievements': return 'awards';
      default: return '';
    }
  };

  // Update activeSubTab when activeTab changes
  useEffect(() => {
    setActiveSubTab(getDefaultSubTab(activeTab));
  }, [activeTab]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all([
          axiosInstance.get(`/facultyInfo/faculty/${id}/faculty-basic-info`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/qualifications`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/experience`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/admin-position`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/currentCourses`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/publications`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/books`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/projects`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/consultancy-projects`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/patents`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/organized-events`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/organized-conferences`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/visits`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/achievements`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/expert-lectures`),
          axiosInstance.get(`/facultyInfo/faculty/${id}/honors`),
        ]);

        setBasicInfo(responses[0].data[0]);
        setData({
          qualifications: responses[1].data,
          experience: responses[2].data,
          adminPositions: responses[3].data,
          currentCourses: responses[4].data,
          publications: responses[5].data,
          books: responses[6].data,
          projects: responses[7].data,
          consultancyProjects: responses[8].data,
          patents: responses[9].data,
          organizedEvents: responses[10].data,
          organizedConferences: responses[11].data,
          visits: responses[12].data,
          achievements: responses[13].data,
          expertLectures: responses[14].data,
          honors:responses[15].data
        });
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const tabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'publications', label: 'Publications', icon: Book },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'outreach', label: 'Outreach', icon: Globe },
    { id: 'achievements', label: 'Achievements', icon: Trophy }
  ];

  const getSubTabs = () => {
    switch (activeTab) {
      case 'about':
        return [
          { id: 'education', label: 'Education' },
          { id: 'experience', label: 'Experience' },
          { id: 'administration', label: 'Administration' }
        ];
      case 'publications':
        return [
          { id: 'research', label: 'Research Papers' },
          { id: 'books', label: 'Published Books' }
        ];
      case 'projects':
        return [
          { id: 'research-projects', label: 'Research Projects' },
          { id: 'patents', label: 'Patents' },
          { id: 'consultancy', label: 'Consultancy Projects' }
        ];
      case 'outreach':
        return [
          { id: 'events', label: 'Events' },
          { id: 'visits', label: 'International Visits' },
          { id: 'conferences', label: 'Conferences' },
          { id: 'lectures', label: 'Expert Lectures' }
        ];
      case 'achievements':
        return [
          { id: 'awards', label: 'Awards & Honors' },
          { id: 'recognition', label: 'Recognition' }
        ];
      default:
        return [];
    }
  };
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-6">
            {activeSubTab === 'education' && (
              <ContentSection title="Educational Qualifications" icon={GraduationCap}>
                {data.qualifications.map((qual, index) => (
                  <Card key={index}>
                    <h4 className="font-medium text-lg text-blue-900">{qual.degree}</h4>
                    <p className="text-gray-700 mt-1">{qual.college}</p>
                    <p className="text-gray-500 mt-1">{qual.year}</p>
                  </Card>
                ))}
              </ContentSection>
            )}

            {activeSubTab === 'experience' && (
              <ContentSection title="Professional Experience" icon={Briefcase}>
                {data.experience.map((exp, index) => (
                  <Card key={index}>
                    <h4 className="font-medium text-lg text-blue-900">{exp.title}</h4>
                    <p className="text-gray-700 mt-1">{exp.description}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <CalendarRange className="w-4 h-4" />
                      <span>{exp.from} - {exp.to || 'Present'}</span>
                    </div>
                  </Card>
                ))}
              </ContentSection>
            )}

            {activeSubTab === 'administration' && (
              <ContentSection title="Administrative Roles" icon={Building}>
                {data.adminPositions.map((pos, index) => (
                  <Card key={index}>
                    <h4 className="font-medium text-lg text-blue-900">{pos.title}</h4>
                    <p className="text-gray-700 mt-1">{pos.description}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <CalendarRange className="w-4 h-4" />
                      <span>{pos.from} - {pos.to || 'Present'}</span>
                    </div>
                  </Card>
                ))}
              </ContentSection>
            )}
          </div>
        );
        case 'publications':
          return (
            <div className="space-y-6">
              {activeSubTab === 'research' && (
                <ContentSection title="Research Papers" icon={ScrollText}>
                  {data.publications.map((pub, index) => (
                    <Card key={index}>
                      <h4 className="font-medium">{pub.title_paper}</h4>
                      <p className="text-sm text-gray-600 mt-1">{pub.authors}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {pub.name}, {pub.volume_no}:{pub.page_no}, {pub.year}
                      </p>
                      {pub.doi && (
                        <a 
                          href={`https://doi.org/${pub.doi}`}
                          className="text-sm text-blue-600 hover:text-blue-800 mt-2 inline-block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          DOI: {pub.doi}
                        </a>
                      )}
                    </Card>
                  ))}
                </ContentSection>
              )}
  
              {activeSubTab === 'books' && (
                <ContentSection title="Published Books" icon={BookCopy}>
                  {data.books.map((book, index) => (
                    <Card key={index}>
                      <h4 className="font-medium">{book.title}</h4>
                      <p className="text-sm text-gray-600">Authors: {book.authors}</p>
                      <p className="text-sm text-gray-600">Publisher: {book.publisher}</p>
                      <p className="text-sm text-gray-500">{book.pyear}</p>
                    </Card>
                  ))}
                </ContentSection>
              )}
            </div>
          );
  
      case 'projects':
        return (
          <div className="space-y-6">
             {activeSubTab === 'research-projects' && (
              <ContentSection title="Research Projects" icon={Rocket}>
                {data.projects.map((project, index) => (
                  <Card key={index}>
                    <h4 className="font-medium">{project.title}</h4>
                    <p className="text-sm text-gray-600">PI: {project.pi}</p>
                    <p className="text-sm text-gray-600">Co-PI: {project.co_pi}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      {new Date(project.start_date).toLocaleDateString()} - {
                        project.finish_date 
                          ? new Date(project.finish_date).toLocaleDateString()
                          : 'Present'
                      }
                    </p>
                  </Card>
                ))}
              </ContentSection>
            )}
            {activeSubTab === 'patents' && (
              <ContentSection title="Patents" icon={Lightbulb}>
                {data.patents.map((patent, index) => (
                  <Card key={index}>
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-lg text-blue-900">{patent.title}</h4>
                      <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
                        {patent.status}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-2">Patent No: {patent.p_no}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <CalendarRange className="w-4 h-4" />
                      <span>{patent.p_year}</span>
                    </div>
                  </Card>
                ))}
              </ContentSection>
            )}

            {activeSubTab === 'consultancy' && (
              <ContentSection title="Consultancy Projects" icon={Briefcase}>
                {data.consultancyProjects.map((project, index) => (
                  <Card key={index}>
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-lg text-blue-900">{project.title}</h4>
                      <span className={`px-2 py-1 text-xs rounded ${
                        project.status === 'Ongoing' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-2">Client: {project.client}</p>
                    <p className="text-gray-700">Consultants: {project.consultants}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <CalendarRange className="w-4 h-4" />
                      <span>
                        {new Date(project.start_date).toLocaleDateString()} - {
                          project.end_date 
                            ? new Date(project.end_date).toLocaleDateString()
                            : 'Ongoing'
                        }
                      </span>
                    </div>
                    {project.financial_outlay && (
                      <p className="mt-2 text-gray-600">
                        Financial Outlay: ₹{project.financial_outlay.toLocaleString()}
                      </p>
                    )}
                  </Card>
                ))}
              </ContentSection>
            )}
          </div>
        );

      case 'outreach':
        return (
          <div className="space-y-6">
            {activeSubTab === 'events' && (
              <ContentSection title="Events Organized" icon={CalendarRange}>
                {data.organizedEvents.map((event, index) => (
                  <Card key={index}>
                    <h4 className="font-medium text-lg text-blue-900">{event.name}</h4>
                    <p className="text-gray-700 mt-1">Role: {event.role}</p>
                    <p className="text-gray-700">Venue: {event.venue}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <CalendarRange className="w-4 h-4" />
                      <span>{new Date(event.start_date).toLocaleDateString()}</span>
                    </div>
                  </Card>
                ))}
              </ContentSection>
            )}

            {activeSubTab === 'visits' && (
              <ContentSection title="International Visits" icon={GlobeIcon}>
                {data.visits.map((visit, index) => (
                  <Card key={index}>
                    <h4 className="font-medium text-lg text-blue-900">{visit.country}</h4>
                    <p className="text-gray-700 mt-1">
                      <Map className="w-4 h-4 inline mr-2" />
                      {visit.place}
                    </p>
                    <p className="text-gray-700 mt-1">{visit.purpose}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <CalendarRange className="w-4 h-4" />
                      <span>
                        {new Date(visit.start_date).toLocaleDateString()} - {
                          new Date(visit.end_date).toLocaleDateString()
                        }
                      </span>
                    </div>
                  </Card>
                ))}
              </ContentSection>
            )}
            {activeSubTab === 'conferences' && (
              <ContentSection title="Conferences Organised" icon={CalendarRange}>
                {data.organizedConferences.map((conf, index) => (
                  <Card key={index}>
                    <h4 className="font-medium">{conf.name}</h4>
                    <p className="text-sm text-gray-600">{conf.role}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <CalendarRange className="w-4 h-4" />
                      <span>
                        {new Date(conf.start_date).toLocaleDateString()
                        }
                      </span>
                    </div>
                    <p className="text-gray-700 mt-1">
                      <Map className="w-4 h-4 inline mr-2" />
                      {conf.venue}
                    </p>
                  </Card>
                ))}
              </ContentSection>
            )}
            {activeSubTab === 'lectures' && (
              <ContentSection title="Expert Lectures" icon={Presentation}>
                {data.expertLectures.map((lecture, index) => (
                  <Card key={index}>
                    <h4 className="font-medium text-lg text-blue-900">{lecture.title}</h4>
                    <p className="text-gray-700 mt-1">Type: {lecture.l_type}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <CalendarRange className="w-4 h-4" />
                      <span>{new Date(lecture.l_date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-gray-700 mt-1">
                      <Map className="w-4 h-4 inline mr-2" />
                      {lecture.place}
                    </p>
                  </Card>
                ))}
              </ContentSection>
            )}
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-6">
            {activeSubTab === 'awards' && (
              <ContentSection title="Awards & Achievements" icon={Trophy}>
                {data.honors
                  .filter(ach => ach.a_type === 'Award')
                  .map((honor, index) => (
                    <Card key={index}>
                      <h4 className="font-medium text-lg text-blue-900">{honor.title}</h4>
                      <p className="text-gray-700 mt-1">{honor.description}</p>
                      <div className="flex items-center gap-2 mt-2 text-gray-500">
                        <CalendarRange className="w-4 h-4" />
                        <span>{honor.period}</span>
                      </div>
                    </Card>
                  ))}
              </ContentSection>
            )}

            {activeSubTab === 'recognition' && (
              <ContentSection title="Recognition" icon={Award}>
                {data.achievements
                  .filter(ach => ach.a_type === 'Publication')
                  .map((achievement, index) => (
                    <Card key={index}>
                      <p className="text-gray-700 mt-1">{achievement.a_type}</p>
                      <h4 className="font-medium text-lg text-blue-900">{achievement.details}</h4>
                      <div className="flex items-center gap-2 mt-2 text-gray-500">
                        <CalendarRange className="w-4 h-4" />
                        <span>{achievement.a_year}</span>
                      </div>
                    </Card>
                  ))}
              </ContentSection>
            )}
          </div>
        );

        default:
          return null;
      }
    };
  
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <BackgroundPattern />
      <PageHeader 
        breadCrumbs={[
          { crumb: "Faculties", link: "/employee" },
          { crumb: `${basicInfo.first_name} ${basicInfo.last_name}`, link: "#" }
        ]} 
        title="Faculties"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Sidebar with enhanced styling */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-8  top-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent rounded-xl" />
                <div className="flex flex-col items-center relative">
                  <div className="w-32 h-32 border-4 border-white shadow-lg overflow-hidden mb-4">
                    <img
                      src={basicInfo.profile_picture || '/api/placeholder/150/150'}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-xl font-medium text-center">
                    {basicInfo.first_name} {basicInfo.last_name}
                  </h1>
                  <p className="text-gray-600 mb-4">{basicInfo.designation}</p>
                  <div className="w-16 h-1 bg-blue-500 rounded-full mb-6" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">{basicInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">{basicInfo.contact}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600">{basicInfo.department}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                    Download CV
                  </a>
                </div>
              </div>
  
              <SocialLinks linkedin={basicInfo.linkedin} github={basicInfo.github} />
            </div>
          </div>

          {/* Main content area with enhanced styling */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm">
            <div className="border-b">
                  <div className="flex overflow-x-auto">
                    {tabs.map((tab) => (
                      <TabButton
                        key={tab.id}
                        active={activeTab === tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setActiveSubTab(getSubTabs()[0]?.id);
                        }}
                        icon={tab.icon}
                      >
                        {tab.label}
                      </TabButton>
                    ))}
                  </div>
                </div>
  
                {/* Sub Navigation */}
                {getSubTabs().length > 0 && (
                  <div className="p-4 border-b bg-gray-50">
                    <div className="flex gap-2">
                      {getSubTabs().map((subTab) => (
                        <SubTabButton
                          key={subTab.id}
                          active={activeSubTab === subTab.id}
                          onClick={() => setActiveSubTab(subTab.id)}
                        >
                          {subTab.label}
                        </SubTabButton>
                      ))}
                    </div>
                  </div>
                )}
  
                {/* Content Area */}
                <div className="p-6">
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;