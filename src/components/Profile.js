import React, { useState, useEffect } from 'react';
import '../css/Profile.css';

function Profile() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem('user'));
  }, []);

}

export default Profile;
