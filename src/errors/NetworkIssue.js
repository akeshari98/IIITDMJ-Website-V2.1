import React from "react";
import { 
  Wifi, 
  WifiOff, 
  RefreshCw 
} from 'lucide-react';
function NetworkIssue() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-lg w-full p-8 text-center">
        <div className="flex justify-center mb-6">
          <WifiOff 
            className="text-red-500" 
            size={80} 
            strokeWidth={1.5}
          />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Connection Lost in the Digital Wilderness
        </h1>
        
        <p className="text-gray-600 mb-6">
          Oops! It seems like your device has temporarily lost its way in the network landscape. 
          This could be due to unstable internet, server issues, or a momentary digital hiccup.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={handleRetry}
            className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-300"
          >
            <RefreshCw className="mr-2" /> Retry Connection
          </button>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <Wifi className="mx-auto mb-2 text-gray-500" size={24} />
              <p className="text-xs text-gray-600 text-center">Check Your Network</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <RefreshCw className="mx-auto mb-2 text-gray-500" size={24} />
              <p className="text-xs text-gray-600 text-center">Reload Page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkIssue;
