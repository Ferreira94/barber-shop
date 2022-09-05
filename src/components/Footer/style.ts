import styled from "styled-components";

export const FooterContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.footer};
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0 0.5rem;
  color: ${(props) => props.theme.white};
  font-size: 1.25rem;
`;

export const FooterContent = styled.section`
  width: 100%;
  display: flex;
  padding: 0 10rem;
  justify-content: space-between;
  gap: 4rem;

  div {
    line-height: 1.5rem;
    max-width: 19rem;

    span {
      display: block;
    }

    p {
      cursor: pointer;

      :hover {
        opacity: 0.7;
      }
    }

    :first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      img {
        width: 5rem;
      }
    }

    :nth-child(2) {
      @media ${(props) => props.theme.tabletS} {
        display: none;
      }
    }
  }

  @media ${(props) => props.theme.laptop} {
    padding: 0 5rem;
  }

  @media ${(props) => props.theme.mobileM} {
    flex-direction: column;
    align-items: center;
    padding: 0 0.5rem;
    gap: 1rem;
    text-align: center;
  }
`;
