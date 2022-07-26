import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  overflow: auto;

  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;

  border-radius: 8px;
  background-color: ${({ theme }) => theme["gray-800"]};

  @media (max-width: 700px) {
    height: 100vh;
    margin: 0;
    padding: 1.5rem;
    padding-bottom: 2rem;
    border-radius: 0px;
  }
`;
