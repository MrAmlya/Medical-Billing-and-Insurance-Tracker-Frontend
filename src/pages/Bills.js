import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Bills() {
  const [bills, setBills] = useState([]);
  const [provider, setProvider] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');

  const fetchBills = async () => {
    const { data } = await api.get('/bills');
    setBills(data);
  };

  useEffect(() => {
    fetchBills();
  }, []);

  const addBill = async () => {
    await api.post('/bills', { provider, amount, dueDate });
    fetchBills();
  };

  return (
    <div className="container">
      <h2>Bills</h2>
      <form onSubmit={(e) => { e.preventDefault(); addBill(); }}>
        <input placeholder="Provider" value={provider} onChange={(e) => setProvider(e.target.value)} />
        <input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <button type="submit">Add Bill</button>
      </form>
      <ul>
        {bills.map((bill) => (
          <li key={bill._id}>{bill.provider} - ${bill.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Bills;
