const BASE_URL = "https://dogapi.dog/api/v2/breeds";

export type DogBreed = {
  id: string;
  type: "breed";
  attributes: {
    name: string;
    description: string;
    life: {
      max: number;
      min: number;
    };
    male_weight: {
      max: number;
      min: number;
    };
    female_weight: {
      max: number;
      min: number;
    };
    hypoallergenic: boolean;
  };
  relationships: {
    group: {
      data: {
        id: number;
        type: "group";
      };
    };
  };
};

export async function makeGetDogFactsRequest(): Promise<Array<DogBreed>> {
  const res = await fetch(BASE_URL);
  const json = await res.json();
  return json;
}
