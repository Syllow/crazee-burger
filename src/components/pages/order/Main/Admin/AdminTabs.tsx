import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Tab from '../../../../reusable-ui/Tab';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';

type PropsType = {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AdminTabs({ isCollapsed, setIsCollapsed }: PropsType) {
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);

  const selectCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsEditSelected(false);
    setIsAddSelected(false);
  };

  const selectEditTab = () => {
    setIsCollapsed(false);
    setIsEditSelected(true);
    setIsAddSelected(false);
  };

  const selectAddTab = () => {
    setIsCollapsed(false);
    setIsEditSelected(false);
    setIsAddSelected(true);
  };

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={selectCollapse}
        className={isCollapsed ? 'is-active' : ''}
      />
      <Tab
        label='Ajouter un produit'
        Icon={<AiOutlinePlus />}
        onClick={selectAddTab}
        className={isAddSelected ? 'is-active' : ''}
      />
      <Tab
        label='Modifier un produit'
        Icon={<MdModeEditOutline />}
        onClick={selectEditTab}
        className={isEditSelected ? 'is-active' : ''}
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
