import { Box, SimpleGrid, Space, Title, useMantineTheme } from "@mantine/core";
import { LawInfoCard } from "../../../components/law-info-card";
import { acts } from "../data/acts";

export function LegalBasisActs() {
  const theme = useMantineTheme();
  return (
    <Box>
      <Title order={2} sx={{ textAlign: "center" }}>
        Vazirlar Mahkamasining qarorlari
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
        {acts.map((act) => (
          <LawInfoCard info={act} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
