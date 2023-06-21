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
import { PDFDownloadLink } from "@react-pdf/renderer";

import { useCallback, useEffect, useState } from "react";
import { TestCard } from "./test-card";
import { useTestStore } from "../store";
import { useNavigate } from "react-router-dom";
import { ITest } from "../data/types";
import { CertificateDoc } from "./certificate-doc";

type TestModuleProps = {
  id: number;
  tests: ITest[];
  isFinal?: boolean;
};

export function TestModule({ id, tests, isFinal = false }: TestModuleProps) {
  const [currentTab, setCurrentTab] = useState<string>("1");

  const testData = useTestStore((state) => state.data);
  const updateData = useTestStore((state) => state.updateData);

  const navigate = useNavigate();

  useEffect(() => {
    updateData({
      id: 1,
      total: tests.length,
    });
  }, []);

  const onCheck = useCallback(() => {
    setCurrentTab((prev) => `${Number(prev) + 1}`);
  }, []);

  const progressValue = Math.round(
    ((testData.current - 1) / testData.total) * 100
  );

  const result = Math.round((testData.correct / testData.total) * 100);

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
              <Title order={1}>{`${result} Ball`}</Title>
            </Stack>
          </Group>
          <Space h={40} />
          <Group position="center">
            {!isFinal ? (
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
            ) : null}
            {isFinal && result > 71 ? (
              <PDFDownloadLink
                document={<CertificateDoc name="S.H.MURADOV" ball={result} />}
              >
                {({ blob, url, loading, error }) => {
                  return loading
                    ? "Xujjat yuklanmoqda..."
                    : "Sertifikat yuklab olish";
                }}
              </PDFDownloadLink>
            ) : (
              <Title order={3} align="center">
                Siz testdan o'ta olmadingiz!
              </Title>
            )}
          </Group>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}
