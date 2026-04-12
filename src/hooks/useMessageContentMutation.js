import { useMutation } from "@tanstack/react-query";
import { getMessageContentById } from "@/lib/api";
import { toast } from "sonner";

const useMessageContentMutation = () => {
    return useMutation({
        mutationFn: ({ id, token }) => getMessageContentById(id, token),
        onError: (error) => {
            console.error("Failed to fetch message content:", error);
            toast.error("Failed to load message content");
        },
    });
};

export default useMessageContentMutation;
