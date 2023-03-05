import React from "react";
import { Box, Container, Group } from "@mantine/core";
import { Navigation } from "../navigation";

function HeaderContent() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors[theme.primaryColor][6],
        flexGrow: 1,
      })}
    >
      <Container h="100%" size="lg">
        <Group position="left" h="100%">
          <Navigation />
        </Group>
      </Container>
    </Box>
  );
}

export default HeaderContent;
