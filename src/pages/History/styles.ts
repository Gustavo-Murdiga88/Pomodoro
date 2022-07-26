import styled from "styled-components";

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    padding: 0rem;
    padding-top: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme["gray-100"]};
  line-height: 1.6;

  font-weight: bold;
  margin-bottom: 2rem;
`;

export const TableContainer = styled.div`
  flex: 1;
  overflow: auto;
  max-height: calc(3.375rem * 9);

  @media (max-width: 700px) {
    max-height: 95%;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 40rem;
  text-align: left;
  vertical-align: middle;
  border-spacing: 0 0.3rem;

  tr > th {
    background-color: ${({ theme }) => theme["gray-600"]};
    height: 3.375rem;
    line-height: 1.6rem;

    font-size: 0.875rem;

    font-weight: bold;
  }

  tr > th:first-child {
    padding-left: 1.5rem;
    border-top-left-radius: 8px;
  }

  tr > th:last-child {
    padding-right: 1.5rem;
    border-top-right-radius: 8px;
  }

  tr > td {
    background-color: ${({ theme }) => theme["gray-700"]};
    height: 3.375rem;
    line-height: 1.6;
    font-size: 0.875rem;

    color: ${({ theme }) => theme["gray-100"]};
  }

  tr > td:first-child {
    padding-left: 1.5rem;
  }

  tr > td:last-child {
    padding-right: 1.5rem;
  }

  tr > th:first-child,
  td:first-child {
    width: 50%;
  }

  @media (max-width: 700px) {
    min-width: 30rem;
    tr > th:first-child,
    td:first-child {
      width: 30%;
    }
  }
`;

const STATUS_COLOR = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;

interface StatusTime {
  status: keyof typeof STATUS_COLOR;
}

export const Status = styled.span<StatusTime>`
  display: flex;
  align-items: center;
  flex-direction: row;

  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;

    border-radius: 50%;

    background-color: ${({ theme, status }) => theme[STATUS_COLOR[status]]};
  }
`;
