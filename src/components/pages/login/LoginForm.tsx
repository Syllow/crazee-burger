import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme/index';

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
    <LoginFormStyled action='submit' onSubmit={handleSubmit}>
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

      <button>Accéder à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background-color: green;
  display: flex;
  flex-direction: column;
`;

// font-family: 'Amatic SC', sans-serif;
// font-family: 'Open Sans', sans-serif;
