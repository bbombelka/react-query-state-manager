import { useJokesQuery } from 'api/hooks/useJokesQuery';

export const Jokes = () => {
  const { data, refetch } = useJokesQuery();

  return (
    <div>
      <h1>{JSON.stringify(data.joke)}</h1>
      <button onClick={() => refetch()}>I want another one !</button>
    </div>
  );
};
