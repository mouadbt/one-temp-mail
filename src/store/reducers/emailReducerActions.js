export const SHOW_NAME_FORM = "SHOW_NAME_FORM";
export const SHOW_DOMAINS_FORM = "SHOW_DOMAINS_FORM";
export const SET_USERNAME = "SET_USERNAME";

export const showNameForm = (isVisibleState) => ({ type: SHOW_NAME_FORM, payload: isVisibleState });

export const showDomainsForm = (isVisibleState) => ({ type: SHOW_DOMAINS_FORM, payload: isVisibleState });

export const setUserName = (name) => ({ type: SET_USERNAME, payload: name });