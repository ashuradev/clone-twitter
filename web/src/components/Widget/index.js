import styled from 'styled-components';

export const Widget = styled.div`
  background-color: rgb(25, 39, 52);
  margin: 25px 0;
  border-radius: 14px;
`;

export const Header = styled.header`
  border-bottom: 1px solid rgb(56, 68, 77);
  padding: 11px 16px;
`;

export const Title = styled.h1`
  font-size: 19px;
`;

export const Item = styled.div`
  border-bottom: 1px rgb(56, 68, 77) solid;
  padding: 12px 16px;

  &:last-child {
    border-bottom: 0;
  }
`;