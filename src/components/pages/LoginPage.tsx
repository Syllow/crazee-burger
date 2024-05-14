import { useState } from 'react';

export default function LoginPage() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action='submit' onSubmit={handleSubmit}>
        <input
          value={inputValue}
          type='text'
          placeholder='Entrez votre prénom...'
          onChange={handleChange}
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}
