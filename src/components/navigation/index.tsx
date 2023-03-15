import { Box } from "@mantine/core";
import { links } from "./links";
import { NavigationItem } from "../navigation-item";

export function Navigation() {
  return (
    <Box
      h="100%"
      w="100%"
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr repeat(4, 2fr) 1fr",
      }}
    >
      {links.map((item) => (
        <NavigationItem key={item.link} label={item.label} link={item.link} />
      ))}
    </Box>
  );
}
