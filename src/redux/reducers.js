import { TOGGLE_DARKTHEME } from './actions';

const initialState = {
  darkTheme: false // Correctly initializing the state with darkTheme
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return {
        ...state,
        darkTheme: !state.darkTheme
      };
    default:
      return state;
  }
};

export default themeReducer;
