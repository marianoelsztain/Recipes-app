import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarIngredientes() {
  const enableSearch = false;
  return (
    <div>
      <Header pageTitle="Explorar Ingredientes" searchAbled={ enableSearch } />
      <Footer />
    </div>
  );
}

export default ExplorarIngredientes;
