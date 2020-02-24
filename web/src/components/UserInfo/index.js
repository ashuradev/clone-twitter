import React from 'react';

import { Wrapper, Avatar, Username } from './styles';

const UserInfo = ({ avatar_url, name, username }) => (
  <Wrapper>
    <Avatar src={avatar_url} />

    <div>
      <p>{name}</p>
      <Username>{username}</Username>
    </div>
  </Wrapper>
);

export default UserInfo;