import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 42rem;
  margin: 5rem auto;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  margin-top: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: stretch;
  flex-wrap: wrap;
  gap: 0.5rem;

  color: ${(props) => props.theme["gray-100"]};
  line-height: 1.6;
  font-size: 1rem;
  font-weight: bold;
`;

const Stabardinput = styled.input`
  border: 0;
  padding: 0 0 0 0.5rem;
  background-color: transparent;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  font-size: 1rem;

  &::placeholder {
    font-weight: bold;
    color: ${(props) => props.theme["gray-500"]};
  }

  &:focus {
    box-shadow: 0 0 0 0;
    border-bottom-color: ${(props) => props.theme["green-500"]};
  }
`;

export const InputTask = styled(Stabardinput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    visibility: hidden;
  }
`;
export const InputMinutesPerTask = styled(Stabardinput)`
  text-align: center;
  width: 3rem;
`;

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

  & span {
    align-items: center;
    border-radius: 8px;
    padding: 2.5rem 1rem;
    align-self: center;

    background-color: ${(props) => props.theme["gray-700"]};
  }
`;

export const StartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => props.theme["green-500"]};

  border-radius: 8px;
  height: 4rem;
  width: 100%;

  font-size: 1rem;
  line-height: 2rem;

  font-weight: bold;

  transition: background-color 0.4s;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["green-700"]};
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export const TimerSeparator = styled.div`
  color: ${(props) => props.theme["green-500"]};
`;
