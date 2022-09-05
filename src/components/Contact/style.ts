import styled from "styled-components";

export const ContactContainer = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  img {
    width: calc(100% + 10px);
  }
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -3%;
  padding: 0 1rem;

  img {
    width: 50%;
  }

  @media ${(props) => props.theme.mobileM} {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 0 0.5rem;

    img {
      width: 100%;
    }
  }
`;

export const ContactInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-size: 1.5rem;
  }

  p,
  svg {
    font-size: 1.25rem;
  }

  div > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media ${(props) => props.theme.mobile} {
    strong {
      font-size: 1.25rem;
    }

    p,
    svg {
      font-size: 1rem;
    }
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 2rem;
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }

  @media ${(props) => props.theme.mobile} {
    svg {
      font-size: 1.5rem;
    }
  }
`;
