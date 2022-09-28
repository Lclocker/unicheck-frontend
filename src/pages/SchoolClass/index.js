import React from 'react';
import Navbar from '../../components/Navbar';
import { List, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const SchoolClass = () => {
  const navigate = useNavigate();

  const data = [
    'MAtematica', 
    'historia',
    'portugues',
    'sociologia',
    'informatica',
    'geografia'
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        gap: '20px',
      }}
    >
      <Navbar />
      <h2>TURMAS</h2>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Button 
              style={{ 
                height: '40px', 
                width: '300px', 
                marginBottom: '-2px',
                fontSize: '14px',
                cursor: 'pointer',
              }}
              onClick={() => {
                navigate('/schoolClassDetails/1245214');
              }}
            >
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'start',
                  marginLeft: '8px',
                }}>
                <span>{item}</span>
              </div>
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SchoolClass;
