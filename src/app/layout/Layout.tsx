import { Link, Outlet } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import './Layout.css';

export const Layout = () => {
  return (
    <div className="app">
      <nav className="app__navigation">
        <ul className="app__menu">
          <li className="app__menu-item">
            <Link className="app__menu-link" to={'/' + AppRoute.home}>
              Home
            </Link>
          </li>
          <li className="app__menu-item">
            <Link className="app__menu-link" to={'/' + AppRoute.posts}>
              Posts paginated
            </Link>
          </li>
          <li className="app__menu-item">
            <Link className="app__menu-link" to={'/' + AppRoute.postsInifinite}>
              Posts inifinite
            </Link>
          </li>
          <li className="app__menu-item">
            <Link className="app__menu-link" to={'/' + AppRoute.time}>
              Time
            </Link>
          </li>
          <li className="app__menu-item">
            <Link className="app__menu-link" to={'/' + AppRoute.jokes}>
              Jokes
            </Link>
          </li>
        </ul>
      </nav>
      <main className="app__main">
        <Outlet />
      </main>
    </div>
  );
};
