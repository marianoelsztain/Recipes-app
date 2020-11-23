import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Comidas() {
  const enableSearch = true;
  return (
    <div>
      <Header pageTitle="Comidas" searchAbled={ enableSearch } />
      <Footer />
    </div>
  );
}

export default Comidas;
