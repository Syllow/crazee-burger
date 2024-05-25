import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

type PropsType = {
  label: string;
  Icon?: ReactNode;
};

export default function PrimaryButton({ label, Icon }: PropsType) {
  return (
    <ButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary_burger};
  padding: 18px 24px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 5px;
  border: 1px solid ${theme.colors.primary_burger};
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover:not(:disabled) {
    color: ${theme.colors.primary_burger};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.white};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
