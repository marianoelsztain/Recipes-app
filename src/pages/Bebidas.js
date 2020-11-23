import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Bebidas() {
  const enableSearch = true;
  return (
    <div>
      <Header pageTitle="Bebidas" searchAbled={ enableSearch } />
      <Footer />
    </div>
  );
}

export default Bebidas;
