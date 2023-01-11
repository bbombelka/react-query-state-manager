import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

export const POSTS_INFINITE_QUERY_KEY = 'posts-infinite';

export const useInfinitePostsQuery = () => {
  return useInfiniteQuery(
    POSTS_INFINITE_QUERY_KEY,
    ({ pageParam = 1 }) =>
      axios
        .get('http://localhost:5001/posts', {
          params: {
            _page: pageParam,
          },
        })
        .then((res) => {
          const nextPageNumber = res.headers['link'].includes('next')
            ? res.headers['link'].split('next')[0].match(/(\d+)(?!.*\d)/)[0]
            : null;

          return {
            nextPageNumber,
            posts: res.data,
          };
        }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPageNumber,
      refetchOnWindowFocus: false,
      staleTime: 30 * 1000,
    },
  );
};
