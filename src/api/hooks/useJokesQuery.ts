import axios from 'axios';
import { useQuery } from 'react-query';

export const JOKES_QUERY_KEY = 'JOKES';

export const useJokesQuery = () => {
  return useQuery(
    [JOKES_QUERY_KEY],
    () =>
      axios
        .get('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json',
          },
        })
        .then((res) => res.data),
    {
      placeholderData: {
        joke: 'Why is Peter Pan always flying? Because he Neverlands.',
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      // keepPreviousData: true, // this makes sure no api calls are made when changing pages
    },
  );
};
