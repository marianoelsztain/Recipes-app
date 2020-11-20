import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/comidas/:id-da-receita/in-progress" component={ Login } />
        <Route path="/bebidas/{id-da-receita}/in-progress" component={ Login } />
        <Route path="/explorar/comidas/ingredientes" component={ Login } />
        <Route path="/explorar/bebidas/ingredientes" component={ Login } />
        <Route path="/explorar/comidas/area" component={ Login } />
        <Route path="/comidas/{id-da-receita}/" component={ Login } />
        <Route path="/bebidas/{id-da-receita}/" component={ Login } />
        <Route path="/explorar/comidas/" component={ Login } />
        <Route path="/explorar/bebidas/" component={ Login } />
        <Route path="/comidas" component={ Comidas } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/explorar" component={ Login } />
        <Route path="/receitas-feitas" component={ Login } />
        <Route path="/receitas-favoritas" component={ Login } />
        <Route path="/perfil" component={ Login } />
        <Route path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
