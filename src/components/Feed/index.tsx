import React from 'react';

import { Container, Stories, User, Avatar } from './styles';

import Publication from '../Publication';

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

      <Publication />
      <Publication />
      <Publication />
      <Publication />
    </Container>
  );
};

export default Feed;
