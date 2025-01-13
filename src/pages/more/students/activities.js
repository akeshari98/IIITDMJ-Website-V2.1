import React from 'react';
import { 
  Users, 
  BookOpen, 
  Globe, 
  Award, 
  Calendar,
  ChevronRight,
  ExternalLink,
  Activity,
  Sparkles,
  PlayCircle
} from 'lucide-react';
import PageHeader from '../../../components/PageHeader';

const StudentActivities = () => {
  const quickLinks = [
    { name: "Gymkhana", href: "/gymkhana", icon: Users },
    { name: "Activities", href: "/activities", icon: Activity },
    { name: "Counselling", href: "/counselling", icon: BookOpen },
    { name: "Hostels", href: "/hostels", icon: Globe },
    { name: "Alumni", href: "https://alumni.iiitdmj.ac.in/", icon: Award },
    { name: "Students Mess", href: "https://www.iiitdmj.ac.in/mess.iiitdmj.ac.in/", icon: Calendar },
    { name: "PHC", href: "/primaryhealthcentre", icon: Activity }
  ];

  const youtubeVideos = [
    "GIhUJZUovRo",
    "wpUAdvtA-i0",
    "_t-xXCdAlqQ",
    "Rmp6gzGxFVk"
  ];
  const crumbs = [{crumb:"Student Activity",link:"#"}]
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <PageHeader  breadCrumbs={crumbs} title={"Student Activity"}/>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-10 pattern-grid"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* <h1 className="text-5xl font-bold mb-6">Student Activities</h1> */}
          <p className="text-xl text-blue-100 max-w-3xl">
            Fostering holistic development through diverse extracurricular activities at IIITDMJ
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="prose text-gray-600">
                  <p>
                    IIITDMJ emphasizes several extra-curricular activities in addition to its rigorous academic programme. 
                    Although the institute is in the growing stage, Football ground, Volleyball court, basketball court 
                    and tennis court are fully functional at the institute premises.
                  </p>
                </div>
                <img
                  src={process.env.REACT_APP_Backend + "/public/WebsiteImages/activities.jpg"}
                  alt="Student Activities"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <a 
                  href="https://www.iiitdmj.ac.in/students/downloads/IHPC_report_2017.pdf"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span>View Report on Heritage and Philosophy Club Activities 2016-17</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </section>

            {/* Japan Collaboration Section */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-800">IIITDMJ-Japan Collaboration</h2>
              </div>
              <div className="prose text-gray-600">
                <p>
                  Participation of students in IIITDMJ - Japan collaboration has reached new heights. 
                  Every year, students visit Japan during winter and summer vacation for a 10-day exposure visit, 
                  exploring leading industries, renowned laboratories, and academic universities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Industry Partners</h3>
                    <ul className="text-sm">
                      <li>AMADA</li>
                      <li>Canon</li>
                      <li>GE Energy</li>
                      <li>MHI</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Academic Partners</h3>
                    <ul className="text-sm">
                      <li>University of Tokyo</li>
                      <li>Tokyo Institute of Technology</li>
                      <li>Chiba University</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Opportunities</h3>
                    <ul className="text-sm">
                      <li>MS Programs</li>
                      <li>Industry Placements</li>
                      <li>6-month Internships</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Annual Festivals Section */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Annual Festivals</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-semibold mb-2">Tarang</h3>
                  <p className="text-purple-100">Cultural Festival</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-semibold mb-2">Abhikalpan</h3>
                  <p className="text-blue-100">Technical Festival</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-semibold mb-2">Gusto</h3>
                  <p className="text-green-100">Sports Festival</p>
                </div>
              </div>
              
              {/* Video Gallery */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <PlayCircle className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Event Highlights</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {youtubeVideos.map((videoId, index) => (
                    <div key={index} className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="w-full h-64 rounded-lg shadow-sm"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`Event Video ${index + 1}`}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6  top-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentActivities;