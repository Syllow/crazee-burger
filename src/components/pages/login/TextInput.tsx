import { IconType } from 'react-icons';
import styled from 'styled-components';

import { theme } from '../../../theme/index.ts';

type PropsType = {
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  Icon: IconType;
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
      <Icon className='icon' />
      <input value={value} onChange={onChange} type='text' {...otherProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: 15px;
    color: ${theme.colors.greySemiDark};
    margin-right: 8px;
  }
  input {
    border: none;
    font-size: 15px;
    color: ${theme.colors.dark};
    width: 100%;
  }
  &::placeholder {
    background: ${theme.colors.white};
    color: ${theme.colors.greyLight};
  }
`;
