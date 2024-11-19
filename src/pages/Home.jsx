import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import TeacherCard from "../components/TeacherCard";

const teachers = [
  { id: 1, name: "John Doe", subject: "Math", rating: 4.5, image: "/teacher.jpg" },
  { id: 2, name: "Jane Smith", subject: "Science", rating: 4.8, image: "/sci-teacher.png"  },
  { id: 3, name: "Mark Lee", subject: "English", rating: 4.2, image: "/eng-teacher.png" },
];

function Home() {
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);

  const handleSearch = (query) => {
    const filtered = teachers.filter((teacher) =>
      teacher.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTeachers(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-white to-blue-300 flex flex-col items-center p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-sky-700 drop-shadow-md mb-4">
          Welcome to Teacher Finder
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover the best teachers for your learning needs. Use the search bar below to find the perfect match by name.
        </p>
      </header>

      {/* Search Bar */}
      <div className="w-full max-w-xl mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Teacher Cards Grid */}
      <section className="w-full max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 italic">
              No teachers found. Try searching for another name.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
