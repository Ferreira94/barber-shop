import styled from "styled-components";

export const ArtistsContainer = styled.section`
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
  }

  strong {
    text-transform: uppercase;
    font-size: 0.625rem;
    padding: 0.7rem 1.4rem;
    border: 1px solid ${(props) => props.theme["gray-600"]};
    font-weight: 300;
    border-radius: 50%;
    margin-top: 0.5rem;
  }
`;

export const ImagesContainer = styled.div`
  margin-top: 7rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media ${(props) => props.theme.mobileM} {
    margin-top: 3rem;
  }

  > div {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }

  > img {
    height: 20rem;
    opacity: 0.0375;
    border-radius: 0.5rem;

    @media ${(props) => props.theme.tablet} {
      display: none;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  text-transform: uppercase;

  @media ${(props) => props.theme.mobileM} {
    gap: 0.5rem;
  }

  > div {
    opacity: 0.2;

    :hover {
      opacity: 1;
    }

    :nth-child(1) {
      margin-top: -5rem;

      @media ${(props) => props.theme.mobileM} {
        margin-top: -2rem;
      }
    }

    img {
      border-radius: 0.5rem;

      @media ${(props) => props.theme.mobileM} {
        max-height: 13rem;
      }

      @media ${(props) => props.theme.mobile} {
        max-height: 10rem;
      }
    }

    p {
      :nth-child(1) {
        font-weight: 700;

        @media ${(props) => props.theme.mobileM} {
          font-size: 0.875rem;
        }

        @media ${(props) => props.theme.mobile} {
          font-size: 0.625rem;
        }
      }

      :last-child {
        font-size: 0.625rem;
        margin: 0 0 0.5rem;

        @media ${(props) => props.theme.mobileM} {
          font-size: 0.5rem;
        }

        @media ${(props) => props.theme.mobile} {
          font-size: 0.375rem;
        }
      }
    }

    span {
      color: ${(props) => props.theme.primary};
    }
  }
`;
