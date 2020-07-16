import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  position: sticky;
  top: 0;

  @media (min-width: 1184px) {
    display: flex;
    flex-direction: column;

    margin: 40px 30px;
  }
`;

export const UserInfo = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;

  background: var(--content);
  border-radius: 50%;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 12px;

  > strong {
    font-size: 15px;
    color: var(--white);

    margin-bottom: 2px;
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const Suggestions = styled.div`
  display: flex;

  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  > strong {
    font-size: 15px;
    color: var(--gray);
  }

  > span {
    font-size: 14px;

    color: var(--white);
  }

  margin-bottom: 10px;
`;

export const SuggestedUser = styled.div`
  display: flex;

  align-items: center;

  position: relative;

  & + div {
    margin-top: 5px;
  }
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;

  flex-shrink: 0;

  border-radius: 50%;

  background: var(--content);
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;

  margin-left: 10px;

  > strong {
    color: var(--white);
    margin-bottom: 2px;
  }

  span {
    font-size: 14px;
    color: var(--gray);
    letter-spacing: -1px;
  }
`;

export const FollowButton = styled.div`
  cursor: pointer;
  color: var(--blue);

  font-size: 13px;

  position: absolute;
  right: 0;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 30px;

  align-items: center;

  font-size: 12px;

  > span {
    color: var(--gray);
    cursor: pointer;
    margin-bottom: 5px;
  }
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;

  margin: 0 5px;

  background: var(--gray);

  border-radius: 50%;
`;

export const Copyright = styled.div`
  margin-top: 30px;
  color: var(--gray);
  font-size: 12px;
`;
