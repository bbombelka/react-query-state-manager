import { Post } from 'app/posts/Post';
import { useInfinitePostsQuery } from 'api/hooks/useInfinitePostsQuery';

export const InfinitePosts = () => {
  const { data, isError, isLoading, hasNextPage, fetchNextPage } = useInfinitePostsQuery();

  if (isLoading)
    return <div style={{ width: '100vw', height: '100vh', display: 'flex', margin: 'auto' }}>Loading . . . </div>;

  if (isError) return <div>Error page</div>;

  return (
    <div>
      {data?.pages.map((page) =>
        page.posts.map(({ title, body, id, likes, vote }) => (
          <Post id={id} key={id} body={body} title={title} likes={likes} vote={vote} />
        )),
      )}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '24px' }}>
        {hasNextPage && <button onClick={() => fetchNextPage()}>Fetch next page</button>}
      </div>
    </div>
  );
};
