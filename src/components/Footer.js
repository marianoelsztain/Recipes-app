import React from 'react';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import '../css/Footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <button
        className="footer-btn"
        type="button"
      >
        <img
          alt="drinks section"
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
        />
      </button>
      <button
        className="footer-btn"
        type="button"
      >
        <img
          alt="explore section"
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
        />
      </button>
      <button
        className="footer-btn"
        type="button"
      >
        <img
          alt="food section"
          data-testid="food-bottom-btn"
          src={ mealIcon }
        />
      </button>
    </footer>
  );
}

export default Footer;
