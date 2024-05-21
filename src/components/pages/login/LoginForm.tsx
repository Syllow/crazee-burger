import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme/index.ts';
import { BsPersonCircle } from 'react-icons/bs';
import { IoChevronForward } from 'react-icons/io5';

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
      <hr />
      <h2>Connectez-vous</h2>
      <div className='input-container'>
        <BsPersonCircle className='icon' />
        <input
          value={inputValue}
          type='text'
          placeholder='Entrez votre prénom...'
          onChange={handleChange}
          required
        />
      </div>

      <button className='button-with-icon'>
        <span>Accéder à mon espace</span>
        <IoChevronForward className='icon' />
      </button>
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
  .input-container {
    background-color: ${theme.colors.white};
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      color: ${theme.colors.greySemiDark};
      margin-right: 8px;
    }
    input {
      border: none;
      font-size: 15px;
      color: ${theme.colors.dark};
      width: 100%;
    }
    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyLight};
    }
  }

  .button-with-icon {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    padding: 18px 24px;
    font-size: 16px;
    font-weight: 800;
    border-radius: 5px;
    border: 1px solid ${theme.colors.primary_burger};
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover:not(:disabled) {
      color: ${theme.colors.primary_burger};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }

    &:active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary_burger};
      border: 1px solid ${theme.colors.white};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon {
      font-size: 16px;
      margin-left: 10px;
    }
  }
`;

// font-family: 'Amatic SC', sans-serif;
// font-family: 'Open Sans', sans-serif;
