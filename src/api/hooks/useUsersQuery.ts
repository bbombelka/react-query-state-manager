import axios from 'axios';
import { useQuery } from 'react-query';

const POSTS_QUERY_KEY = 'USERS';

type User = { id: string; title: string; body: string };

export const useUsersQuery = () => {
  return useQuery<User[]>([POSTS_QUERY_KEY], () => axios.get('http://localhost:5001/users').then((res) => res.data));
};
