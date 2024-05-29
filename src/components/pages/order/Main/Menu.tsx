import { useState } from 'react';
import styled from 'styled-components';

export default function Menu() {
  const [products, setProducts] = useState('');

  return <MenuStyled></MenuStyled>;
}

const MenuStyled = styled.div`
  background: purple;
`;
