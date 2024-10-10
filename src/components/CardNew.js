import React from 'react';

const Card = ({ image, name, designation, address, contact, mail, role }) => {
  return (
    <div className="max-w-[400px] bg-white rounded-lg shadow-lg p-4 transition-transform duration-200 transform hover:scale-105">
      {image && (
        <img 
          src={image} 
          alt={name} 
          className="w-48 h-48 object-cover rounded-md mx-auto"
        />
      )}
      <div className="mt-4">
        {name && <h3 className="text-xl font-bold break-words">{name}</h3>}
        {designation && <p className="text-gray-400 font-bold break-words">{designation}</p>}
        {role && <p className="text-gray-400 font-bold break-words">{role}</p>}
        {address && <p className="text-gray-600 break-words">{address}</p>}

        {contact && (
          <div className="text-gray-600">
            {contact.map((item, index) => (
              <p key={index} className="break-words">{item}</p> 
            ))}
          </div>
        )}

        {mail && (
          <div className="text-gray-600">
            {mail.map((item, index) => (
              <p className="text-blue-500 break-words" key={index}>{item}</p> 
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
