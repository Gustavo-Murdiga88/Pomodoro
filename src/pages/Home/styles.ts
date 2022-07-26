import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 42rem;
  margin: 5rem auto;

  @media (max-width: 700px) {
    margin: 0;
  }
`;
