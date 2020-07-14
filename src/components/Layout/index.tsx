import React from 'react';

import { Container } from './styles';

import TopBar from '../TopBar';
import Feed from '../Feed';
// import SideBar from "../SideBar";

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Feed />
      {/* <SideBar /> */}
    </Container>
  );
};

export default Layout;
