import type { OECD_API_QUERY } from "./logic/oecd_api"
import { Loader } from "./components/Loader"
import { useQuery } from "./hooks/useQuery"
import { LineChart, XAxis, YAxis, Tooltip, Line, ReferenceLine } from "recharts"
import {
  centralBankKeyInterestRate,
  childWellBeing,
  govOutlays,
  governmentEmployment,
  hoursOfWorkToEscapePoverty,
  housingPriceToIncome,
  inflation,
  maastrichtCriteria,
  netGovernmentSavings,
  priceOfCommodityImports,
  savingRate,
  taxesOnHouseholds,
  taxesReceivedByGovernment,
  totalExpenditure,
  totalPopulation,
  workingAgePopulation,
} from "./logic/oecd_queries"
import { useInView } from "react-intersection-observer"

function App() {
  return (
    <div className="center my-8 !space-y-24">
      <div className="center">
        <h1 className="text-6xl font-serif font-extralight">Hungary visualized</h1>
        <p>Random charts to reflect on the current economic and political stability of Hungary</p>
        <ul>
          <li><strong className="text-red-500">Red</strong> lines indicate an election win by Fidesz.</li>
          <li>The <strong className="text-blue-600">blue</strong> line indicates the onset of the Covid-19 pandemic in the country.</li>
          <li>The <strong className="text-yellow-500">yellow</strong> line indicates the current OECD average of the topic.</li>
        </ul>
      </div>

      <div className="center !space-y-20">
        <Chart query={centralBankKeyInterestRate} />
        <Chart query={childWellBeing} />
        <Chart query={govOutlays} />
        <Chart query={governmentEmployment} />
        <Chart query={hoursOfWorkToEscapePoverty} />
        <Chart query={housingPriceToIncome} />
        <Chart query={inflation} />
        <Chart query={maastrichtCriteria} />
        <Chart query={netGovernmentSavings} />
        <Chart query={priceOfCommodityImports} />
        <Chart query={savingRate} />
        <Chart query={taxesOnHouseholds} />
        <Chart query={taxesReceivedByGovernment} />
        <Chart query={totalExpenditure} />
        <Chart query={totalPopulation} />
        <Chart query={workingAgePopulation} />
      </div>

      <div className="center">
        <p>Made by <a target="__blank" href="https:github.com/thavixt">thavixt@github</a></p>
      </div>

    </div>
  )
}

function Chart({ query }: { query: OECD_API_QUERY }) {
  const { ref, inView, } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { title, description, data, pending, error } = useQuery({ query, load: inView });

  if (error) {
    return (
      <div className="center chart">
        <h2>{query.title}</h2>
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    )
  }

  return (
    <div className="center chart" ref={ref}>
      <h2>{title}</h2>
      <p>{description}</p>
      {(!pending && data) ? (
        <LineChart
          width={700}
          height={200}
          data={data}
          margin={{ left: 100, right: 100 }}
        >
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip content={(props) => {
            if (!props?.payload?.[0]?.payload) return null;
            return (
              <div className="rounded-md bg-slate-200 p-4 shadow-md text-black">
                {props.payload[0].payload.year}:{' '}
                <b>{parseFloat(props.payload[0].payload.dp).toFixed(2)}</b>
              </div>
            )
          }} />
          <Line type="monotone" dataKey="dp" stroke="#82ca9d" dot={false} />
          <ReferenceLine x={2010} stroke="#ef4444" strokeDasharray="3 3" />
          <ReferenceLine x={2014} stroke="#ef4444" strokeDasharray="3 3" />
          <ReferenceLine x={2018} stroke="#ef4444" strokeDasharray="3 3" />
          <ReferenceLine x={2020} stroke="#2563eb" strokeDasharray="3 3" />
          {query.average ? (
            <ReferenceLine y={query.average} stroke="#eab308" strokeDasharray="3 3" />
          ) : null}
        </LineChart>
      ) : <Loader />}
    </div>
  )
}

export default App
