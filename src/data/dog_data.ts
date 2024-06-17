import { queryOptions, useQuery } from "@tanstack/react-query";
import { makeGetDogFactsRequest, type DogBreed } from "../api/dogs";

type Options<TData, TSelect> = {
  select?: (data: TData) => TSelect;
  enabled?: boolean;
};

export const queryConfig = {
  all: <T = Array<DogBreed>>({
    select,
    enabled = true,
  }: Options<Array<DogBreed>, T> = {}) =>
    queryOptions({
      queryKey: ["dogs"],
      queryFn: makeGetDogFactsRequest,
      select,
      enabled,
    }),
} as const;

// ----- 📓 Query hooks 🪝
// ----------------------------

const selectListDogsSorted = (data: Array<DogBreed>) =>
  data.sort((a, b) => {
    if (a.attributes.name < b.attributes.name) {
      return -1;
    }
    if (a.attributes.name < b.attributes.name) {
      return 1;
    }
    return 0;
  });

export function useListDogs() {
  return useQuery(queryConfig.all({ select: selectListDogsSorted }));
}
