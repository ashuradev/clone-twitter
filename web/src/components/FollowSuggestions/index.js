import React from 'react';

import { Widget, Header, Title, Item } from '@/components/Widget';
import Link from '@/components/Link';
import UserInfo from '@/components/UserInfo';
import Button from '@/components/Button';

import { User } from './styles';

const FollowSuggestions = () => {
  const users = [
    {
      name: 'Lucas',
      avatar_url: 'https://www.gravatar.com/avatar/98e93cf847e4742f53ca24769c9062f3?s=80&d=mp&r=g',
      username: '@ashuradev',
      id: 1
    }
  ];

  return (
    <Widget>
      <Header>
        <Title>Quem seguir</Title>
      </Header>
      {users.map(user => (
        <User key={user.id}>
          <UserInfo 
            name={user.name}
            username={user.username}
            avatar_url={user.avatar_url}
          />

          <Button>Seguir</Button>
        </User>
      ))}
      <Item>
        <Link to="#">Mostrar mais</Link>
      </Item>
    </Widget>
  );
};

export default FollowSuggestions;
