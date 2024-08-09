export interface AuthState {
  profiles: any;
  isAuth: boolean;
  isLoading: boolean;
}

export interface RootState {
  auth: AuthState;
}

export const SET_AUTH = "SET_AUTH";
export const SET_PROFILES = "SET_PROFILES";
export const SET_LOADING = "SET_LOADING";

interface SetAuthAction {
  type: typeof SET_AUTH;
  payload: boolean;
}

interface SetProfilesAction {
  type: typeof SET_PROFILES;
  payload: any;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type AuthActionTypes =
  | SetAuthAction
  | SetProfilesAction
  | SetLoadingAction;
