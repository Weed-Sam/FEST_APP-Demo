import React from 'react'

const StudentCard = ({ student }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-purple-300">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg text-gray-800">{student.studentName}</h3>
        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
          {student.year}
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-100 p-1.5 rounded-full">
            <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
          </div>
          <div>
            <p className="text-xs text-gray-500">Event</p>
            <p className="text-sm font-medium text-gray-900">{student.eventName}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="bg-orange-100 p-1.5 rounded-full">
            <div className="h-3 w-3 bg-orange-600 rounded-full"></div>
          </div>
          <div>
            <p className="text-xs text-gray-500">Stream</p>
            <p className="text-sm font-medium text-gray-900">{student.stream}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="bg-green-100 p-1.5 rounded-full">
            <div className="h-3 w-3 bg-green-600 rounded-full"></div>
          </div>
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm font-medium text-gray-900">{student.email}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="bg-purple-100 p-1.5 rounded-full">
            <div className="h-3 w-3 bg-purple-600 rounded-full"></div>
          </div>
          <div>
            <p className="text-xs text-gray-500">Phone</p>
            <p className="text-sm font-medium text-gray-900">{student.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard