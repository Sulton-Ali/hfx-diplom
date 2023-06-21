import { Box, Container, Stack } from "@mantine/core";
import { Link } from "react-router-dom";

export default function AdsPage() {
  return (
    <Box>
      <Container size="lg">
        <Stack py={40}>
          <Link to="#">
            MEHNATNI MUHOFAZA QILISH BO‘YICHA KURS O‘QISHIDA QATNASGADIGAN
            RO‘YHATI
          </Link>
          <Link to="#">BUYRUQ NUSHASI</Link>
        </Stack>
      </Container>
    </Box>
  );
}
