import React from 'react';

const InfoDiv = ({ name, designation, mail,address }) => {
  return (
    <div className="">
      <div className="w-full mb-2"> {/* Reduced top margin */}
        {name && <p className="font-semibold break-words -mb-1">{name}</p>} {/* Reduced bottom margin */}
        {designation && <p className="text-gray-400 font-semibold break-words -mb-1">{designation}</p>} {/* Reduced bottom margin */}
        {address && <p className="text-gray-600 break-words -mb-1">{address}</p>}
        {mail && (
          <div className="text-gray-600">
            {mail.map((item, index) => (
              <a href="" className=" no-underline text-blue-500 break-words" key={index}>{item}</a> 
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoDiv;
