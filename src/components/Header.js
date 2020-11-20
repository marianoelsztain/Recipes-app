import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/Header.css';

function Header({ pageTitle }) {
  return (
    <header>
      <button
        className="header-btn"
        type="button"
      >
        <img
          alt="profile access"
          data-testid="profile-top-btn"
          src={profileIcon}
        />
      </button>
      <h1 data-testid="page-title">{pageTitle}</h1>
      <button
        className="header-btn"
        type="button"
      >
        <img
          alt="search"
          data-testid="search-top-btn"
          src={searchIcon}
        />
      </button>
    </header>
  );
}

export default Header;

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
