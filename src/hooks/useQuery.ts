import { useState } from "react";
import { ChartData, OECD_API_QUERY } from "../logic/oecd_api";
import { useQuery as useReactQuery } from "@tanstack/react-query";

type QueryResult = {
  processed: ChartData,
  title: string,
  description: string,
};

const FETCH_OPTIONS: RequestInit = {
  method: 'GET',
  headers: { 'Accept': 'application/json' },
};

export function useQuery({ query, load }: { query: OECD_API_QUERY; load: boolean }) {
  const [cacheKey] = useState(btoa(query.data));
  const { isPending, error, data, isFetching } = useReactQuery<QueryResult>({
    queryKey: [cacheKey],
    queryFn: async () => {
      const response = await fetch(query.data, FETCH_OPTIONS);
      const dataJson = await response.json();
      return {
        title: query.title ?? dataJson.data.structures[0].name,
        description: query.description ?? '',
        processed: query.process(dataJson, query.processRounding),
      };
    },
    enabled: load,
  })

  return {
    title: data?.title,
    description: data?.description,
    data: data?.processed,
    pending: isFetching || isPending,
    error,
  };
}