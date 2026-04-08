import { emailReducer, initialEmailState } from '@/store/reducers/emailReducer';
import { setDrawerVisible, setUserName, setVerificationPath, setDomainsFormVisible, setNameFormVisible, verificationSuccess, setEmailDisplayVisible, setCustomEmail, setDomains } from '@/store/reducers/emailReducerActions';
import { useEffect, useReducer, useCallback } from 'react';
import useDomainsQuery from './useDomainsQuery';

const useEmailReducer = () => {
    const [state, dispatch] = useReducer(emailReducer, initialEmailState);

    // Use React Query for domains — sync into reducer state
    const { data: domains = [], isLoading: domainsLoading, isError: domainsError } = useDomainsQuery();

    useEffect(() => {
        if (domains.length > 0) {
            dispatch(setDomains(domains));
        }
    }, [domains]);

    const handleEmailCreated = useCallback((data) => {
        dispatch({ type: 'EMAIL_CREATED', payload: data });
    }, []);

    return {
        state,
        domainsLoading,
        domainsError,
        setNameFormVisible: (isVisible) => dispatch(setNameFormVisible(isVisible)),
        setDomainsFormVisible: (isVisible) => dispatch(setDomainsFormVisible(isVisible)),
        setUserName: (name) => dispatch(setUserName(name)),
        setDrawerVisible: (isVisible) => dispatch(setDrawerVisible(isVisible)),
        setVerificationPath: (path) => dispatch(setVerificationPath(path)),
        triggerVerification: (path) => {
            dispatch(setVerificationPath(path));
            dispatch(setDrawerVisible(true));
        },
        handleVerificationSuccess: () => dispatch(verificationSuccess()),
        setEmailDisplayVisible: (isVisible) => dispatch(setEmailDisplayVisible(isVisible)),
        setCustomEmail: (email) => dispatch(setCustomEmail(email)),
        handleEmailCreated,
    }
}

export default useEmailReducer;
