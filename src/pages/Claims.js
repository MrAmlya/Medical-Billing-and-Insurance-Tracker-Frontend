import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Claims() {
  const [claims, setClaims] = useState([]);
  const [claimant, setClaimant] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const fetchClaims = async () => {
    const { data } = await api.get('/claims');
    setClaims(data);
  };

  useEffect(() => {
    fetchClaims();
  }, []);

  const addClaim = async () => {
    await api.post('/claims', { claimant, amount, status });
    fetchClaims();
  };

  return (
    <div className="container">
      <h2>Claims</h2>
      <form onSubmit={(e) => { e.preventDefault(); addClaim(); }}>
        <input placeholder="Claimant" value={claimant} onChange={(e) => setClaimant(e.target.value)} />
        <input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
        <button type="submit">Add Claim</button>
      </form>
      <ul>
        {claims.map((claim) => (
          <li key={claim._id}>{claim.claimant} - ${claim.amount} - {claim.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Claims;
