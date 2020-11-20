import React from 'react';
import renderWithRouter from './services/renderWithRouter';
import Comidas from '../pages/Comidas';

describe('A página de comidas: ', () => {
  it('deve ter um título "Comidas"', () => {
    renderWithRouter(<Comidas />);

    const mainTitleElement = document.querySelector('h1');
    const mainTitle = 'Comidas';
    expect(mainTitleElement).toBeInTheDocument();
    expect(mainTitleElement.innerHTML).toBe(mainTitle);
  });
});
