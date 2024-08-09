type Action =
  | { type: typeof SET_AUTH; payload: boolean }
  | { type: typeof SET_PROFILES; payload: any }
  | { type: typeof SET_LOADING; payload: boolean };
const initialState = {
  profiles: {},
  isAuth: false,
  isLoading: false,
};
export const SET_AUTH = "SET_AUTH";
export const SET_PROFILES = "SET_PROFILES";
export const SET_LOADING = "SET_LOADING";
export const Authreducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_PROFILES:
      return { ...state, profiles: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default Authreducer;
