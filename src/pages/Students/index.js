import React from 'react';
import Navbar from '../../components/Navbar';
import { Avatar, List, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: 'Lucas Miguel',
    },
    {
      title: 'Marco Antonio',
    },
    {
      title: 'Isaac Joas',
    },
    {
      title: 'Camila souza',
    },
    {
      title: 'Fulaninho Silva',
    },
  ];

  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        gap: '20px',
      }}>
      <Navbar />
      <h2>ESTUDANTES</h2>
      <List
        itemLayout="horizontal"
        bordered
        dataSource={data}
        renderItem={(item) => (
          <>
            <List.Item 
              style={{ 
                display: 'flex',
                width: '300px', 
                marginBottom: '-10px', 
                alignItems: 'center',
              }}
            >
              <List.Item.Meta 
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<span>{item.title}</span>}
                style={{ width: '100%' }}
              />
            </List.Item>
            <Divider />
          </>
        )}
      />
    </div>
  );
};

export default Students;
