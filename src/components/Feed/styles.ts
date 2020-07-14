import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(620px, 100%);
`;

export const Stories = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  margin-top: 20px;
  flex-wrap: nowrap;
  overflow-y: auto;

  border-radius: 3px;

  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  background: var(--secondary);

  border: 1px solid var(--gray);

  padding: 10px 5px;

  width: 100%;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  margin-left: 6px;

  > span {
    color: var(--white);
    font-size: 14px;
    margin-top: 3px;
    width: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--content);
  border: 2px solid #f555a2;

  flex-shrink: 0;
`;
