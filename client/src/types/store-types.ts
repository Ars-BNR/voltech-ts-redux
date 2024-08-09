export interface AuthState {
  profiles: profiles;
  isAuth: boolean;
  isLoading: boolean;
}
interface profiles {
  login?: string;
  id?: number;
  role?: string;
}
export enum AuthActionTypes {
  SET_AUTH = "SET_AUTH",
  SET_PROFILES = "SET_PROFILES",
  SET_LOADING = "SET_LOADING",
}
interface ActionSET_AUTH {
  type: AuthActionTypes.SET_AUTH;
  payload: boolean;
}
interface ActionSET_PROFILES {
  type: AuthActionTypes.SET_PROFILES;
  payload: object;
}
interface ActionSET_LOADING {
  type: AuthActionTypes.SET_LOADING;
  payload: boolean;
}

export type VariantsActions =
  | ActionSET_AUTH
  | ActionSET_PROFILES
  | ActionSET_LOADING;
