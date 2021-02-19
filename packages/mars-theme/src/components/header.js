import React, { useContext } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import ThemeToggle from "./theme-toggle";
import { ThemeContext } from "./theme-context";

const Header = ({ state }) => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const Container = styled.div`
  background: ${darkTheme ? '#282828' : 'white'};
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
  color: ${darkTheme ? 'white' : 'black'};
`;

const Description = styled.h4`
  margin: 0;
  color: black;
  margin-left: 2em;
  color: ${darkTheme ? 'white' : 'black'};

  @media screen and (max-width: 1025px) {
    margin-left: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
          <ThemeToggle />
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
