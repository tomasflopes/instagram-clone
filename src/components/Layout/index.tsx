import React from 'react';

import { Container, FeedWrapper } from './styles';

import TopBar from '../TopBar';
import Feed from '../Feed';
import SideBar from '../SideBar';

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <FeedWrapper>
        <Feed />
        <SideBar />
      </FeedWrapper>
    </Container>
  );
};

export default Layout;
