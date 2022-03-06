import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import ReactLoader from './components/Loader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Man = lazy(() => import('./pages/Man'));
const Woman = lazy(() => import('./pages/Woman'));
const Kids = lazy(() => import('./pages/Kids'));
const Cart = lazy(() => import('./pages/Cart'));
const NewReleases = lazy(() => import('./pages/NewReleases'));
const Favourites = lazy(() => import('./pages/Favourites'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Sale = lazy(() => import('./pages/Sale'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<ReactLoader />}>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.MAN} element={<Man />} />
          <Route path={ROUTES.WOMAN} element={<Woman />} />
          <Route path={ROUTES.KIDS} element={<Kids />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.NEWRELEASES} element={<NewReleases />} />
          <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.SALE} element={<Sale />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
