'use client'
import Header from '../components/container/Header';
import React, { useState } from 'react';

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Signing up...');
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Telephone number</label>
          <input
            type="tel"
            placeholder="Enter telephone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;


