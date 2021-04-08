import { CHANGE_THEME } from "./ThemeType";

const initialState = false;

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        state: action.payload,
      };

    default:
      return state;
  }
};

export default ThemeReducer;
