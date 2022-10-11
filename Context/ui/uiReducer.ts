import { UIState } from "./";

type UIActionType =
  | { type: "UI - Open UserMenu" }
  | { type: "UI - Close UserMenu" };
export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open UserMenu":
      return {
        ...state,
        usermenuOpen: true,
      };

    case "UI - Close UserMenu":
      return {
        ...state,
        usermenuOpen: false,
      };

    default:
      return state;
  }
};
