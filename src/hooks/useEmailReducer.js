import { emailReducer, initialEmailState } from '@/store/reducers/emailReducer'
import { setUserName, showDomainsForm, showNameForm } from '@/store/reducers/emailReducerActions';
import React, { useReducer } from 'react'

const useEmailReducer = () => {
    const [state, dispatch] = useReducer(emailReducer, initialEmailState);
    return {
        state,
        showNameForm: (isVisibleState) => dispatch(showNameForm(isVisibleState)),
        showDomainsForm: (isVisibleState) => dispatch(showDomainsForm(isVisibleState)),
        setUserName: (name) => dispatch(setUserName(name))
    }
}

export default useEmailReducer;