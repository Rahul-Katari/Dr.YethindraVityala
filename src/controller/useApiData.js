import { useState, useEffect } from "react";
import ApiService from "./apiService";

const useApiData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await ApiService.get(endpoint);
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    // Clean up function if needed
    return () => {
      // Cleanup code here
    };
  }, [endpoint]);

  return { data, loading, error };
};

export default useApiData;
