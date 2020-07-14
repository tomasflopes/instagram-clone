import React from 'react';

import {
  Container,
  UserInfo,
  UserData,
  Dots,
  Dot,
  Photo,
  InteractionArea,
  InteractionIcons,
  UserAvatar,
  LikeIcon,
  CommentIcon,
  MessageIcon,
  SaveIcon,
  TimeStamp,
  CommentArea,
  PostButton,
} from './styles';

const Publication: React.FC = () => {
  return (
    <Container>
      <UserInfo>
        <UserAvatar />
        <UserData>
          <strong>tomas050302</strong>
          <span>Espinho</span>
        </UserData>
        <Dots>
          <Dot />
          <Dot />
          <Dot />
        </Dots>
      </UserInfo>
      <Photo />
      <InteractionArea>
        <InteractionIcons>
          <div>
            <LikeIcon />
            <CommentIcon />
            <MessageIcon />
          </div>
          <SaveIcon />
        </InteractionIcons>
        <span>
          Liked by <strong>tomas050302</strong> and <strong>others</strong>
        </span>
        <span>
          <strong>tomas050302</strong> descrição
        </span>
        <TimeStamp>38 minutes ago</TimeStamp>
      </InteractionArea>
      <CommentArea>
        <span>Add a comment...</span>
        <PostButton>Post</PostButton>
      </CommentArea>
    </Container>
  );
};

export default Publication;
