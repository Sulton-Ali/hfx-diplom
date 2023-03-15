import {
  Box,
  Burger,
  Container,
  createStyles,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";

import logo from "../../assets/images/hfx_murodov_logo.webp";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: "16px 0",
  },
  contactIcon: {
    color: theme.colors[theme.primaryColor][5],
  },
  contactLabel: {
    fontFamily: "Roboto, sans-serif",
    margin: 0,
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: 1.25,
    color: theme.colors.dark[5],
  },
  contactValue: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1.25,
    color: theme.colors.dark[3],
  },
}));

type HeaderTopProps = {
  opened: boolean;
  toggleOpened: () => void;
};

export function HeaderTop({ opened, toggleOpened }: HeaderTopProps) {
  const theme = useMantineTheme();
  const smallerThanSm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const { classes } = useStyles();
  return (
    <Box>
      <Container size="lg">
        <Group position="apart" align="center" className={classes.wrapper}>
          <Box sx={{ height: "80px" }} component={Link} to="/">
            <img src={logo} alt="site logotype" style={{ height: "100%" }} />
          </Box>
          {!smallerThanSm ? (
            <Group>
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
            </Group>
          ) : (
            <Burger opened={opened} onClick={toggleOpened} />
          )}
        </Group>
      </Container>
    </Box>
  );
}
