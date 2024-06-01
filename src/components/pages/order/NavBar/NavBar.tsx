import styled from 'styled-components';
import { theme } from '../../../../theme';
import { reloadPage } from '../../../../utils/window';
import Logo from '../../../reusable-ui/Logo';
import RightSide from './RightSide';

export default function NavBar() {
  return (
    <NavBarStyled>
      <Logo onClick={reloadPage} className='logo' />
      <RightSide />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo {
    cursor: pointer;
  }
`;
