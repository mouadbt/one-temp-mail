import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getMessageContentById } from "@/lib/api";
import { toast } from "sonner";

const useMessageContentMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, token }) => getMessageContentById(id, token),
        onError: (error) => {
            console.error("Failed to fetch message content:", error);
            toast.error("Failed to load message content");
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['messages'] })
        }
    });
};

export default useMessageContentMutation;
