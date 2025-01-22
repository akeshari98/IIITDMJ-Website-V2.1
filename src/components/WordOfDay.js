import React, { useState } from 'react';
import { ChevronDown, Volume2, Share2, BookMarked } from 'lucide-react';

const WordOfDay = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const wordsList = [
    {
      term: "Approval",
      hindi: "अनुमोदन",
      transliteration: "Anumodan",
      type: "noun",
      definition: "The action of officially agreeing to something or accepting something as satisfactory",
      example: "The project needs management approval",
      usage: "परियोजना को प्रबंधन के अनुमोदन की आवश्यकता है"
    }
    // ... rest of the words list
  ];

  const getWordOfDay = () => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return wordsList[dayOfYear % wordsList.length];
  };

  const word = getWordOfDay();

  return (
    <div className="w-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-2xl border border-slate-100 ">
      <div className="p-6">
        {/* Header - Always Visible */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BookMarked className="h-5 w-5 text-purple-500" />
            <span className="text-sm font-small text-purple-500">Word of the Day</span>
          </div>
          <button className="p-2 text-slate-400 hover:text-purple-500 transition-colors rounded-full hover:bg-purple-50">
            <Share2 className="h-4 w-4" />
          </button>
        </div>

        {/* Main Word Display - Always Visible */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            {word.term}
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-l text-slate-600">
              {word.hindi}
            </span>
            <span className="text-sm text-slate-500">
              ({word.transliteration})
            </span>
            <button className="p-1 rounded-full text-slate-400 hover:text-purple-500 transition-colors">
              <Volume2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-2 text-sm text-slate-500 hover:text-purple-500 transition-colors"
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
            <div>
              <div className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium px-2.5 py-1 rounded-full">
                {word.type}
              </div>
            </div>

            <div>
              <p className="text-slate-700 leading-relaxed">
                {word.definition}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-slate-500 text-sm italic border-l-2 border-purple-200 pl-4">
                English: "{word.example}"
              </p>
              <p className="text-slate-500 text-sm italic border-l-2 border-purple-200 pl-4">
                Hindi: "{word.usage}"
              </p>
            </div>

            <div className="text-xs text-slate-400">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordOfDay;