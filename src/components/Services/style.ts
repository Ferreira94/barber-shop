import styled from "styled-components";

interface IItemContentProps {
  reverse?: boolean;
}

export const ServicesContainer = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5rem;
  overflow: hidden;

  img {
    width: calc(100% + 10px);
  }

  @media ${(props) => props.theme.tablet} {
    margin-top: -5rem;
  }

  @media ${(props) => props.theme.mobileM} {
    margin-top: -3.5rem;
  }

  @media ${(props) => props.theme.mobile} {
    margin-top: -5.375rem;
  }
`;

export const ServicesContent = styled.div`
  padding: 0 6rem;
  margin: 2rem 0 3rem;
  max-width: 66.875rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media ${(props) => props.theme.tablet} {
    padding: 0 2rem;
  }

  @media ${(props) => props.theme.mobileM} {
    padding: 0 0.5rem;
  }
`;

export const ItemContent = styled.div<IItemContentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  div {
    max-width: 50%;
    text-align: ${(props) => (props.reverse ? "left" : "right")};
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.reverse ? "flex-start" : "flex-end")};
    gap: 0.875rem;

    strong {
      text-transform: uppercase;
      margin-left: 0.375rem;
      font-size: 1.5rem;
      color: ${(props) => props.theme.primary};
      font-family: "Inconsolata";
    }

    p {
      line-height: 1.125rem;
    }

    div {
      padding: 0.8rem 1rem;
      border: 1px solid ${(props) => props.theme["gray-600"]};
      border-radius: 50%;
      text-align: center;

      p {
        text-transform: uppercase;
        font-size: 0.625rem;
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    gap: 2rem;
  }

  @media ${(props) => props.theme.mobileM} {
    flex-direction: ${(props) => (props.reverse ? "column" : "column-reverse")};

    div {
      max-width: 100%;
      text-align: center;
      align-items: center;

      img {
        max-width: 15rem;
      }
    }
  }
`;
