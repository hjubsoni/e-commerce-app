import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import ReactLoader from './components/Loader';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
import { CartProvider } from 'react-use-cart';
import styled from 'styled-components/macro';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Men = lazy(() => import('./pages/Men'));
const Women = lazy(() => import('./pages/Women'));
const Kids = lazy(() => import('./pages/Kids'));
const Cart = lazy(() => import('./pages/Cart'));
const NewReleases = lazy(() => import('./pages/NewReleases'));
const Favourites = lazy(() => import('./pages/Favourites'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Sale = lazy(() => import('./pages/Sale'));
const Shoes = lazy(() => import('./pages/Shoes'));

export default function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <CartProvider>
        <Wrapper>
          <Router>
            <Suspense fallback={<ReactLoader />}>
              <Routes>
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                <Route path={ROUTES.MEN} element={<Men />} />
                <Route path={ROUTES.WOMEN} element={<Women />} />
                <Route path={ROUTES.KIDS} element={<Kids />} />
                <Route path={ROUTES.CART} element={<Cart />} />
                <Route path={ROUTES.NEWRELEASES} element={<NewReleases />} />
                <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
                <Route path={ROUTES.SIGNIN} element={<SignIn />} />
                <Route path={ROUTES.SIGNUP} element={<SignUp />} />
                <Route path={ROUTES.SALE} element={<Sale />} />
                <Route path={ROUTES.SHOE} element={<Shoes />} />
              </Routes>
            </Suspense>
          </Router>
        </Wrapper>
      </CartProvider>
    </UserContext.Provider>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
