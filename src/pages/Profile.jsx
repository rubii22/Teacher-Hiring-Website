import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const teachers = [
  { id: 1, name: "John Doe", bio: "Experienced Math Teacher", rate: "$40/hr", image: "/teacher.jpg" },
  { id: 2, name: "Jane Smith", bio: "Expert Science Teacher", rate: "$50/hr", image: "/sci-teacher.png" },
  { id: 3, name: "Mark Lee", bio: "Qualified English Teacher", rate: "$35/hr", image: "/eng-teacher.png" },
];

function Profile() {
  const { id } = useParams();
  const teacher = teachers.find((t) => t.id === parseInt(id));
  const navigate = useNavigate();

  if (!teacher) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-700">
        <p>Teacher not found!</p>
        <button
          onClick={() => navigate("/")}
          className="ml-4 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-6 text-center transform transition-transform hover:scale-105 hover:shadow-3xl animate-fade-in-up">
        {/* Teacher Image */}
        <img
          src={teacher.image}
          alt={`${teacher.name}'s profile`}
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-sky-300 object-cover"
        />

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-sky-700 bg-sky-100 rounded-lg inline-block px-4 py-2 mb-4 hover:bg-sky-200 hover:text-sky-800 transition-all">
          {teacher.name}'s Profile
        </h1>

        {/* Teacher Bio */}
        <p className="text-lg text-gray-700 mb-4 hover:text-gray-900 transition-all">
          {teacher.bio}
        </p>
        <p className="text-xl text-gray-900 font-semibold mb-6">
          Rate: <span className="text-sky-600 hover:text-sky-800 transition-all">{teacher.rate}</span>
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/confirmation")}
            className="bg-sky-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-sky-600 transition-transform transform hover:scale-110"
          >
            Hire
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-transform transform hover:scale-110"
          >
            Back to Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
