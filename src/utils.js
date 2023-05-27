export const options = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "bee08937eamsh3fb2411b663b08ep1b8b6cjsn85cf18593f77",
    "X-RapidAPI-Host": "openweather43.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
