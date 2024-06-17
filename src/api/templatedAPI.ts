const BASE_URL = "https://INSERT_BASE_URL/api/v1";

export type MyType = {
  id: string;
  value: string;
};

async function makeListRequest(): Promise<Array<MyType>> {
  const res = await fetch(BASE_URL);
  const json = await res.json();
  return json;
}

export type MakeGetRequest = { id: string };
async function makeGetRequest({ id }: MakeGetRequest): Promise<MyType> {
  const res = await fetch(`${BASE_URL}/${id}`);
  const json = await res.json();
  return json;
}

export type MakeCreateRequest = { value: string };
async function makeCreateRequest({
  value,
}: MakeCreateRequest): Promise<MyType> {
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    body: JSON.stringify({ value }),
  });
  const json = await res.json();
  return json;
}

export type MakeDeleteRequest = { id: string };
async function makeDeleteRequest({ id }: MakeDeleteRequest): Promise<null> {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  const json = await res.json();
  return json;
}

export type MakeUpdateRequest = { id: string; value: string };
async function makeUpdateRequest({
  id,
  value,
}: MakeUpdateRequest): Promise<MyType> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ value }),
  });
  const json = await res.json();
  return json;
}

export const templatedAPI = {
  create: makeCreateRequest,
  list: makeListRequest,
  get: makeGetRequest,
  delete: makeDeleteRequest,
  update: makeUpdateRequest,
};
