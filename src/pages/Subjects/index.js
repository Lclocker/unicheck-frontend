import React from 'react';
import Navbar from '../../components/Navbar';

const Subjects = () => {
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
        <h1>Subjects Page</h1>
      </div>
    </>
  );
};

export default Subjects;
