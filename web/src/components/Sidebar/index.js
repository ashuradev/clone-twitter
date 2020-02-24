import React from 'react';

import SearchBox from '@/components/SearchBox';
import Trending from '@/components/Trending';
import FollowSuggestions from '@/components/FollowSuggestions';

import { Wrapper } from './styles';

const Sidebar = () => (
  <Wrapper>
    <SearchBox />
    <Trending />
    <FollowSuggestions />
  </Wrapper>
);

export default Sidebar;
