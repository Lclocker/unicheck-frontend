import React from 'react';
import { useNavigate } from 'react-router-dom';
//import Button from "../../components/Button";
import Navbar from '../../components/Navbar';
import useAuth from '../../hooks/useAuth';
import * as C from './styles';
import { Divider, List, Typography, Button } from 'antd';

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const data = ['ETE', 'Jrbas', 'Frei Caneca'];

  return (
    <C.Container>
      <Navbar />
      <C.Title>Unicheck</C.Title>
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
              onClick={() => {navigate('/menu')}}
            >
              {item}
            </Button>
          </List.Item>
        )}
      />
    </C.Container>
  );
};

export default Home;
