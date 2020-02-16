import React from 'react';

import { Wrapper, Avatar, RightWrapper, Info, Username } from './styles';

const Post = ({ body, user }) => (
  <Wrapper>
    <div>
      <Avatar src={user.avatar_url} />
    </div>
    <RightWrapper>
      <Info>
        <span>
          <strong>{user.name}</strong>
        </span>

        <Username>{user.username}</Username>
      </Info>

      <p>{body}</p>
    </RightWrapper>
  </Wrapper>
);

export default Post;
