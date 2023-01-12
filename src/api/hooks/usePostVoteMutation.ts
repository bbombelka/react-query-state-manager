import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { POSTS_INFINITE_QUERY_KEY } from './useInfinitePostsQuery';
import { POSTS_QUERY_KEY } from './usePostsQuery';

export const usePostVoteMutation = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, number>(
    (newVote) => {
      return axios
        .patch<{ newVote: number }>(`http://localhost:5001/posts/${id}`, { vote: newVote })
        .then((res) => res.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([POSTS_QUERY_KEY]);
        queryClient.invalidateQueries([POSTS_INFINITE_QUERY_KEY]);
      },
    },
  );
};
