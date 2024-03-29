import {
  Box,
  Container,
  createStyles,
  SimpleGrid,
  Space,
  useMantineTheme,
} from "@mantine/core";
import { LawInfoCard } from "../../components/law-info-card";
import { PageTitle } from "../../components/page-title";
import { instructions } from "./data/instructions";

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

export default function NormativeBasis() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Box className={classes.root}>
      <Container size="lg">
        <PageTitle>Sanoat xavfsizligi</PageTitle>
        <Space h={20} />
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: theme.breakpoints.lg, cols: 3 },
            { maxWidth: theme.breakpoints.md, cols: 2 },
            { maxWidth: theme.breakpoints.xs, cols: 1 },
          ]}
        >
          {instructions.map((law) => (
            <LawInfoCard info={law} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
