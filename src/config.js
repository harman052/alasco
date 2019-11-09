export const CURRENCIES = [
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" },
  { label: "JPY", value: "JPY" }
];
const BASE_URL = "https://free.currconv.com/api/v7/convert?q=";
const KEY = "89948ca96c480e25087f";
export const header = "Currency Converter";
export const endpointPath = (from, to) =>
  `${BASE_URL}${from}_${to}&compact=ultra&apiKey=${KEY}`;
