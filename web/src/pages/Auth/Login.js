import React, { useState } from 'react';

import Link from '../../components/Link';

import { Wrapper, Logo, Title, Button, Input } from './styles';

import logo from '../../assets/images/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Logo src={logo} />

      <form onSubmit={onSubmit}>
        <Title>Entrar no Twitter</Title>

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

        <Button type="submit">Entrar</Button>
      </form>

      <Link to="/register">Criar uma conta?</Link>
    </Wrapper>
  );
};

export default Login;
