import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  usermenuOpen: boolean;
}

interface Props {
  children?: React.ReactNode | undefined;
}

const UI_INITIAL_STATE: UIState = {
  usermenuOpen: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const closeUserMenu = () => dispatch({ type: "UI - Close UserMenu" });

  const openUserMenu = () => {
    dispatch({ type: "UI - Open UserMenu" });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods

        closeUserMenu,
        openUserMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
