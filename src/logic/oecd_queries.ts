import { build } from "./oecd_api";

export const hoursOfWorkToEscapePoverty = build({
  average: 57,
  description: 'The number of weekly hours a family of four must work at minimum wage to escape poverty',
  data: 'OECD.ELS.JAI,DSD_TAXBEN_HOURSPOV@DF_HOURSPOV,1.0/HUN...MINW.C_C2..NO.NO.A?startPeriod=2001&endPeriod=2024',
})

export const savingRate = build({
  title: 'Saving rate - Net saving, % of GDP',
  description: 'Saving rate is the amount of GDP that is saved by households, businesses and the government. It reflects the part of disposable income that, together with the incurrence of liabilities, is available to acquire financial and non-financial assets.',
  data: 'OECD,DF_DP_LIVE,/HUN.SAVING...A?startPeriod=2000&endPeriod=2024',
  archive: true,
});

export const inflation = build({
  average: 7,
  title: 'Inflation',
  description: 'Consumer price index - yearly growth rate',
  data: 'OECD.SDD.TPS,DSD_PRICES@DF_PRICES_ALL,1.0/HUN.A.N.CPI.._T.N.GY?startPeriod=2000&endPeriod=2024',
});

export const housingPriceToIncome = build({
  average: 117.4,
  title: 'Housing price to income ratio',
  description: '2015 = 100',
  data: 'OECD.ECO.MPD,DSD_AN_HOUSE_PRICES@DF_HOUSE_PRICES,1.0/HUN.A.HPI_YDH.?startPeriod=2007&endPeriod=2024',
});

export const childWellBeing = build({
  title: 'Child well-being',
  description: 'Children experiencing severe housing deprivation - per 100',
  data: 'OECD.WISE.CWB,DSD_CWB@DF_CWB,1.0/HUN.A1_2.A1?startPeriod=2016',
});

export const priceOfCommodityImports = build({
  title: 'Price of commodity imports',
  data: 'OECD.ECO.MAD,DSD_EO@DF_EO,1.2/HUN.PMNW.A?startPeriod=2000&endPeriod=2024',
});

export const maastrichtCriteria = build({
  title: 'Gross public debt as a percentage of GDP',
  description: 'The Maastricht criteria (also known as the convergence criteria) are the criteria that European Union member states are required to meet to enter the third stage of the Economic and Monetary Union of the European Union (EMU) and adopt the euro as their currency.',
  data: 'OECD.ECO.MAD,DSD_EO@DF_EO,1.2/HUN.GGFLMQ.A?startPeriod=2000&endPeriod=2024',
});

export const netGovernmentSavings = build({
  title: 'Net government savings',
  description: 'in HUF',
  data: 'OECD.ECO.MAD,DSD_EO@DF_EO,1.2/HUN.SAVG.A?startPeriod=2000&endPeriod=2024',
});

export const govOutlays = build({
  title: 'Other current outlay of general government',
  description: 'in HUF',
  data: 'OECD.ECO.MAD,DSD_EO@DF_EO,1.2/HUN.YPOTG.A?startPeriod=2000&endPeriod=2024',
});

export const taxesReceivedByGovernment = build({
  title: 'Total direct taxes received by general government',
  description: 'in HUF',
  data: 'OECD.ECO.MAD,DSD_EO@DF_EO,1.2/HUN.TY+YPOTG.A?startPeriod=2000&endPeriod=2024',
});

export const totalExpenditure = build({
  title: 'Total expenditure of general government',
  description: 'in USD',
  data: 'OECD.ECO.MAD,DSD_EO@DF_EO,1.2/HUN.TEVD.A?startPeriod=2000&endPeriod=2024',
});

export const workingAgePopulation = build({
  title: 'Working age population',
  data: 'OECD.ECO.MAD,DSD_EO@DF_EO,1.2/HUN.POPS1574.A?startPeriod=2000&endPeriod=2024',
});

export const taxesOnHouseholds = build({
  title: 'Direct taxes on households',
  data: 'OECD.ECO.MAD,DSD_EO@DF_EO,1.2/HUN.TYH.A?startPeriod=2000&endPeriod=2024',
});

export const governmentEmployment = build({
  title: 'General government employment',
  data: 'OECD.ECO.MAD,DSD_EO@DF_EO,1.2/HUN.EG.A?startPeriod=2000&endPeriod=2024',
});

export const totalPopulation = build({
  title: 'Total population',
  data: 'OECD.ECO.MAD,DSD_EO@DF_EO,1.2/HUN.POP.A?startPeriod=2000&endPeriod=2024',
});

export const centralBankKeyInterestRate = build({
  title: 'Central bank key interest rate',
  data: 'OECD.ECO.MAD,DSD_EO@DF_EO,1.2/HUN.IRCB.A?startPeriod=2000&endPeriod=2024',
});