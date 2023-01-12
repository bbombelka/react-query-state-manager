import { FC } from 'react';

import { Post as PostType } from 'api/hooks/usePostsQuery';
import { useDeletePostMutation } from 'api/hooks/useDeletePostMutation';
import { usePostVoteMutation } from 'api/hooks/usePostVoteMutation';

type PostProps = PostType;

export const Post: FC<PostProps> = ({ id, title, body, vote }) => {
  const { mutateAsync: executeDeleteMutation } = useDeletePostMutation({ id });
  const { mutateAsync: voteMutation } = usePostVoteMutation({ id });

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
