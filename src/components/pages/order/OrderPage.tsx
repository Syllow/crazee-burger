import { useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../context/OrderContext';
import { theme } from '../../../theme';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  const orderContexteValue = {
    isAdmin,
    setIsAdmin,
  };

  return (
    <OrderContext.Provider value={orderContexteValue}>
      <OrderPageStyled>
        <div className='container'>
          <NavBar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
