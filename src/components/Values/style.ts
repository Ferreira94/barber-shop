import styled from "styled-components";

export const ValuesContainer = styled.section`
  margin: 3rem 0;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.mobileM} {
    padding: 0 1rem;
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.25rem;
  }

  p {
    margin-top: 0.5rem;
    text-align: center;
    max-width: 25rem;
  }

  > div {
    display: flex;
    align-items: flex-end;
  }
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid;
  border-radius: 1rem;
  padding: 4rem 2rem;
  gap: 1rem;
  margin-top: 2rem;
  z-index: 2;
  background-color: ${(props) => props.theme.white};

  p {
    max-width: 15rem;
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.primary};
  }

  strong {
    text-transform: uppercase;
    font-size: 0.625rem;
    padding: 0.7rem 1.4rem;
    border: 1px solid ${(props) => props.theme["gray-600"]};
    font-weight: 300;
    border-radius: 50%;
    max-width: 11rem;
    margin: 0 auto;
  }

  div {
    height: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.primary};
      font-size: 1.5rem;
    }

    :hover {
      opacity: 0.7;
    }
  }
`;

export const SkeletonCard = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 1rem;
  padding: 4rem 2rem;
  gap: 2rem;
  max-height: 22rem;
  z-index: 1;

  div {
    background-color: ${(props) => props.theme["gray-500"]};
    height: 1rem;
    width: 12rem;
  }

  :nth-child(1) {
    transform: rotate(-15deg);
  }

  :last-child {
    transform: rotate(15deg);
  }

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;
