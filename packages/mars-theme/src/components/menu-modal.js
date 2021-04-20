import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
            >
              {name}
            </MenuLink>
          ))}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background: white;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

  const MenuContent = styled.div`
  z-index: 3;
  margin: 0 auto;
  color: black;
`;

  const MenuLink = styled(Link)`
  width: auto;
  display: flex;
  justify-content: center;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  font-weight: bold;

  &:hover,
  &:focus {
    outline: none;
  }
  /* styles for active link */
  &[aria-current="page"] {
    font-weight: bold;
    border-bottom: 1px solid black;
  }
`;

export default connect(MenuModal);
