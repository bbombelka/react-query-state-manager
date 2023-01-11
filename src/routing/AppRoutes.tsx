import { Route, Routes } from 'react-router-dom';

import { Layout } from 'app/layout/Layout';
import { Home } from 'app/home/Home';
import { Posts } from 'app/posts/Posts';
import { InfinitePosts } from 'app/posts-infinite/InfinitePosts';
import { Time } from 'app/time/Time';
import { Jokes } from 'app/jokes/Jokes';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.home} element={<Layout />}>
      <Route path={AppRoute.home} element={<Home />} />
      <Route path={AppRoute.posts} element={<Posts />} />
      <Route path={AppRoute.time} element={<Time />} />
      <Route path={AppRoute.jokes} element={<Jokes />} />
      <Route path={AppRoute.postsInifinite} element={<InfinitePosts />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);
