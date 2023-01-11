import { useState } from 'react';

import { useJokesQuery } from 'api/hooks/useJokesQuery';

export const Jokes = () => {
  const [isQueryEnabled, setQueryEnabled] = useState(false);
  const { data, refetch } = useJokesQuery({ isEnabled: isQueryEnabled });

  return (
    <div>
      <button onClick={() => setQueryEnabled(true)}>Enable query</button> <br />
      <br />
      <button onClick={() => refetch()}>I want another one !</button>
      <h1>{JSON.stringify(data.joke)}</h1>
    </div>
  );
};
