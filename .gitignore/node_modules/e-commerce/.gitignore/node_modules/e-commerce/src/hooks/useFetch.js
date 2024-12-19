import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setdata] = useState(null);
  const [fetching, setfetch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setdata(data));
      setfetch(false);
    };
    fetchData();
  }, [url]);

  return { data, fetching };
}

export default useFetch;
