import React from 'react';
import { 
  Compass, 
  MapPin, 
  Home, 
} from 'lucide-react';

// 404 Not Found (Wandered Off) Page
const PageNotFoundError = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-lg w-full p-8 text-center">
        <div className="flex justify-center mb-6">
          <Compass 
            className="text-purple-500" 
            size={80} 
            strokeWidth={1.5}
          />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          You've Wandered Off the Beaten Path
        </h1>
        
        <p className="text-gray-600 mb-6">
          Looks like you've discovered a digital wilderness where no webpage exists. 
          The URL you're searching for seems to have gone on an adventure of its own.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={handleGoHome}
            className="w-full flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition duration-300"
          >
            <Home className="mr-2" /> Return to Safety (IIITDMJ Home Page)
          </button>
          
          <div className="text-sm text-gray-500 flex items-center justify-center">
            <MapPin className="mr-2 text-gray-400" size={16} />
            Current Location: Nowhere Land
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageNotFoundError;
