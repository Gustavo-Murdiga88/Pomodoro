import {
  HistoryContainer,
  Table,
  TableContainer,
  Title,
  Status,
} from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <Title>Meu histórico</Title>

      <TableContainer>
        <Table>
          <tr>
            <th> Tarefa </th>
            <th> Duração </th>
            <th> Início </th>
            <th> Status</th>
          </tr>
          <tbody>
            <tr>
              <td> Primeira tarefa</td>
              <td> 60:00</td>
              <td> Há cerca de dois meses </td>
              <td>
                <Status status="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td> Primeira tarefa</td>
              <td> 60:00</td>
              <td> Há cerca de dois meses </td>
              <td>
                <Status status="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td> Primeira tarefa</td>
              <td> 60:00</td>
              <td> Há cerca de dois meses </td>
              <td>
                <Status status="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td> Primeira tarefa</td>
              <td> 60:00</td>
              <td> Há cerca de dois meses </td>
              <td>
                <Status status="red">Interrompida</Status>
              </td>
            </tr>
            <tr>
              <td> Primeira tarefa</td>
              <td> 60:00</td>
              <td> Há cerca de dois meses </td>
              <td>
                <Status status="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td> Primeira tarefa</td>
              <td> 60:00</td>
              <td> Há cerca de dois meses </td>
              <td>
                <Status status="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td> Primeira tarefa</td>
              <td> 60:00</td>
              <td> Há cerca de dois meses </td>
              <td>
                <Status status="green">Concluída</Status>
              </td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </HistoryContainer>
  );
}
