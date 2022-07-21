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
`;
