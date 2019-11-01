import { LOGIN, LOGOUT, STOP_REQUEST } from "./types";

export const login = user => ({type: LOGIN, user})
export const logout = () => ({type: LOGOUT})
export const stopRequest = () => ({type: STOP_REQUEST})