import {
  Button,
  Group,
  Progress,
  Space,
  Stack,
  Tabs,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";

import tests from "../data/module-1";
import { useCallback, useEffect, useState } from "react";
import { TestCard } from "./test-card";
import { useTestStore } from "../store";
import testsModule1 from "../data/module-1";
import { useNavigate } from "react-router-dom";

export function TestModule1() {
  const [currentTab, setCurrentTab] = useState<string>("1");

  const testData = useTestStore((state) => state.data);
  const updateData = useTestStore((state) => state.updateData);

  const navigate = useNavigate();

  useEffect(() => {
    updateData({
      id: 1,
      total: testsModule1.length,
    });
  }, []);

  const onCheck = useCallback(() => {
    setCurrentTab((prev) => `${Number(prev) + 1}`);
  }, []);

  const progressValue = Math.round(
    ((testData.current - 1) / testData.total) * 100
  );

  return (
    <Stack>
      {Number(currentTab) <= tests.length ? (
        <Stack spacing={8}>
          <Group position="center">
            <Tooltip label="To'g'ri">
              <Title order={5} color="green">
                {testData.correct}
              </Title>
            </Tooltip>
            /
            <Tooltip label="Noto'g'ri">
              <Title order={5} color="red">
                {testData.incorrect}
              </Title>
            </Tooltip>
            /
            <Tooltip label="Umumiy">
              <Title order={5} color="blue">
                {testData.total}
              </Title>
            </Tooltip>
          </Group>
          <Progress
            value={progressValue}
            label={`${progressValue} %`}
            size="xl"
            radius="xl"
          />
        </Stack>
      ) : null}

      <Space h={32} />
      <Tabs value={currentTab}>
        {tests.map((test, index) => (
          <Tabs.Panel key={test.id} value={`${index + 1}`} pt="xs">
            <TestCard test={test} onCheck={onCheck} />
          </Tabs.Panel>
        ))}
        <Tabs.Panel
          key={tests.length + 1}
          value={`${tests.length + 1}`}
          pt="xs"
        >
          <Group position="center">
            <Stack
              sx={(theme) => ({
                padding: "3rem",
                borderRadius: "50%",
                boxShadow: theme.shadows.lg,
                userSelect: "none",
              })}
            >
              <Title order={2} align="center">
                Natija
              </Title>
              <Title order={1}>
                {`${Math.round(
                  (testData.correct / testData.total) * 100
                )} Ball`}
              </Title>
            </Stack>
          </Group>
          <Group position="center">
            <Button
              onClick={() => {
                updateData({
                  id: 1,
                  total: 1,
                  current: 1,
                  correct: 0,
                  incorrect: 0,
                });
                navigate("/test");
              }}
            >
              Testlarga qaytish
            </Button>
          </Group>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}
