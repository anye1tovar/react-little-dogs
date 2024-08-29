import { useEffect } from "react";
import { useLazyGetRandomDogQuery } from "../services/dog.rtkquery.service";

const AppRtkQuery = () => {
  const [getRandomDog, { data, isLoading, error }] = useLazyGetRandomDogQuery();

  useEffect(() => {
    getRandomDog();
  }, []);

  if (isLoading) {
    return (
      <div className="fetch-dogs-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fetch-dogs-container">
        <h1>{error as string}</h1>
        <button onClick={() => getRandomDog()}>Try again</button>
      </div>
    );
  }

  return (
    <div className="fetch-dogs-container">
      <img src={data?.message} alt="Little dog image" />
      <button onClick={() => getRandomDog()}>
        More rtk query!
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </div>
  );
};

export default AppRtkQuery;
