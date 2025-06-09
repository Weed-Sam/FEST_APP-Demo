import React from 'react'
import StudentCard from './StudentCard';

const StudentList = ({ students }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
        <h2 className="text-2xl font-semibold text-white">
          Registered Students ({students.length})
        </h2>
        <p className="text-green-100 mt-1">View all registered participants</p>
      </div>
      
      <div className="p-6">
        {students.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">📝</div>
            <p className="text-lg font-medium">No students registered yet</p>
            <p className="text-sm">Start by adding your first registration!</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {students.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList