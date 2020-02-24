import React from 'react';

import { Widget, Header, Title, Item } from '@/components/Widget';
import Link from '@/components/Link';

const Trending = () => {
  const hashtags = [
    'react', 'laravel', 'nestjs', 'django', 'python', 'lumen', 'slim', 'flask',
    'tensorflow', 'vuejs',
  ];

  return (
    <Widget>
      <Header>
        <Title>Assuntos para você</Title>
      </Header>
      {hashtags.map(hashtag => (
        <Item key={hashtag}>
          #{hashtag}
        </Item>
      ))}
      <Item>
        <Link to="#">Mostrar mais</Link>
      </Item>
    </Widget>
  );
};

export default Trending;
