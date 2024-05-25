import { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { IoChevronForward } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme/index.ts';
import PrimaryButton from '../../reusable-ui/PrimaryButton.tsx';
import TextInput from '../../reusable-ui/TextInput.tsx';

export default function LoginForm() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue('');
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <LoginFormStyled action='submit' onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous</h1>
      <hr />
      <h2>Connectez-vous</h2>

      <TextInput
        value={inputValue}
        onChange={handleChange}
        Icon={<BsPersonCircle className='text-input-icon' />}
        placeholder='Entrez votre prénom'
        required
      />

      <PrimaryButton
        label='Accéder à mon espace'
        Icon={<IoChevronForward className='primary-button-icon' />}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  font-family: 'Amatic SC', sans-serif;
  text-align: center;
  padding: 2.5rem 2rem;

  h1 {
    color: ${theme.colors.white};
    font-size: 48px;
    margin-bottom: 24px;
  }
  hr {
    border: 1.5px solid ${theme.colors.primary_burger};
    width: 400px;
  }
  h2 {
    color: ${theme.colors.white};
    font-size: 36px;
    margin: 24px 12px 12px;
  }

  .text-input-icon {
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.greySemiDark};
    margin-right: 8px;
  }

  .primary-button-icon {
    font-size: 16px;
    margin-left: 10px;
  }
`;

// font-family: 'Amatic SC', sans-serif;
// font-family: 'Open Sans', sans-serif;
