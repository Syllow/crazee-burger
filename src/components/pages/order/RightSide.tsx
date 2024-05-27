import styled from 'styled-components';
import Profile from './Profile';

type PropsType = {
  username?: string;
};

export default function RightSide({ username }: PropsType) {
  return (
    <RightSideStyled>
      {/* <div className='admin-button'>Admin button</div> */}
      <Profile username={username} />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  .admin-button {
    background: lightblue;
  }
`;
