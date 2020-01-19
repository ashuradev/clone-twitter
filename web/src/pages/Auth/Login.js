import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Link from '../../components/Link';
import InputField from './components/InputField';

import { Wrapper, Logo, Title, Button, Form } from './styles';

import logo from '../../assets/images/logo.png';

import api from '../../services/api';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await api.post('/auth/login', {
        email,
        password
      });

      localStorage.setItem('token', data.token);

      history.push('/feed');
    } catch ({ response }) {
      response.status === 401 && setError(response.data.message);
    }
  };

  return (
    <Wrapper>
      <Logo src={logo} />

      <Form onSubmit={onSubmit}>
        <Title>Entrar no Twitter</Title>

        <InputField
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
          error={error}
        />
        <InputField
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
        />

        <Button type="submit">Entrar</Button>
      </Form>

      <Link to="/register">Criar uma conta?</Link>
    </Wrapper>
  );
};

export default Login;
