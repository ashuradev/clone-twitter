import React from 'react';

import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import Menu from '../../components/Menu';

import { Content } from './styles';

const PrivateLayout = ({ children }) => (
  <Container>
    <Menu />
    <Content>{children}</Content>
    <Sidebar />
  </Container>
);

export default PrivateLayout;
