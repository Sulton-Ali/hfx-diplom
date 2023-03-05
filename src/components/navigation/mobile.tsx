import {
  Box,
  createStyles,
  Divider,
  Drawer,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { links } from "./links";
import { NavigationItem } from "../navigation-item";
import { IconMail, IconPhone } from "@tabler/icons-react";

import logo from "../../assets/images/hfx_murodov_logo.webp";

const useStyles = createStyles((theme) => ({
  drawer: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    display: "flex",
    flexDirection: "column",
  },
  drawerHeader: {
    borderBottom: `1px solid ${theme.white}`,
  },
  drawerBody: {
    padding: "20px 0",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  drawerTitle: {
    flexGrow: 1,
    color: theme.white,
    padding: "10px 0",
  },
  contactIcon: {
    color: theme.white,
  },
  contactLabel: {
    fontFamily: "Roboto, sans-serif",
    margin: 0,
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: 1.25,
    color: theme.white,
  },
  contactValue: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1.25,
    color: theme.white,
  },
}));

type NavigationMobileProps = {
  opened: boolean;
  onClose: () => void;
};

export function NavigationMobile({ opened, onClose }: NavigationMobileProps) {
  const { classes } = useStyles();
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      classNames={{
        drawer: classes.drawer,
        header: classes.drawerHeader,
        body: classes.drawerBody,
        title: classes.drawerTitle,
      }}
      title={
        <Group align="center" position="center" sx={{ width: "100%" }}>
          <Box sx={{ height: "50px" }}>
            <img
              src={logo}
              alt="site logotype"
              style={{ height: "100%", borderRadius: "10px" }}
            />
          </Box>
          <Stack spacing={0}>
            <Title order={5} sx={{ fontFamily: "Roboto, sans-serif" }}>
              MMQ va TX
            </Title>
            <Title order={5} sx={{ fontFamily: "Roboto, sans-serif" }}>
              YO'RIQNOMALAR
            </Title>
          </Stack>
        </Group>
      }
    >
      <Stack
        sx={() => ({
          gap: 10,
          alignItems: "flex-start",

          "& > a": {
            width: "100%",
            justifyContent: "flex-start",
          },
        })}
      >
        {links.map((item) => (
          <NavigationItem key={item.link} label={item.label} link={item.link} />
        ))}
      </Stack>
      <Stack sx={{ padding: "0 10px" }}>
        <Divider />
        <Group>
          <IconMail size={30} className={classes.contactIcon} />
          <Stack spacing={2}>
            <Text component="h4" className={classes.contactLabel}>
              Elektron pochta
            </Text>
            <Text
              component="a"
              href="mailto:Sirojiddinmuradov0@gmail.com"
              target="_blank"
              className={classes.contactValue}
            >
              Sirojiddinmuradov0@gmail.com
            </Text>
          </Stack>
        </Group>
        <Group>
          <IconPhone size={30} className={classes.contactIcon} />
          <Stack spacing={2}>
            <Text component="h4" className={classes.contactLabel}>
              Telefon raqam
            </Text>
            <Text
              component="a"
              href="tel:+998953331479"
              className={classes.contactValue}
            >
              +998953331479
            </Text>
          </Stack>
        </Group>
      </Stack>
    </Drawer>
  );
}
