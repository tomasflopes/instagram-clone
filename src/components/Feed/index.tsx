import React from 'react';

import {
  Container,
  Stories,
  User,
  Avatar,
  Publication,
  UserInfo,
  UserData,
  Dots,
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

const Feed: React.FC = () => {
  return (
    <Container>
      <Stories>
        <User>
          <Avatar />
          <span>tomas050302</span>
        </User>
        <User>
          <Avatar />
          <span>tomas050302</span>
        </User>
        <User>
          <Avatar />
          <span>tomas050302</span>
        </User>
        <User>
          <Avatar />
          <span>tomas050302</span>
        </User>
        <User>
          <Avatar />
          <span>tomas050302</span>
        </User>
        <User>
          <Avatar />
          <span>tomas050302</span>
        </User>
        <User>
          <Avatar />
          <span>tomas050302</span>
        </User>
        <User>
          <Avatar />
          <span>tomas050302</span>
        </User>
        <User>
          <Avatar />
          <span>tomas050302</span>
        </User>
        <User>
          <Avatar />
          <span>tomas050302</span>
        </User>
        <User>
          <Avatar />
          <span>tomas050302</span>
        </User>
      </Stories>

      <Publication>
        <UserInfo>
          <UserAvatar />
          <UserData>
            <strong>tomas050302</strong>
            <span>Espinho</span>
          </UserData>
          <Dots />
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
      </Publication>
    </Container>
  );
};

export default Feed;
