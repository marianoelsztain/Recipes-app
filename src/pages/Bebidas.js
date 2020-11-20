import React from 'react';
import Header from '../components/Header';

function Bebidas() {
  const enableSearch = true;
  return (
    <Header pageTitle="Bebidas" searchAbled={ enableSearch } />
  );
}

export default Bebidas;
