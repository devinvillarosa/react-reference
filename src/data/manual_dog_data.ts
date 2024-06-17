import { useState, useEffect } from "react";

import { makeGetDogFactsRequest, type DogBreed } from "../api/dogs";

type Status = "success" | "pending" | "error";

type UseListDogs = {
  status: Status;
  data: Array<DogBreed> | undefined;
  error: Error | undefined;
};

export function useManualListDogs(): UseListDogs {
  const [status, setStatus] = useState<Status>("pending");
  const [data, setData] = useState<Array<DogBreed> | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    async function startFetch() {
      setStatus("pending");
      try {
        const res = await makeGetDogFactsRequest();
        setStatus("success");
        setData(res);
      } catch (err) {
        setError(err as Error);
        setStatus("error");
      }
    }
    startFetch();
  }, []);

  return {
    data,
    error,
    status,
  };
}
