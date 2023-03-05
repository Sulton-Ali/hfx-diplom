import { Box, SimpleGrid, Space, Title, useMantineTheme } from "@mantine/core";
import { LawInfoCard } from "../../../components/law-info-card";
import { instructions } from "../data/instructions";

export function LegalBasisInstructions() {
  const theme = useMantineTheme();
  return (
    <Box>
      <Title order={2} sx={{ textAlign: "center" }}>
        Sanoat xavfsizligi yo‘riqnomalari
      </Title>
      <Space h={40} />

      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: theme.breakpoints.lg, cols: 3 },
          { maxWidth: theme.breakpoints.md, cols: 2 },
          { maxWidth: theme.breakpoints.xs, cols: 1 },
        ]}
      >
        {instructions.map((instruction) => (
          <LawInfoCard info={instruction} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
