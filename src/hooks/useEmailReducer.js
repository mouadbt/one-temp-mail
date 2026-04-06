import { emailReducer, initialEmailState } from '@/store/reducers/emailReducer'
import { closeDrawer, openDrawer, setUserName, setVerificationPath, showDomainsForm, showNameForm, verificationSuccess } from '@/store/reducers/emailReducerActions';
import { useEffect, useReducer } from 'react'

const useEmailReducer = () => {
    const [state, dispatch] = useReducer(emailReducer, initialEmailState);

    // After verification succeeds, branch to the correct path
    useEffect(() => {
        if (!state.isDrawerOpen && state.verificationPath) {

            if (state.verificationPath === "random") {
                handleRandomEmailCreation();
            }

            dispatch({ type: 'SET_VERIFICATION_PATH', payload: null });
        }
    }, [state.isDrawerOpen, state.verificationPath]);

    const handleRandomEmailCreation = () => {
        console.log('start creation of the random email');
    }

    return {
        state,
        showNameForm: (isVisibleState) => dispatch(showNameForm(isVisibleState)),
        showDomainsForm: (isVisibleState) => dispatch(showDomainsForm(isVisibleState)),
        setUserName: (name) => dispatch(setUserName(name)),
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: () => dispatch(closeDrawer()),
        setVerificationPath: (path) => dispatch(setVerificationPath(path)),
        triggerVerification: (path) => {
            dispatch(setVerificationPath(path));
            dispatch(openDrawer());
            // temp
            dispatch(verificationSuccess());
        },
        handleVerificationSuccess: () => dispatch(verificationSuccess()),
    }
}

export default useEmailReducer;