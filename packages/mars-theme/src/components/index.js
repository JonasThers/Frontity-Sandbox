import React, { useState } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

const globalStyles = css`

  body {
    background: white;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: black;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  .css-3gpvvh-NavItem > a {
    color: black !important;
  }

  .css-3gpvvh-NavItem > a[aria-current="page"] {
    border-bottom: 1px solid black !important;
  }
`;

  const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: white;
  color: black !important;
`;

  const Main = styled.div`
  display: flex;
  justify-content: center;
`;

export default connect(Theme);