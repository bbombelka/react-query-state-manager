import axios from 'axios';
import { useQuery } from 'react-query';

export const TIME_QUERY_KEY = 'TIME';

export const useTimeQuery = () => {
  return useQuery(
    [TIME_QUERY_KEY],
    () => axios.get('http://worldtimeapi.org/api/timezone/Europe/Warsaw', {}).then((res) => res.data),
    {
      placeholderData: { datetime: '' }, // how to manage initial state !!!
      refetchInterval: 1000,
      // keepPreviousData: true, // this makes sure no api calls are made when changing pages
    },
  );
};
