import React from "react";
import profile from "../resources/images/admin/profile.jpg";
import { Link } from "react-router-dom";
// Function to split phone number by '.' and return an array of strings
const splitPhoneNumber = (phone_no) => {
  return phone_no.toString().split("."); // Splits wherever there is a '.'
};

// Function to split a comma-separated email string into an array of strings
const splitEmailString = (email) => {
  return email.split(",").map((item) => item.trim()); // Trims any extra spaces
};

const Card = ({
  first_name,
  last_name,
  email,
  address,
  phone_no,
  role,
  profile_picture,
  id,
  user_type,
}) => {
  // Initialize variables for phoneArray and emailArray
  const phoneArray = phone_no ? splitPhoneNumber(phone_no) : []; // Only split if phone_no is not null
  const emailArray = email ? splitEmailString(email) : []; // Only split if email is not null
  return (

    <div className="max-w-[400px] bg-white rounded-lg shadow-lg p-4 transition-transform duration-200 transform flex flex-col h-full">
      <img
        src={profile_picture || profile}
        alt={first_name}
        className="w-40 h-40 object-cover object-top rounded-md mx-auto"
      />
      <div className="mt-4 flex-grow">
        {first_name && (
          <h3 className="text-lg font-semibold break-words -mb-1 leading-tight">
            {first_name} {last_name}
          </h3>
        )}
        {role && <p className="text-md text-gray-400 font-semibold break-words">{role}</p>}
        {address && <p className="text-gray-600 break-words">{address}</p>}
        {phone_no && phoneArray.length > 0 && (
          <div className="text-gray-600 mt-1 -mb-1">
            {phoneArray.map((item, index) => (
              <p key={index} className="break-words">
                {item}
              </p>
            ))}
          </div>
        )}
        {email && emailArray.length > 0 && (
          <div className="text-gray-600 ">
            {emailArray.map((item, index) => (
              <div key={index} className="break-words">
                <a
                  href={`mailto:${item}`}
                  className="no-underline text-blue-500 -mb-2"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      {user_type === "faculty" && (
        <div className="mt-auto">
          <Link
            to={`/profilepage/${id}`}
            className="mt-4 bg-gray-700 text-white rounded px-2 py-2 hover:bg-gray-900 transition duration-300 text-center block w-full"
          >
            View Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
