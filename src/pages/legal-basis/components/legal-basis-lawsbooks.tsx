import { Box, SimpleGrid, Space, Title, useMantineTheme } from "@mantine/core";
import { LawInfoCard } from "../../../components/law-info-card";
import { lawBooks } from "../data/law-books";

export function LegalBasisLawbooks() {
  const theme = useMantineTheme();
  return (
    <Box>
      <Title order={2} sx={{ textAlign: "center" }}>
        Kodekslar
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
        {lawBooks.map((law) => (
          <LawInfoCard info={law} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
