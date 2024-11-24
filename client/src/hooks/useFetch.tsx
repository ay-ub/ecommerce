import { useEffect, useState } from "react";

function useFetch({
  url,
  options,
}: {
  url: string;
  options?: {
    method?: string;
    headers?: { [key: string]: string };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any;
  };
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const data = await response.json();

        setData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);
  return { loading, data };
}

export default useFetch;
