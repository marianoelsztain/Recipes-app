import React from 'react';
import { Link } from 'react-router-dom';

function ExploreDrinks() {

    return (
        <Link to="/explorar/bebidas">
        <button data-testid="explore-drinks"
        >
            Explorar Drinks
        </button>
        </Link> 

    );
}

export default ExploreDrinks;