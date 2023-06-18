import { useState, useEffect } from "react";

export const useFetch = (URL, param) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, [param]);

  return data;
};
