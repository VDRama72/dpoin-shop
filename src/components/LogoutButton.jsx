﻿// frontend/src/components/LogoutButton.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}
