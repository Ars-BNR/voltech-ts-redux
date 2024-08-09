import { toast } from "react-toastify";
import loginService from "../../services/login-service";
import registerService from "../../services/register-service";
import exitService from "../../services/exit-service";
import refreshService from "../../services/refresh-service";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import { AuthActionTypes } from "../../types/store-types";

export const setAuth = (bool: boolean) => ({
  type: AuthActionTypes.SET_AUTH,
  payload: bool,
});

export const setProfiles = (profiles: any) => ({
  type: AuthActionTypes.SET_PROFILES,
  payload: profiles,
});

export const setLoading = (bool: boolean) => ({
  type: AuthActionTypes.SET_LOADING,
  payload: bool,
});

export const login =
  (login: string, password: string, navigate: NavigateFunction) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await loginService.login(login, password);
      localStorage.setItem("token", response.accessToken);
      dispatch(setAuth(true));
      dispatch(setProfiles(response.profiles));
      navigate("/");
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };

export const registration =
  (login: string, password: string, navigate: NavigateFunction) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await registerService.registration(login, password);
      localStorage.setItem("token", response.accessToken);
      dispatch(setAuth(true));
      dispatch(setProfiles(response.profiles));
      navigate("/");
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };

export const logout =
  (navigate: NavigateFunction) => async (dispatch: Dispatch) => {
    try {
      await exitService.logout();
      localStorage.removeItem("token");
      dispatch(setAuth(false));
      dispatch(setProfiles({}));
      navigate("/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };

export const checkAuth = () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await refreshService.refresh();
    localStorage.setItem("token", response.accessToken);
    dispatch(setAuth(true));
    dispatch(setProfiles(response.profiles));
  } catch (error: any) {
    toast.error(error.response?.data?.message);
  } finally {
    dispatch(setLoading(false));
  }
};
