import { useState } from 'react';

import { usePostsQuery } from 'api/hooks/usePostsQuery';

import { Post } from './Post';

export const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isError, isLoading } = usePostsQuery({ page: currentPage });

  if (isLoading)
    return <div style={{ width: '100vw', height: '100vh', display: 'flex', margin: 'auto' }}>Loading . . . </div>;

  if (isError) return <div>Error page</div>;

  return (
    <div>
      {data?.map(({ title, body, id, likes, vote }) => (
        <Post id={id} key={id} body={body} title={title} likes={likes} vote={vote} />
      ))}
      <div>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
            <li
              key={page}
              style={{ color: currentPage === page ? 'grey' : 'blue', cursor: 'pointer' }}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
