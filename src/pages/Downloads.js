import React, { useEffect, useState } from 'react';
import { Download, ExternalLink, Search } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import axiosInstance from '../axios';
import { Link } from 'react-router-dom';

const quickLinks = [
  { id: 1, title: "Annual Report", link: "/annualreport" },
  { id: 2, title: "Annual Account", link: "/annualaccount" },
  { id: 3, title: "Home", link: "/" }
];

const DownloadsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/downloads/downloads');
      setData(response.data); // Access the data property of the response
    } catch(error) {
      console.error("Error fetching Downloads", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    fetchData()
  },[]);
  const [searchTerm, setSearchTerm] = useState('');
  // console.log(data);
  const filteredDownloads = Array.isArray(data) ? data.map(category => ({
    ...category,
    items: Array.isArray(category.items)?category.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    ) : []
  })).filter(category => category.items.length > 0) : [];
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  const crumbs = [{crumb: "downloads", link:"#"}]
  return (
     <>
      <PageHeader breadCrumbs={crumbs} title={"Downloads"}/>
    <div className="flex min-h-screen bg-gray-50 px-12">
      <main className="flex-1 p-6 ">
         
        <div className="flex flex-col space-y-6">
          {/* <h1 className="text-2xl font-bold text-gray-800">Downloads</h1> */}
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search downloads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>

          <div className="flex flex-col gap-6">
            {filteredDownloads.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-gray-800 mb-3 pb-2 border-b">
                    {category.downloads}
                  </h2>
                  <ul className="space-y-3">
                    {category.items.map((item, index) => (
                      <li key={index}>
                        <a 
                          href={item.url}
                          className="flex items-center justify-between group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="text-gray-600 group-hover:text-blue-500 transition-colors mr-2">
                            {item.title}
                          </span>
                          <Download size={18} className="text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <aside className="w-64 bg-white shadow-sm border-l border-gray-200 p-6 hidden lg:block">
        <h2 className="font-semibold text-gray-800 mb-4">Quick Links</h2>
        <nav>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div></>
  );
};

export default DownloadsPage;