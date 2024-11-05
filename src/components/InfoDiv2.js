import React from 'react';
const splitPhoneNumber = (phone_no) => {
    return phone_no.toString().split('.'); // Splits wherever there is a '.'
  };
const splitEmailString = (email) => {
  return email.split(',').map(item => item.trim()); // Trims any extra spaces
};
const InfoDiv = ({ first_name,last_name, email, phone_no }) => {
  const emailArray = email ? splitEmailString(email) : [];
  const phoneArray = phone_no ? splitPhoneNumber(phone_no) : [];
  return (
    <div className="">
      <div className="w-full -ml-4">
        {first_name && <p className="font-semibold break-words -mb-1">{first_name} {last_name}</p>} {/* Reduced bottom margin */}
        {email && emailArray.length > 0 && (
          <div className="text-gray-600 flex flex-row -mb-1">
            Email-
            {emailArray.map((item, index) => (
              <div key={index} className="break-words">
                <a href={`mailto:${item}`} className="no-underline text-blue-500">
                  {item}
                </a>
              </div>
            ))}
          </div>
        )}
        {phone_no && phoneArray.length > 0 && (
          <div className="text-gray-600 flex flex-row">
            Contact-  
            {phoneArray.map((item, index) => (
              <p key={index} className="break-words">{item}</p> 
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoDiv;
