import styled from "styled-components";

export const ProductCardContainer = styled.div`
  color: ${(props) => props.theme.primary};
  font-weight: 700;

  img {
    border-radius: 6px;
    width: 13.325rem;
    box-shadow: 7px 7px 10px -3px rgba(0, 0, 0, 0.42);
  }

  div {
    width: 13.325rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${(props) => props.theme["gray-800"]};
      font-size: 0.75rem;
    }
  }
`;
