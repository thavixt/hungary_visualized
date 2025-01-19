import { OECD_DATA } from "../types";

interface OECD_API_QUERY_INPUT {
  data: string;

  archive?: boolean; // public or archive api endpoint
  average?: number; // OECD average

  title?: string;
  description?: string;

  process?: (data: OECD_DATA, roundingPrecision: number) => ChartData;
  processRounding?: number;
};

export interface OECD_API_QUERY extends OECD_API_QUERY_INPUT{
  process: (data: OECD_DATA, roundingPrecision: number) => ChartData;
  processRounding: number;
};

// @todo: Define the ChartData type
export type ChartData = Array<{
  year: number, // year
  dp: number, // data point
}>;;

const DEFAULT_PROCESS_FN: OECD_API_QUERY['process'] = (data: OECD_DATA, roundingPrecision: number): ChartData => {
  // dimension values
  const dimension = data.data.structures[0].dimensions.observation[0].values;
  // time series data
  const seriesKey = Object.keys(data.data.dataSets[0].series)[0];
  const observations = Object.values(data.data.dataSets[0].series[seriesKey].observations)

  return observations.map((observation: number[], i) => ({
    year: +dimension[i].id,
    dp: parseFloat(observation[0].toFixed(roundingPrecision)),
  })).sort((a, b) => a.year - b.year);
}

const dataUrl = (archive = false) => `https://sdmx.oecd.org/${archive ? 'archive' : 'public'}/rest/data`;
const format = 'format=jsondata';

export function build(query: OECD_API_QUERY_INPUT): OECD_API_QUERY {
  return {
    title: query.title,
    description: query.description,
    data: `${dataUrl(query.archive)}/${query.data}&${format}`,
    average: query.average,
    process: query.process ?? DEFAULT_PROCESS_FN,
    processRounding: query.processRounding ?? 0,
  };
}