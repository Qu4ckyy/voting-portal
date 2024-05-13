import { useNavigate } from 'react-router-dom';
import '../../scss/Register.scss';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nickname: '',
    mail: '',
    password: '',
  });

  const handleSubmit = (e) => {
  };

  const handleSignClick = () => [
    window.location.href = '/'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="Register-form">
        <h2>Welcome to Voting app, create account and start voting</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nickname"
            name="nickname"
            value={userData.nickname}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="mail"
            value={userData.mail}
            onChange={handleChange}
          />
          <input
          type='text'
          placeholder='Repeat Email'
          name='mail'
          value={userData.mail}
          onChange={handleChange}
          ></input>
          <input
            type="password"
            placeholder="Hasło"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <button className="Sign" type="button" onClick={handleSignClick}>Sign in</button>
          <h2>Already have account?</h2>
          <button className='Log' type="button" onClick={handleLoginClick}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
