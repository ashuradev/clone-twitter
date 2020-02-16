import styled from 'styled-components';

export const Wrapper = styled.article`
  border-bottom: 1px solid rgb(56, 68, 77);
  padding: 15px;
  display: flex;
  align-items: flex-start;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
`;

export const RightWrapper = styled.div`
  margin-left: 10px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  span {
    margin-right: 5px;
  }
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const Username = styled.span`
  color: ${props => props.theme.colors.secondary};
`;
