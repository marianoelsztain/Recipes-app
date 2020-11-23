import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarComidas() {
  return (
    <div>
      <Header pageTitle="Explorar Comidas" searchAbled={ false } />
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
