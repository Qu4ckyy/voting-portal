import React from 'react';
import "../../../scss/MainPage.scss";

const handleLogout = () => {
  window.location.href = '/Login';
}

const handleCreate = () => {
  window.location.href = '/CreateVoting';
}

const MainPage = () => {
  return (
    <div className='MainPage'>
      <div className="navbar">
        <h1 className="voting-app">Voting App</h1>
        <div className="user-info">
          {/* Tutaj możesz dodać komponent wyświetlający informacje o użytkowniku */}
        </div>
        <button className='logout-btn' onClick={handleLogout}>Log out</button>
      </div>
      <div className='Main'>
        <div className='create'>
          <h2>Create Voting</h2>
          <a href=''>
            <img className='create-picture' src='' alt='a'></img>
          </a>
          <button className='Create Vote' onClick={handleCreate}>Create Voting</button>
        </div>
        <div className='join'>
          <h2>Join Voting</h2>
          <a href=''>
            <img className='join-voting' src='' alt='a'></img>
          </a>
          <button className='Join Voting'>Join Voting</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
