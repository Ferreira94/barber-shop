import styled from "styled-components";

export const IntroductionContainer = styled.section`
  max-width: 100vw;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url("/background.svg");
  padding: 2rem 3rem 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10%;
    text-transform: uppercase;

    h4 {
      cursor: pointer;
      transition: opacity 0.2s;

      :hover {
        opacity: 0.7;
      }
    }

    div {
      display: flex;
      gap: 3rem;
      color: ${(props) => props.theme.white};

      h4 {
        font-weight: 300;
      }
    }

    > h4 {
      color: ${(props) => props.theme.primary};
    }

    strong {
      cursor: pointer;
      text-transform: uppercase;
      color: ${(props) => props.theme.primary};
      border: 1px solid;
      padding: 0.8rem 1.5rem;
      border-radius: 50%;
      display: none;

      :hover {
        opacity: 0.7;
      }
    }

    @media ${(props) => props.theme.tablet} {
      h4,
      div {
        display: none;
      }

      strong {
        display: block;
      }
    }
  }

  section {
    margin-bottom: 20%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: ${(props) => props.theme.white};
    align-items: center;

    div {
      font-size: 1.25rem;

      h2 {
        font-weight: 300;
        text-transform: uppercase;
        font-size: 3.375rem;

        :nth-child(2) {
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: ${(props) => props.theme.primary};
        }
      }

      :last-child {
        border: 1px solid ${(props) => props.theme.white};
        padding: 1.5rem 4rem;
        border-radius: 50%;

        p {
          font-size: 1.5rem;
          text-transform: uppercase;
          font-family: "Josefin Slab";
        }
      }
    }

    p {
      font-family: "Inconsolata";

      :nth-child(1) {
        font-family: "Josefin Slab";
      }
    }

    span {
      font-weight: 700;
      color: ${(props) => props.theme.primary};
    }
  }

  @media ${(props) => props.theme.tablet} {
    header {
      margin-bottom: 5%;
    }

    section {
      gap: 1rem;

      div {
        p {
          font-size: 1rem;
        }

        h2 {
          font-size: 2.5rem;
        }

        :last-child {
          padding: 0.6rem 1.2rem;

          p {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media ${(props) => props.theme.mobileM} {
    padding: 0.5rem;

    header {
      margin-bottom: 3%;

      img {
        width: 4rem;
      }

      strong {
        font-size: 0.875rem;
        padding: 0.6rem 1.2rem;
      }
    }

    section {
      gap: 0.375rem;
      margin-bottom: 13.25%;

      div {
        h2 {
          font-size: 1.5rem;
        }

        :last-child {
          padding: 0.6rem 1.2rem;
        }

        :last-child {
          padding: 0.5rem 1rem;

          p {
            font-size: 0.875rem;
          }
        }
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0.5rem;

    header {
      margin-bottom: 2%;

      img {
        width: 3rem;
      }

      strong {
        font-size: 0.5rem;
        padding: 0.4rem 0.8rem;
      }
    }

    section {
      gap: 0.125rem;
      margin-bottom: 30%;

      p,
      span {
        font-size: 0.875rem;
      }

      div {
        h2 {
          font-size: 1rem;
        }

        :last-child {
          padding: 0.5rem 1rem;
        }

        :last-child {
          padding: 0.3rem 0.6rem;

          p {
            font-size: 0.5rem;
          }
        }
      }
    }
  }
`;
