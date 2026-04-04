import { SET_USERNAME, SHOW_DOMAINS_FORM, SHOW_NAME_FORM } from "./emailReducerActions";

export const initialEmailState = {
    isNameFormVisible: false,
    isDomainsFormVisible: false,
    username: null
}
export const emailReducer = (state, action) => {
    switch (action.type) {
        case SHOW_NAME_FORM:
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

        case SHOW_DOMAINS_FORM:
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

        case SET_USERNAME:
            /* If there is no value: 
                -> don't proceed
            */
            if (!action.payload) return state;

            /* 
                setName and render the domains form & hide name form
            */
            return {
                ...state,
                username: action.payload,
                isNameFormVisible: false,
                isDomainsFormVisible: true
            }

        default:
            return state;
    }
}