import { emailReducer, initialEmailState } from '@/store/reducers/emailReducer';
import { setDrawerVisible, setUserName, setVerificationPath, setDomainsFormVisible, setNameFormVisible, verificationSuccess, setEmailDisplayVisible, setCustomEmail, setDomains, setSelectedDomain, resetState } from '@/store/reducers/emailReducerActions';
import { useEffect, useReducer, useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import useDomainsQuery from './useDomainsQuery';

const useEmailReducer = () => {
    const [state, dispatch] = useReducer(emailReducer, initialEmailState);
    const queryClient = useQueryClient();

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

    const resetAll = useCallback(() => {
        // Clear localStorage
        try {
            localStorage.removeItem("tempEmail");
            localStorage.removeItem("seenMessages");
        } catch (error) {
            console.error("Failed to clear localStorage:", error);
        }
        // Invalidate messages query cache
        queryClient.invalidateQueries({ queryKey: ["messages"] });
        queryClient.removeQueries({ queryKey: ["messages"] });
        // Reset reducer state
        dispatch(resetState());
    }, [queryClient]);

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
            // dispatch(setDrawerVisible(true));
            dispatch(verificationSuccess());
        },
        handleVerificationSuccess: () => dispatch(verificationSuccess()),
        setEmailDisplayVisible: (isVisible) => dispatch(setEmailDisplayVisible(isVisible)),
        setCustomEmail: (email) => dispatch(setCustomEmail(email)),
        setSelectedDomain: (domain) => dispatch(setSelectedDomain(domain)),
        handleEmailCreated,
        resetAll,
    }
}

export default useEmailReducer;
