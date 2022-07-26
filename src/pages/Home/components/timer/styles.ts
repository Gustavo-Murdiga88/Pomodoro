import styled from "styled-components";

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-family: "Roboto Mono", monospace;

  font-size: 10rem;
  line-height: 8rem;

  color: ${(props) => props.theme["gray-100"]};
  font-weight: bold;

  & div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
  }

  & span {
    align-items: center;
    border-radius: 8px;
    padding: 2.5rem 1rem;
    align-self: center;

    background-color: ${(props) => props.theme["gray-700"]};
  }

  @media (max-width: 700px) {
    flex-direction: column;
    font-size: 6rem;
    line-height: 4rem;
    gap: 0.3rem;
  }
`;

export const TimerSeparator = styled.div`
  color: ${(props) => props.theme["green-500"]};

  @media (max-width: 700px) {
    transform: rotate(90deg);
  }
`;
