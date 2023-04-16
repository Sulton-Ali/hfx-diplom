import { Link } from "react-router-dom";

import program from "../../assets/images/program.svg";
import course from "../../assets/images/course.svg";
import test from "../../assets/images/test.svg";
import cert from "../../assets/images/certification.svg";
import {
  Box,
  Card,
  Container,
  SimpleGrid,
  Stack,
  Title,
  createStyles,
  useMantineTheme,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    height: "100%",
  },
  card: {
    height: "100%",
    "&:hover": {
      backgroundColor: theme.colors[theme.primaryColor][0],
      color: theme.black,
    },
  },
  imgWrapper: {
    width: "60%",
  },
  img: {
    width: "100%",
    marginBottom: "20px",
  },
}));

export function AdditionalLinks() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <Container size="lg">
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: theme.breakpoints.lg, cols: 4 },
            { maxWidth: theme.breakpoints.md, cols: 2 },
            { maxWidth: theme.breakpoints.xs, cols: 1 },
          ]}
        >
          <Link className={classes.link} to="program">
            <Card className={classes.card} shadow="lg" p={60}>
              <Stack align="center">
                <Box className={classes.imgWrapper}>
                  <img
                    className={classes.img}
                    src={program}
                    alt="course illustration"
                  />
                </Box>
                <Title order={3} className={classes.title}>
                  O‘quv dasturi
                </Title>
              </Stack>
            </Card>
          </Link>
          <Link className={classes.link} to="course">
            <Card className={classes.card} shadow="lg" p={60}>
              <Stack align="center">
                <Box className={classes.imgWrapper}>
                  <img
                    className={classes.img}
                    src={course}
                    alt="course illustration"
                  />
                </Box>
                <Title order={3} className={classes.title}>
                  O‘quv kursi
                </Title>
              </Stack>
            </Card>
          </Link>
          <Link className={classes.link} to="test">
            <Card className={classes.card} shadow="lg" p={60}>
              <Stack align="center">
                <Box className={classes.imgWrapper}>
                  <img
                    className={classes.img}
                    src={test}
                    alt="course illustration"
                  />
                </Box>
                <Title order={3} className={classes.title}>
                  Bilimlar sinovi
                </Title>
              </Stack>
            </Card>
          </Link>
          <Link className={classes.link} to="certificate">
            <Card className={classes.card} shadow="lg" p={60}>
              <Stack align="center">
                <Box className={classes.imgWrapper}>
                  <img
                    className={classes.img}
                    src={cert}
                    alt="certification illustration"
                  />
                </Box>
                <Title order={3} className={classes.title}>
                  Sertifikatni yuklab olish
                </Title>
              </Stack>
            </Card>
          </Link>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
