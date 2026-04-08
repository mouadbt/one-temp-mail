import { useQuery } from "@tanstack/react-query";
import { getDomains } from "@/lib/api";

const useDomainsQuery = () => {
    return useQuery({
        queryKey: ["domains"],
        queryFn: getDomains,
    });
};

export default useDomainsQuery;
