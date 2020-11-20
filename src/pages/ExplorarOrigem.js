import React from 'react';
import Header from '../components/Header';

function ExplorarOrigem() {
  const enableSearch = true;
  return (
    <Header pageTitle="Explorar Origem" searchAbled={ enableSearch } />
  );
}

export default ExplorarOrigem;
