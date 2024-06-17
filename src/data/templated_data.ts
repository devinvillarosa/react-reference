import {
  UseMutationResult,
  UseQueryResult,
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  type MyType,
  type MakeCreateRequest,
  type MakeDeleteRequest,
  type MakeUpdateRequest,
  templatedAPI,
} from "../api/templatedAPI";

type Options<TData, TSelect> = {
  select?: (data: TData) => TSelect;
  enabled?: boolean;
};

export const queryConfig = {
  all: <T = Array<MyType>>({
    select,
    enabled = true,
  }: Options<Array<MyType>, T> = {}) =>
    queryOptions({
      queryKey: ["my_type"],
      queryFn: templatedAPI.list,
      select,
      enabled,
    }),
} as const;

// ----- 📓 Query hooks 🪝
// ----------------------------

export function useListResourcesTemplate() {
  return useQuery(queryConfig.all());
}

const selectById = (data: Array<MyType>, id: string) =>
  data.find((resource) => resource.id === id);
export function useGetResourceTemplate(
  id: string
): UseQueryResult<MyType, Error> {
  return useQuery(queryConfig.all(), {
    select: (data: Array<MyType>) => selectById(data, id),
  });
}

// ----- ✍🏼 Mutation hooks 🪝
// ----------------------------

export function useCreateResourcetemplate(): UseMutationResult<
  MyType,
  Error,
  MakeCreateRequest
> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: templatedAPI.create,
    onSuccess: (response) => {
      queryClient.setQueryData(
        queryConfig.all().queryKey,
        (cached?: Array<MyType>) => {
          return [...(cached ?? []), response];
        }
      );
    },
  });
}

export function useUpdateResourcetemplate(): UseMutationResult<
  MyType,
  Error,
  MakeUpdateRequest
> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: templatedAPI.update,
    onSuccess: (response) => {
      queryClient.setQueryData(
        queryConfig.all().queryKey,
        (cached?: Array<MyType>) => {
          return [...(cached ?? [])].map((data) =>
            data.id === response.id ? response : data
          );
        }
      );
    },
  });
}

export function useDeleteResourcetemplate(): UseMutationResult<
  null,
  Error,
  MakeDeleteRequest
> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: templatedAPI.delete,
    onSuccess: (_, body) => {
      queryClient.setQueryData(
        queryConfig.all().queryKey,
        (cached?: Array<MyType>) => {
          return [...(cached ?? [])].filter((data) => data.id !== body.id);
        }
      );
    },
  });
}
