import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EventForm from '../components/EventForm';
import StudentList from '../components/StudentList';
import { useState } from 'react';

const Home = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (studentData) => {
    setStudents(prev => [...prev, { ...studentData, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🎉 Fest App</h1>
          <p className="text-gray-600">Register students for college events</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <EventForm onAddStudent={addStudent} />
          <StudentList students={students} />
        </div>
      </div>
    </div>
  );
};

export default Home