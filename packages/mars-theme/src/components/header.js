import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>- {state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: black;
  margin-left: 2em;

  @media screen and (max-width: 1025px) {
    margin-left: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
