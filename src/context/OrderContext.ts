import { createContext } from 'react';

type Props = {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default createContext<Props>({
  isAdmin: false,
  setIsAdmin: () => {},
});
