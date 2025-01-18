import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, User } from "lucide-react";
import profile from "../resources/images/admin/profile.jpg";

// Utility functions
const splitPhoneNumber = (phone_no) =>
  phone_no.toString().split(".").filter(Boolean);

const splitEmailString = (email) =>
  email
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

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
  // Process phone and email
  const phoneArray = phone_no ? splitPhoneNumber(phone_no) : [];
  const emailArray = email ? splitEmailString(email) : [];

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group relative h-full">
      <div className="relative h-48 bg-gray-100">
        {/* Profile Picture */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={profile_picture || profile}
            alt={`${first_name} ${last_name}`}
            className="w-40 h-40 object-cover object-top rounded-full border-4 border-white shadow-lg z-2"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 py-4 text-center pb-16">
        <div className="mb-4">
          {first_name && (
            <h3 className="text-xl font-bold text-gray-800 leading-tight">
              {first_name} {last_name}
            </h3>
          )}
          {role && (
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">
              {role}
            </p>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-2 mb-4">
          {address && (
            <div className="flex items-center justify-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2 text-gray-400" />
              <span className="text-sm">{address}</span>
            </div>
          )}

          {phone_no && phoneArray.length > 0 && (
            <div className="flex items-center justify-center text-gray-600">
              <Phone className="h-5 w-5 mr-2 text-gray-400" />
              {phoneArray.map((item, index) => (
                <span key={index} className="text-sm mr-2">
                  {item}
                </span>
              ))}
            </div>
          )}

          {email && emailArray.length > 0 && (
            <div className="flex flex-col items-center justify-center text-gray-600">
              <Mail className="h-5 w-5 mr-2 text-gray-400" />
              {emailArray.map((item, index) => (
                <Link
                  key={index}
                  href={`mailto:${item}`}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Profile View Button */}
      {user_type === "faculty" && (
        <Link
          to={`/profilepage/${id}`}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[80%] block text-center px-4 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 transition-all duration-300 ease-in-out"
        >
          <User className="inline-block w-5 h-5 mr-2" />
          View Full Profile
        </Link>
      )}
    </div>
  );
};

export default Card;