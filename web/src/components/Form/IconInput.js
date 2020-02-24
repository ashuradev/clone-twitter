import React from 'react';
import styled from 'styled-components';

import InputGroup from './InputGroup';
import InputBase from './InputBase';

const Wrapper = styled(InputGroup)`
  background-color: rgb(37, 51, 65);
  border-radius: 20px;
`;

const Input = styled(InputBase)`
  border-radius: 0;
  background: transparent;
  padding-left: 52px;
`;

const InputIcon = styled.div`
  position: absolute;
  top: 11.5px;
  left: 23px;
`;

const IconInput = ({ icon: Icon, ...otherProps }) => (
  <Wrapper>
    <InputIcon>
      <Icon />
    </InputIcon>
    <Input {...otherProps} />
  </Wrapper>
);

export default IconInput;
