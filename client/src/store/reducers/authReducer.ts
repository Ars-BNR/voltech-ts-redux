import {
  AuthActionTypes,
  AuthState,
  VariantsActions,
} from "../../types/store-types";

const initialState: AuthState = {
  profiles: {},
  isAuth: false,
  isLoading: false,
};

export const authReducer = (
  state = initialState,
  action: VariantsActions
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionTypes.SET_PROFILES:
      return { ...state, profiles: action.payload };
    case AuthActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default authReducer;
