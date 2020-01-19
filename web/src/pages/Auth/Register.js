import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Link from '../../components/Link';
import InputField from './components/InputField';

import { Wrapper, Form, Logo, Title, Button } from './styles';

import logo from '../../assets/images/logo.png';

import api from '../../services/api';

const Register = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await api.post('/users', {
        name,
        username,
        email,
        password
      });
    } catch ({ response }) {
      response.status === 422 && setErrors(response.data.errors);
    }

    const {
      data: { token }
    } = await api.post('/auth/login', { email, password });

    localStorage.setItem('token', token);

    history.push('/');
  };

  return (
    <Wrapper>
      <Logo src={logo} />

      <Form onSubmit={onSubmit}>
        <Title>Criar uma conta</Title>

        <InputField
          type="text"
          value={name}
          placeholder="Seu nome"
          onChange={e => setName(e.target.value)}
          error={errors.name}
        />
        <InputField
          type="text"
          value={username}
          placeholder="Seu nome de usuário"
          onChange={e => setUsername(e.target.value)}
          error={errors.username}
        />
        <InputField
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
          error={errors.email}
        />
        <InputField
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
          error={errors.password}
        />

        <Button type="submit">Criar uma conta</Button>
      </Form>

      <Link to="/login">Você já possui uma conta?</Link>
    </Wrapper>
  );
};

export default Register;
