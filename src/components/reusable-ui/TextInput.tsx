import styled from 'styled-components';

import { ReactNode } from 'react';
import { theme } from '../../theme/index.ts';

type PropsType = {
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  Icon: ReactNode;
  placeholder?: string;
  required?: boolean;
};

export default function TextInput({
  value,
  onChange,
  Icon,
  ...otherProps
}: PropsType) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type='text' {...otherProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  input {
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.dark};
    width: 100%;
  }
  &::placeholder {
    background: ${theme.colors.white};
    color: ${theme.colors.greyLight};
  }
`;
