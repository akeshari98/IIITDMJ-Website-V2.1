import React, { useState } from 'react';
import { AlertTriangle, Mail, Home } from 'lucide-react';
import { FaOldRepublic } from 'react-icons/fa';

const ErrorFallbackPage = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSendEmail = () => {
    // Construct mailto link with pre-filled details
    const errorCode = `ERR-UNEXPECTED-${Math.floor(Math.random() * 10000)}`;
    const subject = encodeURIComponent(`Website Error Report - ${errorCode}`);
    const body = encodeURIComponent(`Error Details:
- Error Code: ${errorCode}
- User Message: ${userMessage}

Additional Context:
- Page URL: ${window.location.href}
- Browser: ${navigator.userAgent}

Please investigate this unexpected error.`);

    // Opens default email client
    window.location.href = `mailto:tabish@iiitdmj.ac.in?subject=${subject}&body=${body}`;
    
    // Set message sent state
    setMessageSent(true);
  };

  const handleGoBack = () => {
    window.location.href = '/';
  };

  const playRandomGame = () => {
    // In a real app, you'd have a list of games or redirect to a games section
    alert('Redirecting to a fun game to help you relax!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-lg w-full p-8 text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle 
            className="text-red-500" 
            size={80} 
            strokeWidth={1.5}
          />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Something Went Wrong
        </h1>
        
        <p className="text-gray-600 mb-6">
          We're experiencing an unexpected exceptional error. 
          Please report about this error using the message box here, it will redirect you to your mail client.
        </p>
        
        <div className="space-y-4">
          <textarea 
            rows={4}
            placeholder="Please describe what you were doing when the error occurred (optional)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 transition duration-300"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          
          {!messageSent ? (
            <button 
              onClick={handleSendEmail}
              className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-300"
            >
              <Mail className="mr-2" /> Send Error Report
            </button>
          ) : (
            <div className="bg-green-100 text-green-800 py-3 rounded-lg">
              Error report ready to send. Check your email client!
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={handleGoBack}
              className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg transition duration-300"
            >
              <Home className="mr-2" /> Go Home
            </button>
            
            <a 
              href="https://www.iiitdmj.ac.in/"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition duration-300"
            >
              <FaOldRepublic className="mr-2" /> Old Website
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-xs text-gray-500">
          {messageSent ? 'Report prepared. Click Send in your email client.' : 'Error reported confidentially'}
        </div>
      </div>
    </div>
  );
};

export default ErrorFallbackPage;