import { Box, Container, Space } from "@mantine/core";
import { PageTitle } from "../../components/page-title";
import { Route, Routes } from "react-router-dom";
import { TestHome } from "./ui";
import { TestModule } from "./ui/test-module";
import testsModule1 from "./data/module-1";
import testsModule2 from "./data/module-2";
import testsModule3 from "./data/module-3";

export default function Test() {
  return (
    <Box>
      <Container size="lg">
        <PageTitle>Bilimlar sinovi</PageTitle>
        <Space h={40} />
        <Routes>
          <Route index element={<TestHome />} />
          <Route
            path="1"
            element={<TestModule id={1} tests={testsModule1} />}
          />
          <Route
            path="2"
            element={<TestModule id={2} tests={testsModule2} />}
          />
          <Route
            path="3"
            element={<TestModule id={3} tests={testsModule3} />}
          />
        </Routes>
      </Container>
    </Box>
  );
}
