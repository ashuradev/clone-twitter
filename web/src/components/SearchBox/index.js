import React from 'react';

import { IconInput } from '@/components/Form';

import SearchButton from './SearchButton';

const SearchBox = () => (
  <IconInput placeholder="Buscar no Twitter..." icon={SearchButton} />
);

export default SearchBox;
