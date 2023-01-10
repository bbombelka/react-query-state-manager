import { usePostsQuery } from 'api/hooks/usePostsQuery';

import { Post } from './Post';

export const Posts = () => {
  const { data, isError, isLoading } = usePostsQuery();

  if (isLoading)
    return <div style={{ width: '100vw', height: '100vh', display: 'flex', margin: 'auto' }}>Loading . . . </div>;

  if (isError) return <div>Error page</div>;

  return (
    <div>
      {data?.map(({ title, body, id, likes, vote }) => (
        <Post id={id} key={id} body={body} title={title} likes={likes} vote={vote} />
      ))}
    </div>
  );
};
