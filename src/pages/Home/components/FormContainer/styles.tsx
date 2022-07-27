import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  margin-top: 1rem;

  @media (max-width: 700px) {
    margin-top: 2rem;
    gap: 2rem;
  }
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

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    gap: 0.7rem;
  }
`;

const patternInput = styled.input`
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

  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const InputTask = styled(patternInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    visibility: hidden;
  }
`;
export const InputMinutesPerTask = styled(patternInput)`
  text-align: center;
  width: 3rem;

  @media (max-width: 700px) {
    flex: 1;
    width: 100%;
  }
`;

export const ButtonPattern = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme["gray-100"]};

  border-radius: 8px;
  height: 4rem;
  width: 100%;

  font-size: 1rem;
  line-height: 2rem;

  font-weight: bold;

  transition: background-color 0.4s;
`;

export const StartButton = styled(ButtonPattern)`
  background-color: ${(props) => props.theme["green-500"]};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
  &:disabled {
    opacity: 0.7;
  }
`;

export const StopButton = styled(ButtonPattern)`
  background-color: ${(props) => props.theme["red-500"]};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["red-700"]};
  }
  &:disabled {
    opacity: 0.7;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["red-500"]};
  }
`;
