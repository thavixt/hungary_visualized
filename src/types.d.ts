export interface OECD_DATA {
  meta: Meta
  data: Data
  errors: any[]
}

export interface Meta {
  schema: string
  id: string
  prepared: string
  test: boolean
  contentLanguages: string[]
  sender: Sender
}

export interface Sender {
  id: string
  name: string
  names: Names
}

export interface Names {
  "en-US": string
}

export interface Data {
  dataSets: DataSet[]
  structures: Structure[]
}

export interface DataSet {
  structure: number
  action: string
  links: Link[]
  annotations: number[]
  dimensionGroupAttributes: DimensionGroupAttributes
  series: Series
}

export interface Link {
  urn: string
  rel: string
}

export interface DimensionGroupAttributes {
  // "~:~:~:~:~:~:~:~:~:~": number[]
  string: number[]
}

export interface Series {
  [key: string]: SeriesDetails
}

export interface SeriesDetails {
  attributes: number[]
  annotations: any[]
  observations: Observations
}

export interface Observations {
  "0": number[]
  "1": number[]
  "2": number[]
  "3": number[]
  "4": number[]
  "5": number[]
  "6": number[]
  "7": number[]
  "8": number[]
  "9": number[]
  "10": number[]
  "11": number[]
  "12": number[]
  "13": number[]
  "14": number[]
  "15": number[]
  "16": number[]
  "17": number[]
  "18": number[]
  "19": number[]
  "20": number[]
  "21": number[]
  "22": number[]
  "23": number[]
}

export interface Structure {
  name: string
  names: Names2
  description: string
  descriptions: Descriptions
  dimensions: Dimensions
  attributes: Attributes
  annotations: Annotation[]
  dataSets: number[]
}

export interface Names2 {
  en: string
}

export interface Descriptions {
  en: string
}

export interface Dimensions {
  dataSet: any[]
  series: Series2[]
  observation: Observation[]
}

export interface Series2 {
  id: string
  name: string
  names: Names3
  keyPosition: number
  roles: string[]
  values: Value[]
}

export interface Names3 {
  en: string
}

export interface Value {
  id: string
  order: number
  name: string
  names: Names4
  annotations?: number[]
  parent?: string
}

export interface Names4 {
  en: string
}

export interface Observation {
  id: string
  name: string
  names: Names5
  keyPosition: number
  roles: string[]
  values: Value2[]
}

export interface Names5 {
  en: string
}

export interface Value2 {
  start: string
  end: string
  id: string
  name: string
  names: Names6
}

export interface Names6 {
  "en-US": string
}

export interface Attributes {
  dataSet: any[]
  dimensionGroup: any[]
  series: Series3[]
  observation: Observation2[]
}

export interface Series3 {
  id: string
  name: string
  names: Names7
  roles: string[]
  relationship: Relationship
  values: Value3[]
}

export interface Names7 {
  en: string
}

export interface Relationship {
  dimensions: string[]
}

export interface Value3 {
  id: string
  order: number
  name: string
  names: Names8
}

export interface Names8 {
  en: string
}

export interface Observation2 {
  id: string
  name: string
  names: Names9
  roles: string[]
  relationship: Relationship2
  values: Value4[]
}

export interface Names9 {
  en: string
}

export interface Relationship2 {
  observation: Observation3
}

export interface Observation3 {}

export interface Value4 {
  id: string
  order: number
  name: string
  names: Names10
}

export interface Names10 {
  en: string
}

export interface Annotation {
  type: string
  text?: string
  texts?: Texts
  id?: string
  title?: string
}

export interface Texts {
  en: string
}
