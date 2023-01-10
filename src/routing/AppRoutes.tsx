import { Route, Routes } from 'react-router-dom';

import { Layout } from 'app/layout/Layout';
import { Home } from 'app/home/Home';
import { Posts } from 'app/posts/Posts';
import { Users } from 'app/users/Users';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.home} element={<Layout />}>
      <Route path={AppRoute.home} element={<Home />} />
      <Route path={AppRoute.posts} element={<Posts />} />
      <Route path={AppRoute.users} element={<Users />} />

      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);
