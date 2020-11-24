import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarOrigem() {
  const enableSearch = true;
  return (
    <div>
      <Header pageTitle="Explorar Origem" searchAbled={ enableSearch } />
      <Footer />
    </div>
  );
}

export default ExplorarOrigem;
