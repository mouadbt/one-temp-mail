import { useQuery } from "@tanstack/react-query";
import { getMessages } from "@/lib/api";

const useMessagesQuery = (token) => {
    return useQuery({
        queryKey: ["messages", token],
        queryFn: () => getMessages(token),
        enabled: !!token,
        refetchInterval: 10000,
    });
};

export default useMessagesQuery;
