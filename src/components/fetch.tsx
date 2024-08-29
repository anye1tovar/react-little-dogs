import { useEffect, useState } from "react";

const AppFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageUrl, setImageUrl] = useState<string>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRandomDog();
  }, []);

  const getRandomDog = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (response.ok) {
        const dog = await response.json();
        setImageUrl(dog.message);
        setError(null);
      } else {
        setError("There was an error getting the little dog");
      }
    } catch {
      setError("There was an error getting the little dog");
    } finally {
      setIsLoading(false);
    }
  };

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
        <h1>{error}</h1>
        <button onClick={getRandomDog}>Try again</button>
      </div>
    );
  }

  return (
    <div className="fetch-dogs-container">
      <img src={imageUrl} alt="Little dog image" />
      <button onClick={getRandomDog}>
        More fetch!
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </div>
  );
};

export default AppFetch;
