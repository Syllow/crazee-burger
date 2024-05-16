import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // alert(`Bonjour ${inputValue}`);
    setInputValue('');
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form action='submit' onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        type='text'
        placeholder='Entrez votre prénom...'
        onChange={handleChange}
        required
      />
      <button>Accéder à votre espace</button>
    </form>
  );
}
