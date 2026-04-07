import { SET_DOMAINS_FORM_VISIBLE, SET_NAME_FORM_VISIBLE, SET_DRAWER_VISIBLE, SET_CUSTOM_EMAIL, SET_USERNAME, SET_VERIFICATION_PATH, VERIFICATION_SUCCESS } from "./emailReducerActions";

export const initialEmailState = {
    isNameFormVisible: false,
    isDomainsFormVisible: false,
    isCreatedEmailCompVisible: false,

    isDrawerOpen: false,
    verificationPath: null, // "random" | "custom" | null

    username: null,
    customEmail: null,
}
export const emailReducer = (state, action) => {
    switch (action.type) {
        case SET_NAME_FORM_VISIBLE: {
            /* When we render the name form:
                -> clear the name value to let user enter a username
            */
            let name = state.username;
            if (action.payload) name = null

            return {
                ...state,
                isNameFormVisible: action.payload,
                username: name
            };
        };

        case SET_DOMAINS_FORM_VISIBLE: {
            /* When we render the domains form:
                -> clear the name form
            */
            let isFormVisible = state.isNameFormVisible;
            if (action.payload) isFormVisible = false;

            return {
                ...state,
                isNameFormVisible: isFormVisible,
                isDomainsFormVisible: action.payload,
            };
        };

        case SET_DRAWER_VISIBLE:
            return { ...state, isDrawerOpen: action.payload };

        case SET_VERIFICATION_PATH:
            return { ...state, verificationPath: action.payload };

        case VERIFICATION_SUCCESS: {
            /* 
                If user choosed create random email: 
                    -> hide verification drawr
                    -> directly go to email creation phase
            */
            if (state.verificationPath === "random") {
                return { ...state, isDrawerOpen: false, };
            };
            /* 
                If user choosed create custom email: 
                    -> hide verification drawr
                    -> go to create user name & chosoe domains form
            */
            if (state.verificationPath === "custom") {
                return {
                    ...state,
                    isDrawerOpen: false,
                    isNameFormVisible: true,
                };
            };
            return state;
        };

        case SET_USERNAME: {
            /* 
                If there is no value: 
                    -> don't proceed
            */
            if (!action.payload) return state;

            /*
                Set name and:
                    -> render the domains form
                    -> hide the name form
            */
            return {
                ...state,
                username: action.payload,
                isNameFormVisible: false,
                isDomainsFormVisible: true
            };
        };

        case SET_CUSTOM_EMAIL: {
            /* 
                If there is no value: 
                    -> don't proceed
            */
            if (!action.payload) return state;

            /*
                Set custom email and:
                    -> render email component 
                    -> hide the name form 
                    -> the domains form
            */
            return {
                ...state,
                customEmail: action.payload,
                isNameFormVisible: false,
                isDomainsFormVisible: false,
                isCreatedEmailCompVisible: true
            };
        };

        default:
            return state;
    }
}