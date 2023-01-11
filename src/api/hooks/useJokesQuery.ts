import axios from 'axios';
import { useQuery } from 'react-query';

export const JOKES_QUERY_KEY = 'JOKES';

export const useJokesQuery = ({ isEnabled }: { isEnabled: boolean }) => {
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
        joke: 'This is React Query local placeholder data',
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      enabled: isEnabled,
      // keepPreviousData: true, // this makes sure no api calls are made when changing pages
    },
  );
};
