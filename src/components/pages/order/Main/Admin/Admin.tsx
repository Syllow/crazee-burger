import { useState } from 'react';
import styled from 'styled-components';
import AdminPanel from './AdminPanel';
import AdminTabs from './AdminTabs';

export default function Admin() {
  const [actif, setActif] = useState(1);

  return (
    <AdminStyled>
      <AdminTabs actif={actif} setActif={setActif} />
      {actif !== 0 && <AdminPanel actif={actif} />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
