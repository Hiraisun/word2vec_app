"use client";

import { useState } from 'react';

const Home = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setResult(null);

    if (number === null) {
      setError('Please enter a number');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/double', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.result);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div>
      <h1>Double a Number</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number !== null ? number : ''}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
      {result !== null && <p>Result: {result}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Home;