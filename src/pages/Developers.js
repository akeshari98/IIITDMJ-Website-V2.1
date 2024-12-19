import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Calendar, 
  Code2, 
  ExternalLink,
  Users
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const TeamMember = ({ member }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <div className="relative group">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium
          ${member.type === 'Mentor' ? 'bg-purple-100 text-purple-700' :
            member.type === 'Maintainer' ? 'bg-blue-100 text-blue-700' :
            'bg-green-100 text-green-700'}`}>
          {member.type}
        </span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Mail className="h-4 w-4" />
        <a href={`mailto:${member.email}`} className="hover:text-gray-900 transition-colors">
          {member.email}
        </a>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Calendar className="h-4 w-4" />
        <span>{member.duration}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Code2 className="h-4 w-4" />
        <span>{member.contribution}</span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex gap-3">
          {member.socials.github && (
            <a href={member.socials.github} className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="h-5 w-5" />
            </a>
          )}
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.socials.twitter && (
            <a href={member.socials.twitter} className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
        <a 
          href={member.profileUrl} 
          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
        >
          View Profile
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);

const TeamsPage = () => {
  const teamData = {
    mentor: {
      name: "Dr. Sarah Wilson",
      role: "Project Lead & Senior Researcher",
      type: "Mentor",
      email: "sarah.wilson@institute.edu",
      duration: "2020 - Present",
      contribution: "Project Oversight & Architecture",
      image: "/api/placeholder/400/400",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      },
      profileUrl: "/profile/sarah-wilson"
    },
    maintainer: {
      name: "Alex Chen",
      role: "Lead Developer",
      type: "Maintainer",
      email: "alex.chen@institute.edu",
      duration: "2021 - Present",
      contribution: "Core System Development",
      image: "/api/placeholder/400/400",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      profileUrl: "/profile/alex-chen"
    },
    developers: [
      {
        name: "Maya Patel",
        role: "Frontend Developer",
        type: "Developer",
        email: "maya.patel@institute.edu",
        duration: "2022 - Present",
        contribution: "UI/UX Implementation",
        image: "/api/placeholder/400/400",
        socials: {
          github: "https://github.com",
          linkedin: "https://linkedin.com",
          twitter: "https://twitter.com"
        },
        profileUrl: "/profile/maya-patel"
      },
      {
        name: "James Rodriguez",
        role: "Backend Developer",
        type: "Developer",
        email: "james.r@institute.edu",
        duration: "2022 - Present",
        contribution: "API Development",
        image: "/api/placeholder/400/400",
        socials: {
          github: "https://github.com",
          linkedin: "https://linkedin.com"
        },
        profileUrl: "/profile/james-rodriguez"
      },
      {
        name: "Lisa Kim",
        role: "Full Stack Developer",
        type: "Developer",
        email: "lisa.kim@institute.edu",
        duration: "2023 - Present",
        contribution: "Feature Integration",
        image: "/api/placeholder/400/400",
        socials: {
          github: "https://github.com",
          linkedin: "https://linkedin.com"
        },
        profileUrl: "/profile/lisa-kim"
      }
    ]
  };
  const crumbs = [{crumb: "Team Of Developers", link:"#"}]
  return (
    <div className="min-h-screen bg-gray-50 py-16">
        <PageHeader breadCrumbs={crumbs} title={"Team Of Developers"}/>
      <div className="container mx-auto px-4">
        

        {/* Mentor Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Project Mentor</h2>
          </div>
          <div className="max-w-lg">
            <TeamMember member={teamData.mentor} />
          </div>
        </div>

        {/* Maintainer Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Project Maintainer</h2>
          </div>
          <div className="max-w-lg">
            <TeamMember member={teamData.maintainer} />
          </div>
        </div>

        {/* Developers Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Development Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.developers.map((developer) => (
              <TeamMember key={developer.email} member={developer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;