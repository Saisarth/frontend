import React, { useState, useEffect } from 'react';
import './App.css'; 

const App = () => {
  const [userData, setUserData] = useState({
    name: '',
    gender: '',
    phone: '',
    image: '',
    street:'',
  });

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const fetchRandomUser = () => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        setUserData({
          name: `${user.name.first} ${user.name.last}`,
          gender: user.gender,
          phone: user.phone,
          image: user.picture.large,
          street:user.street,
        });
      })
      .catch(error => {
        console.error('Error fetching random user:', error);
      });
  };

  return (
    <div className="app-container">
      <div className="user-info">
        <img className="user-image" src={userData.image} alt={`User Image - ${userData.name}`} />
        <div className="details">
          <h1>{userData.name}</h1>
          <p>Gender: {userData.gender}</p>
          <p>Phone: {userData.phone}</p>
          
        
        
        <button onClick={fetchRandomUser}>Get Random User</button>
        </div>
        </div>
      </div>
  );
};

export default App;

