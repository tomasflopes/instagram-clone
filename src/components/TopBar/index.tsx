import React from 'react';

import {
  Container,
  Logo,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  Icons,
  HomeIcon,
  MessagesIcon,
  ExploreIcon,
  NotificationsIcon,
  Avatar,
} from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <Logo />
      <SearchWrapper>
        <SearchIcon />
        <SearchInput placeholder='Search' />
      </SearchWrapper>

      <Icons>
        <HomeIcon className='active' />
        <MessagesIcon />
        <ExploreIcon />
        <NotificationsIcon />
        <Avatar />
      </Icons>
    </Container>
  );
};

export default TopBar;
