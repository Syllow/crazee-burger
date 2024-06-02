import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Tab from '../../../../reusable-ui/Tab';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';

type PropsType = {
  actif: number;
  setActif: React.Dispatch<React.SetStateAction<number>>;
};

export default function AdminTabs({ actif, setActif }: PropsType) {
  const [old, setOld] = useState(1);

  const collapse = () => {
    if (actif === 0) setActif(old);
    else {
      setOld(actif);
      setActif(0);
    }
  };

  return (
    <AdminTabsStyled>
      <Tab
        label=''
        Icon={actif === 0 ? <FiChevronUp /> : <FiChevronDown />}
        onClick={collapse}
        className={actif === 0 ? 'is-active' : ''}
      />
      <Tab
        label='Ajouter un produit'
        Icon={<AiOutlinePlus />}
        onClick={() => {
          setActif(1);
        }}
        className={actif === 1 ? 'is-active' : ''}
      />
      <Tab
        label='Modifier un produit'
        Icon={<MdModeEditOutline />}
        onClick={() => {
          setActif(2);
        }}
        className={actif === 2 ? 'is-active' : ''}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 0 70px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 2px;
  }
`;
