export const SHOW_NAME_FORM = "SHOW_NAME_FORM";
export const SHOW_DOMAINS_FORM = "SHOW_DOMAINS_FORM";
export const SET_USERNAME = "SET_USERNAME";
export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";
export const SET_VERIFICATION_PATH = "SET_VERIFICATION_PATH";  // "random" or "custom"
export const VERIFICATION_SUCCESS = "VERIFICATION_SUCCESS";

export const showNameForm = (isVisibleState) => ({ type: SHOW_NAME_FORM, payload: isVisibleState });

export const showDomainsForm = (isVisibleState) => ({ type: SHOW_DOMAINS_FORM, payload: isVisibleState });

export const setUserName = (name) => ({ type: SET_USERNAME, payload: name });

export const openDrawer = () => ({ type: OPEN_DRAWER });

export const closeDrawer = () => ({ type: CLOSE_DRAWER });

export const setVerificationPath = (path) => ({ type: SET_VERIFICATION_PATH, payload: path });

export const verificationSuccess = () => ({ type: VERIFICATION_SUCCESS });