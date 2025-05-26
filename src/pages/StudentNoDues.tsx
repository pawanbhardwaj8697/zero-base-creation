
import React from 'react';
import StudentNoDuesForm from '@/components/StudentNoDuesForm';
import Navigation from '@/components/Navigation';

const StudentNoDues = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="py-8 px-4 print:p-0">
        <StudentNoDuesForm />
      </div>
    </div>
  );
};

export default StudentNoDues;
