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
            <span>Followed by kkkxdhd + 75 more</span>
          </UserInformation>
          <FollowButton>Follow</FollowButton>
        </SuggestedUser>
        <SuggestedUser>
          <UserAvatar />
          <UserInformation>
            <strong>tomas050302</strong>
            <span>Followed by kkkxdhd + 75 more</span>
          </UserInformation>
          <FollowButton>Follow</FollowButton>
        </SuggestedUser>
        <SuggestedUser>
          <UserAvatar />
          <UserInformation>
            <strong>tomas050302</strong>
            <span>Followed by kkkxdhd + 75 more</span>
          </UserInformation>
          <FollowButton>Follow</FollowButton>
        </SuggestedUser>
        <SuggestedUser>
          <UserAvatar />
          <UserInformation>
            <strong>tomas050302</strong>
            <span>Followed by kkkxdhd + 75 more</span>
          </UserInformation>
          <FollowButton>Follow</FollowButton>
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
        <span>Terms</span>
        <Dot />
        <span>Location</span>
        <Dot />
        <span>Hashtags</span>
        <Dot />
        <span>Top Accounts</span>
        <Dot />
        <span>Language</span>
      </Links>

      <Copyright>© 2020 INSTAGRAM FROM FACEBOOK</Copyright>
    </Container>
  );
};

export default SideBar;
