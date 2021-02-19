import React, { useState, useMemo } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import { ThemeContext } from "./theme-context"

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  const [darkTheme, setDarkTheme] = useState(false);

  const themeValue = useMemo(() => ({ darkTheme, setDarkTheme }));

  const globalStyles = css`
  body {
    background: ${darkTheme ? '#282828' : 'white'};
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: ${darkTheme ? 'white' : 'black'};
    
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: ${darkTheme ? '#282828' : 'white'};
  color: ${darkTheme ? 'white' : 'black'} !important;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;


  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <ThemeContext.Provider value={themeValue}>
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
      </ThemeContext.Provider>
    </>
  );
};

export default connect(Theme);