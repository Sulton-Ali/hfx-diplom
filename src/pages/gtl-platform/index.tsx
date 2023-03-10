import { Box, Container, createStyles } from "@mantine/core";

import gtlPlatformFull from "../../assets/images/uz_gtl_platform_full.png";
import { PageTitle } from "../../components/page-title";

const useStyles = createStyles(() => ({
  title: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "36px",
    lineHeight: 1.2,
    textAlign: "center",
    letterSpacing: "2px",
  },
  img: {
    width: "100%",
    borderRadius: "10px",
  },
}));

export default function GtlPlatform() {
  const { classes } = useStyles();
  return (
    <Box>
      <Container size="lg">
        <Box>
          <img
            className={classes.img}
            src={gtlPlatformFull}
            alt="gtl platform full"
          />
        </Box>
        <Box
          sx={{
            paddingTop: 40,
            paddingBottom: 20,
          }}
        >
          <PageTitle>
            Uzbekiston GTL Mehnatni muhofaza qilishga o`qitish va yo‘riqnomadan
            o‘tkazish platformasi haqida
          </PageTitle>
        </Box>
      </Container>
    </Box>
  );
}
