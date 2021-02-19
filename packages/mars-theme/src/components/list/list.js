import React, { useContext } from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import FadeIn from 'react-fade-in';
import { ThemeContext } from "../theme-context";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: ${darkTheme ? 'white' : 'black'};
`;


  return (
    <Container >
      <FadeIn>
        {/* If the list is a taxonomy, we render a title. */}
        {data.isTaxonomy && (
          <Header>
            <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
          </Header>
        )}

        {/* If the list is for a specific author, we render a title. */}
        {data.isAuthor && (
          <Header>
            Author: <b>{decode(state.source.author[data.id].name)}</b>
          </Header>
        )}

        {/* Iterate over the items of the list. */}
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <Item key={item.id} item={item} />;
        })}
        <Pagination />
      </FadeIn>
    </Container>
  );
};

export default connect(List);