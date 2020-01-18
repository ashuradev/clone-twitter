import React from 'react';

const Login = () => {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit>
        <h1>Entrar</h1>
      </form>
    </>
  );
};

export default Login;
