import React from 'react';

import Sidebar from '../../components/Sidebar';
import Menu from '../../components/Menu';

import { Content, Container } from './styles';

const PrivateLayout = ({ children }) => (
  <Container>
    <Menu />
    <Content>{children}</Content>
    <Sidebar />
  </Container>
);

export default PrivateLayout;
