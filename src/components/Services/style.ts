import styled from "styled-components";

export const ServicesContainer = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5rem;
  overflow: hidden;

  div {
    img {
      width: calc(100% + 10px);
    }
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
