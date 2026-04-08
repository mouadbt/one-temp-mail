import { useMutation } from '@tanstack/react-query';
import { createAccount, getToken } from '@/lib/api';
import { generatePassword } from '@/lib/utils';
import { toast } from 'sonner';

const useEmailCreationMutation = (onSuccessCallback) => {
    return useMutation({
        mutationFn: async ({ name, domain }) => {
            // Validate inputs
            if (!name || typeof name !== 'string' || name.trim().length === 0) {
                throw new Error('Invalid email name');
            }
            if (!domain || typeof domain !== 'string' || domain.trim().length === 0) {
                throw new Error('Invalid domain');
            }

            const email = `${name.trim()}@${domain.trim()}`;
            
            // Validate email format
            const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
            if (!emailRegex.test(email)) {
                throw new Error('Invalid email format');
            }

            const password = generatePassword();

            try {
                // Create account
                await createAccount(email, password);
                
                // Get token
                const token = await getToken(email, password);
                
                return { email, token };
            } catch (error) {
                // If account creation succeeded but token failed, we have a partial failure
                // The account still exists, but we can't use it without a token
                throw new Error(`Email creation failed: ${error.message}`);
            }
        },
        onSuccess: (data) => {
            toast.success("Temp email created successfully");
            if (onSuccessCallback) {
                onSuccessCallback(data);
            }
        },
        onError: (error) => {
            console.error('Account creation error:', error);
            toast.error(error.message || "Failed to create account. Please try again.");
        }
    });
};

export default useEmailCreationMutation;
