import React from 'react';

import Logo from '../../components/Logo';
import Button from '../../components/Form/Button';

const Login = () => {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Logo />

      <form onSubmit>
        <h1>Entrar</h1>

        <Button type="submit">Entrar</Button>
      </form>
    </>
  );
};

export default Login;
