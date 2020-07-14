import React from 'react';

import {
  Container,
  UserInfo,
  Avatar,
  UserData,
  Suggestions,
  Header,
  SuggestedUser,
  UserAvatar,
  UserInformation,
  FollowButton,
  Links,
  Dot,
  Copyright,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <UserInfo>
        <Avatar />
        <UserData>
          <strong>tomas.lopes18</strong>
          <span>Tomás Lopes</span>
        </UserData>
      </UserInfo>

      <Suggestions>
        <Header>
          <strong>Suggestions For You</strong>
          <span>See All</span>
        </Header>
        <SuggestedUser>
          <UserAvatar />
          <UserInformation>
            <strong>tomas050302</strong>
            <span>Followed by tomas.lopes18 + 75 more</span>
          </UserInformation>
          <FollowButton placeholder='Follow' />
        </SuggestedUser>
      </Suggestions>

      <Links>
        <span>About</span>
        <Dot />
        <span>Help</span>
        <Dot />
        <span>API</span>
        <Dot />
        <span>Privacy</span>
        <Dot />
      </Links>

      <Copyright>© 2020 INSTAGRAM FROM FACEBOOK</Copyright>
    </Container>
  );
};

export default SideBar;
