import React from 'react';
import Navbar from '../../components/Navbar';
import { List, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const data = [
    'TURMAS', 
    'ESTUDANTES',
    'PROFESSORES',
  ]

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
      <h2>Unicheck</h2>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Button 
              style={{ 
                height: '50px', 
                width: '300px', 
                border: '2px solid blue',
                borderRadius: '5px', 
                marginBottom: '20px',
                fontSize: '18px',
                cursor: 'pointer',
              }}
              onClick={() => {
                if(item === 'TURMAS'){
                  navigate('/schoolClass');
                } else if (item === 'ESTUDANTES') {
                  navigate('/schoolClass');
                } else {
                  navigate('/schoolClass');
                }
              }}
            >
              {item}
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Menu;
