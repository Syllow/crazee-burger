import styled from 'styled-components';
import { theme } from '../../theme/index';

type PropsType = {
  className?: string;
  onClick?: () => void;
};

export default function Logo({ className, onClick }: PropsType) {
  return (
    <LogoStyled className={className} onClick={onClick}>
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
    font-size: 36px;
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.primary};
    letter-spacing: 1.5px;
  }

  img {
    height: 60px;
    margin: 0 10px;
    /* object-position: center;
    object-fit: contain; */
  }
`;
