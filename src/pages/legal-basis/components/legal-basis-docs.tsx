import { Box, SimpleGrid, Space, Title, useMantineTheme } from "@mantine/core";
import { LawInfoCard } from "../../../components/law-info-card";
import { docs } from "../data/docs";

export function LegalBasisDocs() {
  const theme = useMantineTheme();
  return (
    <Box>
      <Title order={2} sx={{ textAlign: "center" }}>
        Adliya vazirligidan ro'yhatdan normativ-huquqiy hujjatlar
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
        {docs.map((instruction) => (
          <LawInfoCard info={instruction} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
