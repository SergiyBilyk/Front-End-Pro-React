import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Fetch failed");
        }

        const data = await res.json();

        setData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
