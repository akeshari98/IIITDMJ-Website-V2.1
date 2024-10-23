import React from 'react';
const splitEmailString = (email) => {
  return email.split(',').map(item => item.trim()); // Trims any extra spaces
};
const InfoDiv = ({ first_name,last_name, role, email, address }) => {
  const emailArray = email ? splitEmailString(email) : [];
  return (
    <div className="">
      <div className="w-full mb-2">
        {first_name && <p className="font-semibold break-words -mb-1">{first_name} {last_name}</p>} {/* Reduced bottom margin */}
        {role && <p className="text-gray-400 font-semibold break-words -mb-1">{role}</p>} {/* Reduced bottom margin */}
        {address && <p className="text-gray-600 break-words -mb-1">{address}</p>}
        {email && emailArray.length > 0 && (
          <div className="text-gray-600">
            {emailArray.map((item, index) => (
              <div key={index} className="break-words">
                <a href={`mailto:${item}`} className="no-underline text-blue-500">
                  {item}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoDiv;
