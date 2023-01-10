import axios from 'axios';
import { useQuery } from 'react-query';

export const POSTS_QUERY_KEY = 'POSTS';

export type Post = { id: string; title: string; body: string; likes: number; vote: number };

export const usePostsQuery = () => {
  return useQuery<Post[]>([POSTS_QUERY_KEY], () => axios.get('http://localhost:5001/posts').then((res) => res.data), {
    refetchOnWindowFocus: false,
  });
};
