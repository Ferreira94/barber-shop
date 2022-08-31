import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primary};
  padding: 3rem 6rem;

  @media ${(props) => props.theme.laptop} {
    padding: 1.5rem 3rem;
  }

  @media ${(props) => props.theme.mobileM} {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem 2rem;
  }

  div {
    width: 50%;

    :first-child {
      h2 {
        font-size: 2rem;
        font-weight: 300;

        strong {
          font-weight: 400;
          color: ${(props) => props.theme["gray-100"]};
          text-decoration: underline;
        }
      }

      p {
        margin-top: 2rem;
        font-size: 1rem;
      }

      span {
        color: ${(props) => props.theme["gray-100"]};
        font-size: 1rem;
      }

      @media ${(props) => props.theme.tabletS} {
        h2 {
          font-size: 1.5rem;
        }
      }

      @media ${(props) => props.theme.mobileM} {
        p {
          margin-top: 0.5rem;
        }
      }
    }

    :last-child {
      p {
        width: 50%;
        margin: 0 auto;
        font-size: 1rem;
        color: ${(props) => props.theme["gray-900"]};
      }

      @media ${(props) => props.theme.tabletS} {
        p {
          width: 70%;
        }
      }

      @media ${(props) => props.theme.mobileM} {
        p {
          width: 100%;
        }
      }
    }

    @media ${(props) => props.theme.tabletS} {
      p {
        font-size: 0.875rem;
      }
    }

    @media ${(props) => props.theme.mobileM} {
      width: 100%;
    }
  }
`;
