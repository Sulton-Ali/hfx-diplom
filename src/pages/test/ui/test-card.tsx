import { Button, Group, Radio, Stack, Title } from "@mantine/core";
import { ITest } from "../data/types";
import { useState } from "react";
import { useTestStore } from "../store";

type TestCardProps = {
  test: ITest;
  onCheck: () => void;
};

export function TestCard({ test, onCheck }: TestCardProps) {
  const [selected, setSelected] = useState<string>("");

  const data = useTestStore((state) => state.data);
  const updateData = useTestStore((state) => state.updateData);

  const next = () => {
    const variant = test.variants.find((v) => v.name === selected);
    if (variant) {
      updateData({
        current: data.current + 1,
        correct: variant.isCorrect ? data.correct + 1 : data.correct,
        incorrect: !variant.isCorrect ? data.incorrect + 1 : data.incorrect,
      });
      onCheck();
    }
  };

  return (
    <Stack>
      <Radio.Group
        onChange={(value) => setSelected(value)}
        offset="md"
        spacing="md"
        label={
          <Title order={5}>
            {test.id}. {test.question}
          </Title>
        }
        orientation="vertical"
      >
        {test.variants.map((variant) => (
          <Radio
            key={variant.name}
            size="md"
            value={variant.name}
            label={variant.title}
          />
        ))}
      </Radio.Group>
      <Group pt="2rem" position="right">
        <Button onClick={next}>Keyingi</Button>
      </Group>
    </Stack>
  );
}
