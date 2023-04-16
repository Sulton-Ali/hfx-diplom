import {
  Box,
  Container,
  Space,
  SimpleGrid,
  createStyles,
  useMantineTheme,
  Title,
  Group,
  Button,
} from "@mantine/core";
import { LawInfoCard } from "../../components/law-info-card";
import { PageTitle } from "../../components/page-title";
import { docs } from "./data/docs";

import environment_protection from "../../assets/environment_protection.pdf";

const useStyles = createStyles(() => ({
  root: {
    paddingTop: 60,
    paddingBottom: 60,
  },
  h2: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "24px",
    lineHeight: 1.3,
  },
}));

export default function EnvironmentProtection() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Box className={classes.root}>
      <Container size="lg">
        <PageTitle>Atrof muhit muhofazasi</PageTitle>
        <Space h={20} />
        <Group
          position="apart"
          spacing={24}
          align="center"
          py={16}
          mb={24}
          noWrap
        >
          <Title order={4}>
            BIRLASHGAN MILLATLAR TASHKILOTI YEVROPA IQTISODIY KOMISSIYASI
            ATROF-MUHIT SIYOSATI QO‘MITASI ATROF-MUHIT HOLATINING SHARHI
          </Title>
          <Button component="a" download href={environment_protection}>
            Ko`chirib olish
          </Button>
        </Group>
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: theme.breakpoints.lg, cols: 3 },
            { maxWidth: theme.breakpoints.md, cols: 2 },
            { maxWidth: theme.breakpoints.xs, cols: 1 },
          ]}
        >
          {docs.map((law) => (
            <LawInfoCard info={law} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
