import styled, { css } from 'styled-components';

import { Heart, Comment, Message, Bookmark } from '../../styles/Icons';

const iconCSS = css`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: var(--gray);
`;

export const Container = styled.div`
  display: flex;

  border-radius: 3px;

  margin: 20px 0;

  flex-direction: column;

  border: 1px solid var(--gray);

  background: var(--secondary);
`;

export const UserInfo = styled.div`
  display: flex;
  position: relative;

  padding: 0 15px;

  height: 60px;

  align-items: center;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 8px;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  background: var(--content);
`;

export const Dots = styled.div`
  display: flex;

  position: absolute;
  right: 15px;
`;

export const Dot = styled.div`
  width: 3px;
  height: 3px;

  border-radius: 50%;

  margin-right: 3px;

  background: var(--white);
`;

export const Photo = styled.div`
  width: min(720px, 100%);
  height: 600px;

  background: var(--content);
`;

export const InteractionArea = styled.div`
  display: flex;

  flex-direction: column;

  > span {
    margin-left: 15px;
  }

  > span + span {
    margin-top: 8px;
  }
`;

export const InteractionIcons = styled.div`
  display: flex;
  margin: 10px 0 5px 10px;

  align-items: center;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    width: min(120px, 30%);
  }

  position: relative;
`;

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

  position: absolute;
  right: 20px;
`;

export const TimeStamp = styled.span`
  color: var(--gray);
  letter-spacing: -1px;

  text-transform: uppercase;
  font-size: 13px;

  margin-bottom: 10px;
`;

export const CommentArea = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;

  height: 55px;

  border: 1px solid var(--gray);

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const PostButton = styled.button`
  color: var(--blue);
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;
