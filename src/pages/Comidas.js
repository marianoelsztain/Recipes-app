import React from 'react';
import Header from '../components/Header';

function Comidas() {
  const enableSearch = true;
  return (
    <Header pageTitle="Comidas" searchAbled={ enableSearch } />
  );
}

export default Comidas;
