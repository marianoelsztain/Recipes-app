import React from 'react';
import Header from '../components/Header';

function Perfil() {
  const enableSearch = false;
  return (
    <Header pageTitle="Perfil" searchAbled={ enableSearch } />
  );
}

export default Perfil;
