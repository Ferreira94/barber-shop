import styled from "styled-components";

interface IDotProps {
  isActive: boolean;
}

export const ProductsContainer = styled.section`
  max-width: 66.875rem;
  padding: 0 3rem;
  margin: 0 auto 3rem;

  @media ${(props) => props.theme.tabletS} {
    padding: 0 0.5rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 0 1.5rem;
    position: relative;
    bottom: -1.325rem;

    @media ${(props) => props.theme.tabletS} {
      justify-content: center;
      bottom: 0.375rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    strong {
      text-transform: uppercase;
      font-size: 0.625rem;
      padding: 0.7rem 1.4rem;
      border: 1px solid ${(props) => props.theme["gray-600"]};
      font-weight: 300;
      border-radius: 50%;

      @media ${(props) => props.theme.tabletS} {
        display: none;
      }
    }
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.tabletS} {
    display: none;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: none;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      font-size: 3rem;
      cursor: pointer;
      color: ${(props) => props.theme.primary};

      :hover {
        opacity: 0.7;
      }
    }
  }

  strong {
    margin-top: 1rem;
    text-transform: uppercase;
    font-size: 0.625rem;
    padding: 0.7rem 1.4rem;
    border: 1px solid ${(props) => props.theme["gray-600"]};
    font-weight: 300;
    border-radius: 50%;
    display: none;
  }

  @media ${(props) => props.theme.tabletS} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    strong {
      display: block;
    }
  }
`;

export const DotsContainer = styled.div`
  max-width: 3rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const Dot = styled.div<IDotProps>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};
  cursor: ${(props) => (props.isActive ? "default" : "pointer")};
  opacity: ${(props) => (props.isActive ? 1 : 0.7)};

  :hover {
    opacity: 1;
  }
`;
