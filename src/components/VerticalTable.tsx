import { Divider, Group, Table, Text } from "@mantine/core";
import { calculate } from "../model/calculate";
import { getCardName } from "../model/getCardName";

export function VerticalTable({ date }: { date: string }) {
  const result = calculate(date);

  return (
    <Table withColumnBorders withRowBorders>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td key={24}>
            <Text>{getCardName(result.O.Zy2)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={20}>
            <Text>{getCardName(result.O.Z2)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={18}>
            <Text>{getCardName(result.O.Y)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={22}>
            <Text>{getCardName(result.O.Zy1)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={23}>
            <Text>{getCardName(result.O.Zx2)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={19}>
            <Text>{getCardName(result.O.Z1)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={13}>
            <Text>{getCardName(result.I.Zx1)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={16}>
            <Text>{getCardName(result.I.Zy2)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={2}>
            <Text>{getCardName(result.M.Y)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={15}>
            <Text>{getCardName(result.I.Zx2)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={3}>
            <Text>{getCardName(result.M.Z1)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={17}>
            <Group>
              <Text>{getCardName(result.O.X)}</Text>
              <Divider orientation="vertical" />
              <Text>{getCardName(result.I.X)}</Text>
            </Group>
          </Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Td key={10}>
            <Text>{getCardName(result.I.Y)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={14}>
            <Text>{getCardName(result.I.Zy1)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={4}>
            <Text>{getCardName(result.M.Z2)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={6}>
            <Text>{getCardName(result.M.Zy1)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={1}>
            <Text>{getCardName(result.M.X)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={5}>
            <Text>{getCardName(result.M.Zx1)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={7}>
            <Text>{getCardName(result.M.Zx2)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={12}>
            <Text>{getCardName(result.I.Z2)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={11}>
            <Text>{getCardName(result.I.Z1)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={21}>
            <Text>{getCardName(result.O.Zx1)}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td key={8}>
            <Text>{getCardName(result.M.Zy2)}</Text>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
