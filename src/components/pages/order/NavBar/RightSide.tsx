import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import Profile from './Profile';

import { useContext } from 'react';
import 'react-toastify/ReactToastify.min.css';
import OrderContext from '../../../../context/OrderContext';
import { useParams } from 'react-router-dom';

export default function RightSide() {
  const { isAdmin, setIsAdmin } = useContext(OrderContext);
  const { username } = useParams();

  const displayToast = () => {
    setIsAdmin(!isAdmin);
    const texte = isAdmin ? 'Mode Admin désactivé' : 'Mode Admin activé';
    return toast.info(texte, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      // transition: Bounce,
    });
  };

  return (
    <RightSideStyled>
      <ToggleButton
        isChecked={isAdmin}
        labelIfUnchecked='Activer le mode Admin'
        labelIfChecked='Désactiver le mode Admin'
        onToggle={displayToast}
      />
      <Profile username={username} />
      <ToastContainer />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
