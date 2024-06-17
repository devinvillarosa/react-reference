import { useListDogs } from "../data/dog_data";
import { useManualListDogs } from "../data/manual_dog_data";

export function DogsList(): JSX.Element {
  const { data, isError, isSuccess } = useListDogs();

  if (isSuccess) {
    return (
      <ul>
        {data.map((dog) => (
          <li key={dog.id}>{dog.attributes.name}</li>
        ))}
      </ul>
    );
  }

  if (isError) {
    return <p>Error! Something went wrong loading list of dogs</p>;
  }

  return <p>...loading list of dogs</p>;
}

export function DogsManualList(): JSX.Element {
  const { data, status } = useManualListDogs();

  if (status === "success" && data) {
    return (
      <ul>
        {data.map((dog) => (
          <li key={dog.id}>{dog.attributes.name}</li>
        ))}
      </ul>
    );
  }

  if (status === "error") {
    return <p>Error! Something went wrong loading list of dogs</p>;
  }

  return <p>...loading list of dogs</p>;
}
