import React, { useState } from 'react';
import { Sparkles, Share2, Volume2, BookMarked } from 'lucide-react';

const StickyWordOfDay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const word = {
    term: "Serendipity",
    phonetic: "/ˌserənˈdipədi/",
    type: "noun",
    definition: "The occurrence and development of events by chance in a happy or beneficial way",
    example: "The discovery of penicillin was a perfect example of serendipity",
    origin: "1754: coined by Horace Walpole"
  };

  return (
    <div className="relative lg:fixed right-8 top-1/2 -translate-y-1/2 z-50 flex items-center">
      {/* Main Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl p-4 shadow-lg 
          transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
          hover:from-purple-600 hover:to-indigo-700 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      >
        <Sparkles className="h-6 w-6" />
      </button>

      {/* Card */}
      <div className={`absolute right-0 transition-all duration-500 transform 
        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'}`}>
        <div className="w-96 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-2xl border border-slate-100">
          <div className="p-8">
            <button 
              onClick={() => setIsOpen(false)}
              className="float-right text-slate-400 hover:text-slate-600 transition-colors"
            >
              ✕
            </button>
            
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <BookMarked className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium text-purple-500">Word of the Day</span>
            </div>

            {/* Word Section */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                {word.term}
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-500 font-medium">
                  {word.phonetic}
                </span>
                <button 
                  className={`p-2 rounded-full transition-all ${
                    isPlaying 
                      ? 'bg-purple-100 text-purple-600' 
                      : 'text-slate-400 hover:text-purple-500'
                  }`}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Type Badge */}
            <div className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium px-2.5 py-1 rounded-full mb-4">
              {word.type}
            </div>

            {/* Definition */}
            <div className="mb-4">
              <p className="text-slate-700 leading-relaxed">
                {word.definition}
              </p>
            </div>

            {/* Example */}
            <div className="mb-6">
              <p className="text-slate-500 text-sm italic border-l-2 border-purple-200 pl-4">
                "{word.example}"
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-400">
                {word.origin}
              </span>
              <button className="p-2 text-slate-400 hover:text-purple-500 transition-colors rounded-full hover:bg-purple-50">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyWordOfDay;