import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Bills from './pages/Bills';
import Claims from './pages/Claims';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bills" element={<ProtectedRoute><Bills /></ProtectedRoute>} />
        <Route path="/claims" element={<ProtectedRoute><Claims /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
