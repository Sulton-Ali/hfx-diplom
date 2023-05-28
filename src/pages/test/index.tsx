import { Box, Container, Space } from "@mantine/core";
import { PageTitle } from "../../components/page-title";
import { Outlet, Route, Routes } from "react-router-dom";
import { TestHome } from "./ui";
import { TestModule1 } from "./ui/test-module-1";

export default function Test() {
  return (
    <Box>
      <Container size="lg">
        <PageTitle>Bilimlar sinovi</PageTitle>
        <Space h={40} />
        <Routes>
          <Route index element={<TestHome />} />
          <Route path="1" element={<TestModule1 />} />
        </Routes>
      </Container>
    </Box>
  );
}
