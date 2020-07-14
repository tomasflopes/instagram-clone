import styled, { css } from 'styled-components';

import { Heart, Comment, Message, Bookmark } from '../../styles/Icons';

const iconCSS = css`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  color: var(--gray);
`;

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;

  background: var(--gray);
`;

export const Stories = styled.div``;

export const User = styled.div``;

export const Avatar = styled.div``;

export const Publication = styled.div``;

export const UserInfo = styled.div``;

export const UserData = styled.div``;

export const Dots = styled.div``;

export const Photo = styled.div``;

export const InteractionArea = styled.div``;

export const UserAvatar = styled.div``;

export const InteractionIcons = styled.div``;

export const LikeIcon = styled(Heart)`
  ${iconCSS}
`;

export const CommentIcon = styled(Comment)`
  ${iconCSS}
`;

export const MessageIcon = styled(Message)`
  ${iconCSS}
`;

export const SaveIcon = styled(Bookmark)`
  ${iconCSS}
`;

export const TimeStamp = styled.div``;

export const CommentArea = styled.div``;

export const PostButton = styled.div``;
