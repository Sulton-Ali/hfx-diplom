import { Box, Container, Space, useMantineTheme } from "@mantine/core";
import { PageTitle } from "../../components/page-title";

export default function TeachSupport() {
  const theme = useMantineTheme();

  return (
    <Box>
      <Container size="lg">
        <PageTitle>Teach Support</PageTitle>
        <Space h={40} />
      </Container>
    </Box>
  );
}
