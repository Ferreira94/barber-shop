import styled from "styled-components";

export const HomeContainer = styled.main``;

export const MenuMobile = styled.div`
  background-color: ${(props) => props.theme["gray-900"]};
  min-width: 100vw;
  height: 100vh;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  svg {
    position: absolute;
    right: 2rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  h4,
  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.white};
    font-weight: 300;
    transition: 0.2s;

    :hover {
      opacity: 0.7;
    }
  }

  div {
    h4 {
      color: ${(props) => props.theme.primary};
      font-weight: 700;
    }
  }
`;
