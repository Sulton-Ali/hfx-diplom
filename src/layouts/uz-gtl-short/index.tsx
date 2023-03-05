import {
  Box,
  Card,
  Container,
  createStyles,
  Group,
  SimpleGrid,
  Stack,
  useMantineTheme,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {},
  wrapper: {
    paddingTop: 60,
    paddingBottom: 60,
    gap: 0,
  },
  title: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "36px",
    lineHeight: 1.2,
    fontWeight: 700,
    textAlign: "center",
    letterSpacing: "1px",
  },
  text: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: 500,
    color: theme.colors.dark[4],
  },
  card: {},
  cardTitle: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "20px",
    lineHeight: 1.2,
    fontWeight: 700,
    textAlign: "center",
  },
}));

export function UzGtlShort() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Container size="lg">
        <Stack className={classes.wrapper}>
          <h3 className={classes.title}>Uzbekiston GTL</h3>
          <p className={classes.text}>
            Ekologik toza resurslar sari O'zbekistonning oltin yo'li Uning
            mahsulotlari havo sifatiga kamroq ta`sir ko`rsatib, transport sohasi
            uchun toza ekologik kelajakni ta`minlaydi hamda iqtisodiy o`sish va
            rivojlanishiga hissa qo`shadi
          </p>
          <SimpleGrid
            mt="xl"
            spacing="md"
            verticalSpacing="md"
            cols={3}
            breakpoints={[{ maxWidth: theme.breakpoints.md, cols: 1 }]}
          >
            <Card className={classes.card} shadow="lg">
              <Stack spacing={0}>
                <h5 className={classes.cardTitle}>
                  Natijaga yo'naltirilganlik
                </h5>
                <p>
                  Tashkiliy maqsadlarga erishishda mijozlarimiz va manfaatdor
                  tomonlar kutgan natijalardan yuqoriroq natijalarga erishish
                  uchun mukammallikka va yuqori kasb mahorati sari intilamiz
                </p>
              </Stack>
            </Card>
            <Card className={classes.card} shadow="lg">
              <Stack spacing={0}>
                <h5 className={classes.cardTitle}>Halollik</h5>
                <p>
                  O'z faoliyatimizni adolat, to'g'rilik va oshkoralik
                  tamoyillari asosida amalga oshiramiz
                </p>
              </Stack>
            </Card>
            <Card className={classes.card} shadow="lg">
              <Stack spacing={0}>
                <h5 className={classes.cardTitle}>
                  Qadriyatlarga yo'naltirilganlik
                </h5>
                <p>
                  O'zaro va tashqi manfaatdor tomonlar bilan strategik jihatdan
                  muhim va o'zaro manfaatli munosabatlarni yo'lga qo'yamiz va
                  olib boramiz
                </p>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
