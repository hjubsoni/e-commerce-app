import React, { useState, useContext } from 'react';
import styled from 'styled-components/macro';
import { ChevronRight, X, Heart, Trash, User } from 'react-feather';
import MobileNavUser from '../MobileNavUser';
import { COLORS, QUERIES } from '../../variables';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user';
import { signOut } from 'firebase/auth';
import FirebaseContext from '../../context/firebase';

function MobileNav({ isOpen, onDismiss }) {
  const { user } = useContext(UserContext);
  const [userNav, setUserNav] = useState(false);
  const firebase = useContext(FirebaseContext);
  const logOut = () => {
    signOut(firebase.auth);
    setUserNav(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <MobileNavWrapper>
        <CloseButton onClick={onDismiss}>
          <X size="32" />
        </CloseButton>
        <MobileNavigation>
          {user ? (
            <UserButton onClick={() => setUserNav(true)}>
              <User size="32" />
              <UserText>Hi, {user.displayName}</UserText>
              <ChevronRight size="32" />
            </UserButton>
          ) : null}

          <PrimaryMobileNavigation>
            <MobileListItems>
              <MobileLink to={ROUTES.NEWRELEASES}>
                <LinkChild>New Releases</LinkChild>
                <ChevronRight size="32" />
              </MobileLink>
            </MobileListItems>
            <MobileListItems>
              <MobileLink to={ROUTES.MEN}>
                <LinkChild>Man</LinkChild>
                <ChevronRight size="32" />
              </MobileLink>
            </MobileListItems>
            <MobileListItems>
              <MobileLink to={ROUTES.WOMEN}>
                <LinkChild>Woman</LinkChild>
                <ChevronRight size="32" />
              </MobileLink>
            </MobileListItems>
            <MobileListItems>
              <MobileLink to={ROUTES.KIDS}>
                <LinkChild>Kids</LinkChild>
                <ChevronRight size="32" />
              </MobileLink>
            </MobileListItems>
            <MobileListItems>
              <MobileLink to={ROUTES.SALE}>
                <LinkChild>Sale</LinkChild>
                <ChevronRight size="32" />
              </MobileLink>
            </MobileListItems>
          </PrimaryMobileNavigation>
        </MobileNavigation>
        <Description>
          Become a Fresh Balance Member for the best products, inspiration and
          stories in sport.
        </Description>
        {user ? null : (
          <LoginsWrapper>
            <JoinsUsLink to={ROUTES.SIGNUP}>Join Us</JoinsUsLink>
            <LoginLink to={ROUTES.SIGNIN}>Sign In</LoginLink>
          </LoginsWrapper>
        )}

        <FavouritesAndBagWrapper>
          <FavouritesLinks to={ROUTES.FAVOURITES}>
            <Heart />
            <LinkText>Favourites</LinkText>
          </FavouritesLinks>
          <FavouritesLinks to={ROUTES.CART}>
            <Trash />
            <LinkText>Bag</LinkText>
          </FavouritesLinks>
        </FavouritesAndBagWrapper>
      </MobileNavWrapper>
      <MobileNavUser onDismiss={() => setUserNav(false)} isOpen={userNav}>
        <LogOutButton onClick={logOut}>Log Out</LogOutButton>
      </MobileNavUser>
    </>
  );
}

export default MobileNav;

const MobileNavWrapper = styled.div`
  background-color: ${COLORS.white};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 12px 24px 0px 24px;
  gap: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media ${QUERIES.tabletAndSmaller} {
    inset: 0% 0% 0% 60%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    inset: 0% 0% 0% 25%;
  }
`;

const CloseButton = styled.button`
  border: none;
  outline: none;
  background-color: ${COLORS.white};
  margin-left: auto;
  cursor: pointer;
`;

const MobileNavigation = styled.nav``;

const PrimaryMobileNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MobileListItems = styled.li``;

const MobileLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkChild = styled.span`
  font-size: 1.75rem;
  letter-spacing: -0.0125px;
`;

const Description = styled.p`
  color: ${COLORS.gray[300]};
  font-size: 1.5rem;
  letter-spacing: -0.015px;

  margin-top: 16px;
`;

const LoginsWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 32px;
`;

const JoinsUsLink = styled(Link)`
  color: ${COLORS.white};
  text-decoration: none;
  padding: 8px 16px;
  background-color: ${COLORS.black};
  font-size: 1.125rem;
  border-radius: 24px;
`;

const LoginLink = styled(Link)`
  color: ${COLORS.black};
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid ${COLORS.black};
  font-size: 1.125rem;
  border-radius: 24px;
`;

const FavouritesAndBagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
`;

const FavouritesLinks = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${COLORS.black};
  align-items: center;
  gap: 24px;
`;

const LinkText = styled.span`
  font-size: 1.125rem;
  letter-spacing: -0.125px;
`;
const UserButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-bottom: 24px;
  gap: 8px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const UserText = styled.span`
  margin-right: auto;
  font-size: 1.125rem;
  margin-top: 2px;
`;

const LogOutButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 35%;
  font-size: 1.125rem;
  background-color: transparent;
`;
