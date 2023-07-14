import axios from "axios";
import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    return axios({
      url: requestConfig.url,
      method: requestConfig.method || "get",
      headers: requestConfig.headers || {},
      data: requestConfig.body ? requestConfig.body : null,
    })
      .then(() => {
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
