import { createContext } from "react";

interface ContextProps {
  usermenuOpen: boolean;

  // Methods

  closeUserMenu: () => void;
  openUserMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
