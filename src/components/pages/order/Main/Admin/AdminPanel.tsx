import styled from 'styled-components';
import { theme } from '../../../../../theme';

type PropType = {
  actif: number;
};

export default function AdminPanel({ actif }: PropType) {
  return <AdminPanelStyled>AdminPanel {actif}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
