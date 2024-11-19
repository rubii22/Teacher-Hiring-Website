import React from "react";
import { Link } from "react-router-dom";

function TeacherCard({ teacher }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="p-6 flex flex-col items-center">
        {/* Teacher Image */}
        <img
          src={teacher.image}
          alt={`${teacher.name}`}
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-300"
        />
        
        {/* Teacher Name */}
        <h2 className="text-2xl font-extrabold text-blue-600 mb-2">
          {teacher.name}
        </h2>
        
        {/* Subject */}
        <p className="text-gray-700 text-lg">{teacher.subject}</p>
        
        {/* Rating */}
        <div className="mt-3 text-yellow-400 flex justify-center items-center">
          {"\u2B50".repeat(Math.floor(teacher.rating))}
          <span className="text-gray-600 ml-2">
            ({teacher.rating.toFixed(1)})
          </span>
        </div>

        {/* View Profile Button */}
        <Link to={`/profile/${teacher.id}`}>
          <button className="mt-5 w-full bg-blue-500 text-white font-medium px-5 py-2 rounded-full shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition-all">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TeacherCard;
