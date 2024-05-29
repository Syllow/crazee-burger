import styled from 'styled-components';
import { theme } from '../../../../theme';
import Menu from './Menu';

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background: ${theme.colors.background_white};
  flex: 1;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  /* grid-template-columns: 25% 75%; */
  grid-template-columns: 1fr;
  overflow-y: scroll; // Pour ne pas dépasser en bas
`;
