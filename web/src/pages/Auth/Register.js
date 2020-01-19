import React, { useState } from 'react';

import Link from '../../components/Link';

import { Wrapper, Logo, Title, Button, Input } from './styles';

import logo from '../../assets/images/logo.png';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Logo src={logo} />

      <form onSubmit={onSubmit}>
        <Title>Criar uma conta</Title>

        <Input
          type="text"
          value={name}
          placeholder="Seu nome"
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="text"
          value={username}
          placeholder="Seu nome de usuário"
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
        />

        <Button type="submit">Criar uma conta</Button>
      </form>

      <Link to="/login">Você já possui uma conta?</Link>
    </Wrapper>
  );
};

export default Register;
