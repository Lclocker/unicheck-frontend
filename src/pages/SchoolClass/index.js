import React from 'react';
import Navbar from '../../components/Navbar';

const SchoolClass = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h1>School Class Page</h1>
      </div>
    </>
  );
};

export default SchoolClass;
