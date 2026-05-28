import {
  Center,
  Flex,
  MantineProvider,
  Paper,
  ScrollAreaAutosize,
} from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";

import { ResultTable } from "./ResultTable";
import { VerticalTable } from "./VerticalTable";

export function App() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <MantineProvider>
      <ScrollAreaAutosize h="100dvh">
        <Center p="md" mih="100dvh">
          <Flex direction="column" justify="center" align="center" gap="md">
            <Paper withBorder w={350} p="md">
              <DatePickerInput
                label="Pick date"
                placeholder="Pick date"
                value={value}
                onChange={setValue}
              />
            </Paper>
            <Paper withBorder w={550} p="md">
              {value !== null && <ResultTable date={value} />}
            </Paper>

            <Paper withBorder w={550} p="md">
              {value !== null && <VerticalTable date={value} />}
            </Paper>
          </Flex>
        </Center>
      </ScrollAreaAutosize>
    </MantineProvider>
  );
}
