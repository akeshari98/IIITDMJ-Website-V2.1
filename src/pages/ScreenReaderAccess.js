import React from 'react';
import { 
  Monitor, 
  Accessibility, 
  Globe, 
  Cpu, 
  ExternalLink
} from 'lucide-react';

const ScreenReaderInfo = () => {
  const screenReaderData = [
    {
      name: 'Non Visual Desktop Access (NVDA)',
      website: 'http://www.nvda-project.org/',
      type: 'Free'
    },
    {
      name: 'System Access To Go',
      website: 'http://www.satogo.com/',
      type: 'Free'
    },
    {
      name: 'Hal',
      website: 'http://www.yourdolphin.co.uk/productdetail.asp?id=5',
      type: 'Commercial'
    },
    {
      name: 'JAWS',
      website: 'http://www.freedomscientific.com/jaws-hq.asp',
      type: 'Commercial'
    },
    {
      name: 'Supernova',
      website: 'http://www.yourdolphin.co.uk/productdetail.asp?id=1',
      type: 'Commercial'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-12">
      <div className="flex items-center mb-4">
        <Monitor size={24} className="mr-2 text-blue-500" />
        <h2 className="text-2xl font-bold">Screen Reader Access</h2>
      </div>
      <p className="mb-4">IIITDMJ's new website has complete screen reader support with all texts labeled for physically challenged kinds.</p>
      <div className="flex items-center mb-4">
        <Accessibility size={24} className="mr-2 text-blue-500" />
        <h3 className="text-xl font-bold">Screen Reader Information</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2 text-left">Screen Reader</th>
              <th className="px-4 py-2 text-left">Website</th>
              <th className="px-4 py-2 text-left">Free / Commercial</th>
            </tr>
          </thead>
          <tbody>
            {screenReaderData.map((reader, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                <td className="px-4 py-2 flex items-center">
                  <Cpu size={16} className="mr-2 text-blue-500" />
                  {reader.name}
                </td>
                <td className="px-4 py-2 ">
                  <a href={reader.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex item-center align-center">
                  <Globe size={16} className="mr-2 text-blue-500" />
                    {reader.website}
                    {/* <ExternalLink size={12} className="ml-1" /> */}
                  </a>
                </td>
                <td className="px-4 py-2 ">
                  <span className={`px-2 py-1 rounded-full ${reader.type === 'Free' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                    {reader.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScreenReaderInfo;