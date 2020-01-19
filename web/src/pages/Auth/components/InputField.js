import React from 'react';

import { Input, FormGroup, Error } from '../styles';

const InputField = ({ error, ...rest }) => (
  <FormGroup>
    <Input {...rest} />
    {error && <Error>{error}</Error>}
  </FormGroup>
);

export default InputField;
