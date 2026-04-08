export const SET_NAME_FORM_VISIBLE = "SET_NAME_FORM_VISIBLE";
export const SET_DOMAINS_FORM_VISIBLE = "SET_DOMAINS_FORM_VISIBLE";
export const SET_USERNAME = "SET_USERNAME";
export const SET_DRAWER_VISIBLE = "SET_DRAWER_VISIBLE";
export const SET_VERIFICATION_PATH = "SET_VERIFICATION_PATH";  // "random" or "custom"
export const VERIFICATION_SUCCESS = "VERIFICATION_SUCCESS";
export const SET_CUSTOM_EMAIL = "SET_CUSTOM_EMAIL";
export const SET_EMAIL_DISPLAY_VISIBLE = "SET_EMAIL_DISPLAY_VISIBLE";
export const SET_DOMAINS = "SET_DOMAINS";
export const EMAIL_CREATED = "EMAIL_CREATED";


export const setNameFormVisible = (isVisible) => ({ type: SET_NAME_FORM_VISIBLE, payload: isVisible });

export const setDomainsFormVisible = (isVisible) => ({ type: SET_DOMAINS_FORM_VISIBLE, payload: isVisible });

export const setUserName = (name) => ({ type: SET_USERNAME, payload: name });

export const setDrawerVisible = (isVisible) => ({ type: SET_DRAWER_VISIBLE, payload: isVisible });

export const setVerificationPath = (path) => ({ type: SET_VERIFICATION_PATH, payload: path });

export const verificationSuccess = () => ({ type: VERIFICATION_SUCCESS });

export const setCustomEmail = (email) => ({ type: SET_CUSTOM_EMAIL, payload: email });

export const setEmailDisplayVisible = (isVisible) => ({ type: SET_EMAIL_DISPLAY_VISIBLE, payload: { isVisible } });

export const setDomains = (domains) => ({ type: SET_DOMAINS, payload: domains });