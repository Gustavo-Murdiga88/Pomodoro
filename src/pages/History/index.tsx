import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useCyclesContext } from "../../context/taskContext";
import {
  HistoryContainer,
  Table,
  TableContainer,
  Title,
  Status,
} from "./styles";

export function History() {
  const { cycles } = useCyclesContext();

  return (
    <HistoryContainer>
      <Title>Meu histórico</Title>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th> Tarefa </th>
              <th> Duração </th>
              <th> Início </th>
              <th> Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td> {cycle.timer} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.completedCycle ? (
                    <Status status="green">Concluída</Status>
                  ) : cycle.cycleInterrupted ? (
                    <Status status="red">Interrompido</Status>
                  ) : (
                    <Status status="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </HistoryContainer>
  );
}
