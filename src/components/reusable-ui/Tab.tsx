import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

type PropsType = {
  label?: string;
  Icon?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className: string;
};

export default function Tab({ label, Icon, onClick, className }: PropsType) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className='icon'>{Icon}</div>
      {label && <span className='label'>{label}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  /* border: 1px solid blue; */
  height: 43px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: relative;
  top: 1px;

  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-radius: 5px 5px 0px 0px;

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }

  .icon {
    display: flex;
  }

  .label {
    margin-left: 13px;
  }
`;
