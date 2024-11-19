import React from "react";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-white to-green-100">
      <div className="p-8 text-center bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          🎉 Teacher Successfully Hired! 🎉
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          You can now contact the teacher for further arrangements.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 focus:ring-2 focus:ring-green-300 transition-transform transform hover:scale-110"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
