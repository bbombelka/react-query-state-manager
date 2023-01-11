import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import { Post as PostType, POSTS_QUERY_KEY } from 'api/hooks/usePostsQuery';
import { POSTS_INFINITE_QUERY_KEY } from 'api/hooks/useInfinitePostsQuery';

type PostProps = PostType;

export const Post: FC<PostProps> = ({ id, title, body, vote }) => {
  const { mutateAsync: executeDeleteMutation } = useMutation(
    () => axios.delete(`http://localhost:5001/posts/${id}`).then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([POSTS_QUERY_KEY, POSTS_INFINITE_QUERY_KEY]);
      },
    },
  );
  const queryClient = useQueryClient();

  const { mutateAsync: voteMutation } = useMutation<unknown, unknown, number>(
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

  return (
    <div style={{ border: '1px solid gray', borderRadius: '4px', margin: '12px 0', padding: '16px' }}>
      <h1 style={{ fontSize: '20px' }}>{title}</h1>
      <p>{body}</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
        <button onClick={() => executeDeleteMutation()} style={{ marginLeft: '8px' }}>
          Delete this post
        </button>
        <button onClick={() => voteMutation(1)} disabled={vote === 1} style={{ marginLeft: '8px' }}>
          Like this post
        </button>
        <button onClick={() => voteMutation(-1)} disabled={vote === -1} style={{ marginLeft: '8px' }}>
          Unlike this post
        </button>
        <button disabled={vote === 0} onClick={() => voteMutation(0)} style={{ marginLeft: '8px' }}>
          Remove vote
        </button>
      </div>
      {Boolean(vote) && (
        <div style={{ marginTop: '12px', textAlign: 'right' }}>You {vote === 1 ? 'like' : 'dislike'} this post !</div>
      )}
    </div>
  );
};
