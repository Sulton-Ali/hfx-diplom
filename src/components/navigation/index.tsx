import { Group } from "@mantine/core";
import { links } from "./links";
import { NavigationItem } from "../navigation-item";

export function Navigation() {
  return (
    <Group h="100%" spacing={10}>
      {links.map((item) => (
        <NavigationItem key={item.link} label={item.label} link={item.link} />
      ))}
    </Group>
  );
}
