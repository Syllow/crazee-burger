import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../context/OrderContext';
import { theme } from '../../../../theme';
import Admin from './Admin/Admin';
import Menu from './Menu';
// import Basket from './Basket';

export default function Main() {
  const { isAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className='menu-and-admin'>
        <Menu />
        {isAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background: ${theme.colors.background_white};
  flex: 1;
  height: 85vh;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  /* grid-template-columns: 25% 75%; */
  grid-template-columns: 1fr;
  overflow-y: scroll; // % Pour ne pas dépasser en bas

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
  }
`;
