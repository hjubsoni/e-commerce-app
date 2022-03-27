import React from 'react';
import SuperHeader from '../components/SuperHeader';
import Header from '../components/Header/Header';
import Shoe from '../components/Shoe';
import { AllShoes } from '../data/data';
import styled from 'styled-components/macro';
import Footer from '../components/Footer';
import { COLORS, QUERIES } from '../variables';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

function Sale() {
  const getShoesOnSale = AllShoes.filter(({ salePrice }) => {
    return salePrice !== null;
  });

  return (
    <>
      <SuperHeader />
      <Header />
      <MaxWidthWrapper>
        <DirectionWrapper>
          <DirectionLinks to={ROUTES.DASHBOARD}>Home</DirectionLinks>
          <DirectionLinks to={ROUTES.SALE}>Sale</DirectionLinks>
        </DirectionWrapper>
        <NewReleasesWrapper>
          {getShoesOnSale.map((boot) => {
            return (
              <ShoeWrapper key={boot.index}>
                <Shoe {...boot} />
              </ShoeWrapper>
            );
          })}
        </NewReleasesWrapper>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}

export default Sale;

const MaxWidthWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 32px;
`;

const DirectionWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  gap: 24px;
  margin-left: 0;
  margin-bottom: 32px;

  position: relative;

  &:before {
    content: '/';
    position: absolute;
    left: 67px;
    color: ${COLORS.gray[300]};
    font-size: 1.4rem;
  }
`;

const DirectionLinks = styled(Link)`
  text-decoration: none;
  color: ${COLORS.gray[300]};
  font-size: 1.4rem;

  &:hover {
    color: ${COLORS.gray[700]};
    transition: 300ms ease-in;
  }
`;

const NewReleasesWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
  gap: 32px;
  max-width: 1920px;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const ShoeWrapper = styled.div`
  min-width: 275px;

  @media ${QUERIES.tabletAndSmaller} {
    min-width: 225px;
  }
`;
