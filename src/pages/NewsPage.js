import React, { useEffect, useState } from 'react';
import { ExternalLink, Calendar, ChevronRight, Search, SortAsc, SortDesc, ChevronDown, ChevronUp, ImageOff } from 'lucide-react';
import axiosInstance from '../axios';
import newsPlaceHolder from "../resources/images/newsPlaceHolder.png";
import PageHeader from '../components/PageHeader';
const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [expandedCards, setExpandedCards] = useState({});

  // const buildImageUrl = (publicId) => {
  //   const cloudName = "djy2jlthj";
  //   return `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto,w_600/${publicId}`;
  // };
  
  // const getImageUrl = (input) => {
  //   // Regular expression to check if input is a URL
  //   const urlRegex = /^(https?:\/\/)/;
  
  //   // If input matches a URL pattern, return it directly; otherwise, treat it as a public ID
  //   if (urlRegex.test(input)) {
  //     return input; // Input is a full URL
  //   } else {
  //     return buildImageUrl(input); // Input is a public ID
  //   }
  // };
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get('/news/news');
        const newsItems = response.data.map(item => ({
          ...item,
          imagePublicId: item.image_url,
        }));
        setNewsData(newsItems);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredAndSortedNews = newsData
    .filter(news => 
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  const crumbs = [{crumb: "News", link:"#"}]
  return (
       <div>
         <PageHeader breadCrumbs={crumbs} title={"News"}/>
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            
            <button
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              {sortOrder === 'asc' ? (
                <SortAsc className="w-5 h-5 text-gray-600" />
              ) : (
                <SortDesc className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedNews.map((news) => (
            <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={news.imagePublicId ? news.imagePublicId : newsPlaceHolder}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = {newsPlaceHolder};
                  }}
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {news.title}
                </h2>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(news.createdAt)}</span>
                </div>
                
                <div className="relative">
                  <div className={`transition-all duration-300 ${expandedCards[news.id] ? '' : 'max-h-24 overflow-hidden'}`}>
                    <p
                      className="text-sm text-gray-600 mb-4 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: news.excerpt }}
                    />
                  </div>
                  
                  {news.excerpt.length > 150 && (
                    <button
                      onClick={() => toggleExpand(news.id)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 mt-2"
                    >
                      {expandedCards[news.id] ? (
                        <>Show less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>Read more <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    Visit article
                    <ChevronRight className="w-4 h-4 ml-1" />
                    {/* <ExternalLink className="w-4 h-4 ml-1" /> */}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredAndSortedNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No news articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
       </div>
  );
};

export default NewsPage;