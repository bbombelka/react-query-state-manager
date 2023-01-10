import axios from 'axios';
import { useQuery } from 'react-query';

export const POSTS_QUERY_KEY = 'POSTS';

export type Post = { id: string; title: string; body: string; likes: number; vote: number };

export const usePostsQuery = ({ page }: { page: number }) => {
  return useQuery<Post[]>(
    [POSTS_QUERY_KEY, page],
    () =>
      axios
        .get('http://localhost:5001/posts', {
          params: {
            _page: page,
          },
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      // keepPreviousData: true, // this makes sure no api calls are made when changing pages
      staleTime: 30 * 1000,
    },
  );
};
