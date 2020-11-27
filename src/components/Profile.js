import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Profile.css';

function Profile() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const { email } = JSON.parse(localStorage.getItem('user'));
    console.log(email);
    setUserEmail(email);
  }, []);

  const onclick = () => {
    localStorage.clear();
  };

  return (
    <div className="profile-container">

      <h3>{ userEmail }</h3>

      <div className="profile-btn-container">

        <Link to="/receitas-feitas" className="profile-btn">
          Receitas Feitas
        </Link>

        <Link to="/receitas-favoritas" className="profile-btn">
          Receitas Favoritas
        </Link>

        <Link to="/" className="profile-btn" onClick={ () => onclick() }>
          Sair
        </Link>

      </div>

    </div>
  );
}

export default Profile;
