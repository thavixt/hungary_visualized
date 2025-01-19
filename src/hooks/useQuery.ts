import { useState } from "react";
import { ChartData, OECD_API_QUERY } from "../logic/oecd_api";
// import { OECD_DATA } from "../types";
import { useQuery as useReactQuery } from "@tanstack/react-query";

type QueryResult = {
  // data: OECD_DATA,
  // structure: OECD_STRUCTURE,
  processed: ChartData,

  //Ł
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
  // console.log(cacheKey.slice(0, 10), isFetching || isPending);
  return {
    title: data?.title,
    description: data?.description,
    data: data?.processed,
    pending: isFetching || isPending,
    error,
  };

  // const [data, setData] = useState<QueryResult | null>(null);
  // const [pending, setPending] = useState(true);

  // useEffect(() => {
  //   if (data || !load) {
  //     setPending(false);
  //     return;
  //   }
  //   (async () => {
  //     setPending(true);
  //     const dataResponse = await fetch(query.data, FETCH_OPTIONS);
  //     const dataJson = await dataResponse.json() as OECD_DATA;
  //     // const structureResponse = await fetch(query.structure, FETCH_OPTIONS);
  //     // const structureJson = await structureResponse.json() as OECD_STRUCTURE;
  //     setPending(false);
  //     setData({
  //       // data: dataJson,
  //       // structure: structureJson,
  //       processed: query.process(dataJson),
  //       //
  //       title: query.title ?? dataJson.data.structures[0].name,
  //       description: query.description ?? '',
  //     });
  //   })();
  //   return () => setPending(true);
  // }, [load, query]);

  // return {
  //   data: data?.processed,
  //   title: data?.title,
  //   description: data?.description,
  //   pending,
  // };
}