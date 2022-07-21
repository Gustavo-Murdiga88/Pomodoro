import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & nav {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  & nav a {
    height: 3rem;
    width: 3rem;

    color: ${(props) => props.theme["gray-100"]};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    box-shadow: 0 0 0 0;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${(props) => props.theme["green-500"]};
    }
  }

  .active {
    border-bottom-color: ${(props) => props.theme["green-500"]};
  }
`;
