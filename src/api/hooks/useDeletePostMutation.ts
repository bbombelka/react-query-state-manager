import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { POSTS_INFINITE_QUERY_KEY } from './useInfinitePostsQuery';
import { POSTS_QUERY_KEY } from './usePostsQuery';

export const useDeletePostMutation = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  return useMutation(() => axios.delete(`http://localhost:5001/posts/${id}`).then((res) => res.data), {
    onSuccess: () => {
      queryClient.invalidateQueries([POSTS_QUERY_KEY]);
      queryClient.invalidateQueries([POSTS_INFINITE_QUERY_KEY]);
    },
  });
};
