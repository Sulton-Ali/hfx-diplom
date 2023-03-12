import {
  Box,
  Card,
  Container,
  createStyles,
  SimpleGrid,
  Space,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components/page-title";

import program from "../../assets/images/program.svg";
import course from "../../assets/images/course.svg";
import test from "../../assets/images/test.svg";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
  card: {
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

export default function Qualification() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Box>
      <Container size="lg">
        <PageTitle>
          Mehnatni muhofaza qilish <br /> bo‘yicha malaka oshirish
        </PageTitle>
        <Space h={40} />
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: theme.breakpoints.lg, cols: 3 },
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
                  Test sinovi
                </Title>
              </Stack>
            </Card>
          </Link>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
