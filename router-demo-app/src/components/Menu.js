import styled from 'styled-components';

export const Menu = styled.nav`
  grid-area: menu;

  background-color: gray;

  display: flex;
  align-items: center;
  padding-left: 10px;

  ul {
    list-style-type: none;
    padding: 0;
    margin :0;
  }

  ul > li {
    display: inline-block;
    padding: 4px;
  }

  ul > li > a {
    color: white;
    text-decoration: none;
  }

`;