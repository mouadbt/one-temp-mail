import { emailReducer, initialEmailState } from '@/store/reducers/emailReducer'
import { setDrawerVisible, setUserName, setVerificationPath, setDomainsFormVisible, setNameFormVisible, verificationSuccess } from '@/store/reducers/emailReducerActions';
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
        setNameFormVisible: (isVisible) => dispatch(setNameFormVisible(isVisible)),
        setDomainsFormVisible: (isVisible) => dispatch(setDomainsFormVisible(isVisible)),
        setUserName: (name) => dispatch(setUserName(name)),
        setDrawerVisible: (isVisible) => dispatch(setDrawerVisible(isVisible)),
        setVerificationPath: (path) => dispatch(setVerificationPath(path)),
        triggerVerification: (path) => {
            dispatch(setVerificationPath(path));
            dispatch(setDrawerVisible(true));
            // temp
            dispatch(verificationSuccess());
        },
        handleVerificationSuccess: () => dispatch(verificationSuccess()),
    }
}

export default useEmailReducer;