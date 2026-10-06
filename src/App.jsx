import React, { useState, useEffect } from 'react';

const TitleUpdater = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('Hello, React!');

  useEffect(() => {
    document.title = greeting;
  }, [greeting]);

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
    if (inputName.trim() !== '') {
      setGreeting(`Hello ${inputName}`);
    } else {
      setGreeting('Hello, React!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{greeting}</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <div>
          <label>Enter your name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div>
          <label>Custom Greeting / Message:</label>
          <input
            type="text"
            value={greeting}
            onChange={(e) => setGreeting(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default TitleUpdater;