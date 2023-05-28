import { NavLink, Stack, Title } from "@mantine/core";
import { IconCertificate } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function TestHome() {
  return (
    <Stack>
      <NavLink
        component={Link}
        to="1"
        label={<Title order={4}>Module 1</Title>}
        icon={<IconCertificate size="2rem" stroke={1.5} />}
      />
      <NavLink
        component={Link}
        to="2"
        label={<Title order={4}>Module 2</Title>}
        icon={<IconCertificate size="2rem" stroke={1.5} />}
      />
      <NavLink
        component={Link}
        to="3"
        label={<Title order={4}>Module 3</Title>}
        icon={<IconCertificate size="2rem" stroke={1.5} />}
      />
      <NavLink
        component={Link}
        to="4"
        label={<Title order={4}>Module 4</Title>}
        icon={<IconCertificate size="2rem" stroke={1.5} />}
      />
      <NavLink
        component={Link}
        to="5"
        label={<Title order={4}>Module 5</Title>}
        icon={<IconCertificate size="2rem" stroke={1.5} />}
      />
    </Stack>
  );
}
