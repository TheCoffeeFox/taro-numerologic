import { Table, Text } from "@mantine/core";
import { calculate } from "../model/calculate";
import { getCardName } from "../model/getCardName";
import { pluto } from "../model/pluto";

export function ResultTable({ date }: { date: string }) {
  const result = calculate(date);

  return (
    <Table withColumnBorders withRowBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Материя</Table.Th>
          <Table.Th>Идея</Table.Th>
          <Table.Th>Индивид</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td key={1}>
            <Text>
              [{result.M.X}] {getCardName(result.M.X)}
            </Text>
          </Table.Td>
          <Table.Td key={9}>
            <Text>
              [{result.I.X}] {getCardName(result.I.X)}
            </Text>
          </Table.Td>
          <Table.Td key={17}>
            <Text>
              [{result.O.X}] {getCardName(result.O.X)}
            </Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={2}>
            <Text>
              [{result.M.Y}] {getCardName(result.M.Y)}
            </Text>
          </Table.Td>
          <Table.Td key={10}>
            <Text>
              [{result.I.Y}] {getCardName(pluto(result.I.Y))}
            </Text>
          </Table.Td>
          <Table.Td key={18}>
            <Text>
              [{result.O.Y}] {getCardName(result.O.Y)}
            </Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={3}>
            <Text>
              [{result.M.Z1}] {getCardName(result.M.Z1)}
            </Text>
          </Table.Td>
          <Table.Td key={11}>
            <Text>
              [{result.I.Z1}] {getCardName(result.I.Z1)}
            </Text>
          </Table.Td>
          <Table.Td key={19}>
            <Text>
              [{result.O.Z1}] {getCardName(result.O.Z1)}
            </Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={4}>
            <Text>
              [{result.M.Z2}] {getCardName(result.M.Z2)}
            </Text>
          </Table.Td>
          <Table.Td key={12}>
            <Text>
              [{result.I.Z2}] {getCardName(result.I.Z2)}
            </Text>
          </Table.Td>
          <Table.Td key={20}>
            <Text>
              [{result.O.Z2}] {getCardName(result.O.Z2)}
            </Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={5}>
            <Text>
              [{result.M.Zx1}] {getCardName(result.M.Zx1)}
            </Text>
          </Table.Td>
          <Table.Td key={13}>
            <Text>
              [{result.I.Zx1}] {getCardName(result.I.Zx1)}
            </Text>
          </Table.Td>
          <Table.Td key={21}>
            <Text>
              [{result.O.Zx1}] {getCardName(result.O.Zx1)}
            </Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={6}>
            <Text>
              [{result.M.Zy1}] {getCardName(result.M.Zy1)}
            </Text>
          </Table.Td>
          <Table.Td key={14}>
            <Text>
              [{result.I.Zy1}] {getCardName(result.I.Zy1)}
            </Text>
          </Table.Td>
          <Table.Td key={22}>
            <Text>
              [{result.O.Zy1}] {getCardName(result.O.Zy1)}
            </Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={7}>
            <Text>
              [{result.M.Zx2}] {getCardName(result.M.Zx2)}
            </Text>
          </Table.Td>
          <Table.Td key={16}>
            <Text>
              [{result.I.Zx2}] {getCardName(result.I.Zx2)}
            </Text>
          </Table.Td>
          <Table.Td key={23}>
            <Text>
              [{result.O.Zx2}] {getCardName(result.O.Zx2)}
            </Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={8}>
            <Text>
              [{result.M.Zy2}] {getCardName(result.M.Zy2)}
            </Text>
          </Table.Td>
          <Table.Td key={17}>
            <Text>
              [{result.I.Zy2}] {getCardName(result.I.Zy2)}
            </Text>
          </Table.Td>
          <Table.Td key={24}>
            <Text>
              [{result.O.Zy2}] {getCardName(result.O.Zy2)}
            </Text>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
