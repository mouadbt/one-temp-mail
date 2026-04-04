import { EmailContext } from '@/store/context/contexts/EmailContext'
import React, { useContext } from 'react'

const useEmailContext = () => {
    const context = useContext(EmailContext);
    if (!context) throw new Error("useEmailContext must be used within a EmailContextProvider");
    return context;
}

export default useEmailContext