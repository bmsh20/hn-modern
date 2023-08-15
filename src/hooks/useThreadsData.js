import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ThreadContext } from "../context/context";

import fetchSearch from "../api/fetchSearch";
import fetchThreadsByCategory from "../api/fetchThreadsByCategory";

export default function useThreadsData() {
  const { filterTag, searchValue } = useContext(ThreadContext);

  const { data: threads, isLoading } = useQuery({
    queryFn: () => {
      if (searchValue != "") {
        return fetchSearch(searchValue);
      } else {
        return fetchThreadsByCategory(filterTag);
      }
    },
    queryKey: ["threads", filterTag, searchValue],
  });

  return { threads, isLoading };
}
