import styled from 'styled-components';
import { theme } from '../../theme/index';

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src='/images/logo-orange.png' alt='Crazeeee !' />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    font-family: 'Amatic SC', sans-serif;
    font-size: 90px; // 36
    font-weight: 700;
    color: ${theme.colors.primary};
    letter-spacing: 1.5px;
  }

  img {
    height: 150px; // 60
    margin: 0 10px;
    /* object-position: center;
    object-fit: contain; */
  }
`;
