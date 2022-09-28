import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !firstName | !lastName | !senha) {
      setError('Preencha todos os campos');
      return;
    }

    const res = signup(firstName, lastName, email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert('Usuário cadatrado com sucesso!');
    navigate('/');
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type='firstName'
          placeholder='Nome'
          value={firstName}
          onChange={(e) => [setFirstName(e.target.value), setError('')]}
        />
        <Input
          type='lastName'
          placeholder='Sobrenome'
          value={lastName}
          onChange={(e) => [setLastName(e.target.value), setError('')]}
        />
        <Input
          type='email'
          placeholder='Digite seu E-mail'
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type='password'
          placeholder='Digite sua Senha'
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError('')]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text='Inscrever-se' onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to='/'>&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
