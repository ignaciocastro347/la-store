import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';

export interface State {
  searchTerm: string;
}

const initialState = {
  searchTerm: '',
  updateSearchTerm: () => {},
};

export const SearchContext = React.createContext<{
  searchTerm: string;
  updateSearchTerm: (searchTerm: string) => void;
}>(initialState);

SearchContext.displayName = 'SearchContext';

export const SearchProvider: FC<{ children?: React.ReactNode }> = (props) => {
  const { query } = useRouter();
  const [searchTerm, updateSearchTerm] = useState('');

  useEffect(() => {
    console.log("when useEffect is called")
    if (query?.text) {
      updateSearchTerm(query?.text as string);
    } else {
      updateSearchTerm('');
    }
  }, [query]);

  return <SearchContext.Provider value={{
    searchTerm,
    updateSearchTerm,
  }} {...props} />;
};

export const useSearch = () => {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error(`useSearch must be used within a SearchProvider`);
  }
  return context;
};
