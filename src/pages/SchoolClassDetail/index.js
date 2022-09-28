import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Table } from 'antd';
import { useParams } from 'react-router-dom';

const SchoolClassDetail = () => {
  const { id } = useParams();

  console.log('id', id);

  const columns = [
    {
      title: 'Estudante',
      dataIndex: 'estudante',
      key: 'estudent',
    },
    {
      title: 'Av1',
      dataIndex: 'av1',
      key: 'av1',
      align: 'center'
    },
    {
      title: 'Av2',
      dataIndex: 'av2',
      key: 'av2',
      align: 'center'
    },
    {
      title: 'Media',
      dataIndex: 'media',
      key: 'media',
      align: 'center'
    },
    {
      title: 'Media Final',
      dataIndex: 'mediaF',
      key: 'mediaF',
      align: 'center'
    },
    {
      title: 'Faltas',
      dataIndex: 'faltas',
      key: 'faltas',
      align: 'center'
    },
  ]

  const data = [
    {
      key: '1',
      estudante: 'Lucas Miguel',
      av1: 10,
      av2: 9,
      media: 9,
      mediaF: 9,
      faltas: 2,
    },
    {
      key: '2',
      estudante: 'Marco Antonio',
      av1: 10,
      av2: 9,
      media: 9,
      mediaF: 9,
      faltas: 2,
    },
    {
      key: '3',
      estudante: 'Isaac Joas',
      av1: 10,
      av2: 9,
      media: 9,
      mediaF: 9,
      faltas: 2,
    },
    {
      key: '4',
      estudante: 'Camila souza',
      av1: 10,
      av2: 9,
      media: 9,
      mediaF: 9,
      faltas: 2,
    },
    {
      key: '5',
      estudante: 'Junior',
      av1: 10,
      av2: 9,
      media: 9,
      mediaF: 9,
      faltas: 2,
    },
    {
      key: '6',
      estudante: 'Miguel Lucas',
      av1: 10,
      av2: 9,
      media: 9,
      mediaF: 9,
      faltas: 2,
    },
    {
      key: '7',
      estudante: 'Leon Rodrigues',
      av1: 10,
      av2: 9,
      media: 9,
      mediaF: 9,
      faltas: 2,
    },
  ]

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
      <h2>MATEMATICA - 3º 2022</h2>
      {
        
        <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'start',
          width: '440px',
        }}
      >
        <span 
          style={{
            fontWeight: 'bold',
          }}
        >{'PROFESSOR(A)'}</span>
        <div>
          <span>Fulaninho da silva</span>
        </div>
      </div>}
      <Table columns={columns} dataSource={data}/>
    </div>
  );
};

export default SchoolClassDetail;
