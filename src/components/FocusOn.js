import React from 'react';
import { Users, GraduationCap, Trophy, UserCircle } from 'lucide-react';
const FocusCard = ({ title, icon: Icon, link }) => (
    <a href={link}>
        <div className="flex-1 min-w-[240px] p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-150 group border border-gray-300">
            <div className="flex flex-col items-center text-center space-y-4 ">
                <div className="p-3 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors">
                    <Icon
                        className="w-8 h-8 text-gray-600 group-hover:text-[#2563EB] transition-colors"
                    />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-[#2563EB] transition-colors">
                    {title}
                </h3>
            </div>
        </div>
    </a>
);
function FocusOn() {
    const focusAreas = [
        { title: 'Research', icon: Users, to: 'https://www.iiitdmj.ac.in/rspc.iiitdmj.ac.in/' },
        { title: 'Placements', icon: GraduationCap, to: 'https://www.iiitdmj.ac.in/placement.iiitdmj.ac.in/' },
        { title: 'NIRF Ranking', icon: Trophy, to: 'https://www.iiitdmj.ac.in/nirf.iiitdmj.ac.in/index.html#res' },
        { title: 'Alumni', icon: UserCircle, to: 'https://alumni.iiitdmj.ac.in/' }
    ];
    return (
        <div className="space-y-8 p-4 flex flex-col item-center">
            <div className="flex items-center justify-between mb-6 max-width-100 ml-auto mr-auto ">
                <div className="flex items-center">
                    <div className="flex flex-col w-full text-left">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                            Focus{" "}
                            <span className="sm:text-3xl text-2xl font-medium title-font" style={{ color: "#2563EB" }}>On</span>
                        </h1>
                        {/* Horizontal line */}
                        <div className="w-19 h-0.5 bg-[#2563EB] my-1"></div>
                    </div>
                </div>
            </div>
            {/* Focus Areas */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {focusAreas.map((area) => (
                        <FocusCard
                            key={area.title}
                            title={area.title}
                            icon={area.icon}
                            link={area.to}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FocusOn