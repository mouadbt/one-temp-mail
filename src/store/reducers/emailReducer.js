import { SET_DOMAINS_FORM_VISIBLE, SET_NAME_FORM_VISIBLE, SET_DRAWER_VISIBLE, SET_CUSTOM_EMAIL, SET_USERNAME, SET_VERIFICATION_PATH, VERIFICATION_SUCCESS, SET_EMAIL_DISPLAY_VISIBLE, SET_DOMAINS, SET_SELECTED_DOMAIN, EMAIL_CREATED, RESET_STATE } from "./emailReducerActions";

// Load persisted email state from localStorage with validation
const loadPersistedState = () => {
    try {
        const stored = localStorage.getItem("tempEmail");
        if (stored) {
            const { email, token } = JSON.parse(stored);
            
            // Validate that both email and token exist and are non-empty strings
            if (email && token && 
                typeof email === "string" && typeof token === "string" &&
                email.trim().length > 0 && token.trim().length > 0) {
                
                return { 
                    email: email.trim(), 
                    token: token.trim(), 
                    isEmailCreated: true,
                    isEmailDisplayVisible: true 
                };
            }
        }
    } catch (error) {
        console.error("Failed to load email from localStorage:", error);
    }
    return null;
};

export const initialEmailState = {
    isNameFormVisible: false,
    isDomainsFormVisible: false,
    isEmailDisplayVisible: false,

    isDrawerOpen: false,
    verificationPath: null, // "random" | "custom" | null

    username: null,
    customEmail: null,
    domains: [],
    selectedDomain: null,
    email: null,
    token: null,
    isEmailCreated: false,
    ...loadPersistedState(), // Override with stored state if exists
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
                    -> show email display
                    -> directly go to email creation phase
            */
            if (state.verificationPath === "random") {
                return {
                    ...state,
                    isDrawerOpen: false,
                    isEmailDisplayVisible: true
                };
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

        case SET_DOMAINS: {
            return {
                ...state,
                domains: action.payload,
            };
        };

        case SET_SELECTED_DOMAIN: {
            return {
                ...state,
                selectedDomain: action.payload,
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
            };
        };

        case SET_EMAIL_DISPLAY_VISIBLE: {
            /* 
                If there is no value: 
                    -> don't proceed
            */
            if (!action.payload) return state;
            /*
                If we hide created email dispaly compeoent:
                    -> that means we reset Email creation fonctionality
                    -> which means :
                        -> reset all to inital state
            */
            if (!action.payload.isVisible) {
                return initialEmailState
            }
            /*
                Start Email Creation fonctionality
            */
            if (action.payload.isVisible) {
                return {
                    ...state,
                    isNameFormVisible: false,
                    isDomainsFormVisible: false,
                    isEmailDisplayVisible: action.payload.isVisible
                }
            }
        };

        case EMAIL_CREATED: {
            return {
                ...state,
                email: action.payload.email,
                token: action.payload.token,
                isEmailCreated: true,
            };
        };

        case RESET_STATE: {
            /*
                Reset all email-related state to initial values
                Keep domains since they're managed by React Query
            */
            return {
                ...initialEmailState,
                domains: state.domains, // Preserve fetched domains
            };
        };

        default:
            return state;
    }
}