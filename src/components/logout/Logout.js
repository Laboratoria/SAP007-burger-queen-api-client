import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

export const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      return navigate('/login' )
    }
  }
  return (
    <FiLogOut style={{fontSize: '1rem',  cursor: 'pointer'}} onClick={() => handleLogout()} />
  
    )
};