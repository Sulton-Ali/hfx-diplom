import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/images/slide1.webp";
import slide2 from "../../assets/images/slide2.webp";
import slide3 from "../../assets/images/slide3.webp";
import mmqo_va_yop1 from "../../assets/images/mmqo_va_yop.webp";
import mmqo_va_yop2 from "../../assets/images/mmqo_va_yop_2.webp";
import mmqo_va_yop3 from "../../assets/images/mmqo_va_yop_3.webp";

import "swiper/css";
import "swiper/css/autoplay";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  indicator: {
    width: 12,
    height: 6,
    transition: "width 250ms ease",

    "&[data-active]": {
      width: 40,
      backgroundColor: theme.colors[theme.primaryColor][6],
    },
  },
}));

export function AppHero() {
  const { classes } = useStyles();
  const { classes: slideClasses } = useSlideStyles();
  const theme = useMantineTheme();
  const smallerThanMd = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);

  const navigate = useNavigate();

  return (
    <Box
      sx={(theme) => ({
        backgroundImage: theme.fn.gradient({
          from: theme.white,
          to: theme.colors[theme.primaryColor][2],
        }),
      })}
    >
      <Container size="lg">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          direction="horizontal"
          modules={[Autoplay]}
          className="home-swiper-top"
          style={{ height: "500px" }}
        >
          <SwiperSlide>
            <Group noWrap py={60} spacing={60} h={"100%"}>
              <Stack
                className={slideClasses.content}
                sx={{ alignItems: "flex-start" }}
              >
                <Text className={slideClasses.title}>
                  «Mehnatni muhofaza qilish» nima?
                </Text>
                <Text className={slideClasses.description}>
                  «Mehnatni muhofaza qilish» insonning ishlab chiqarishdagi
                  faoliyatida sodir bo‘ladigan turli ko‘rinishdagi xavflarni
                  bartaraf etish va ulardan himoyalanish yo‘llarini o‘rganishga
                  qaratilgan tadbirlar majmui va vositalar tizimidan iboratdir
                </Text>
                <div className={slideClasses.divider} />
                <Group>
                  <Button onClick={() => navigate("/labor-protection")}>
                    Batafsil
                  </Button>
                </Group>
              </Stack>
              {!smallerThanMd ? (
                <Box
                  sx={{
                    width: "60%",
                    height: "100%",
                    display: "grid",
                    gridTemplateRows: "1fr",
                  }}
                >
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    direction="vertical"
                    modules={[Autoplay]}
                    style={{
                      height: "100%",
                    }}
                  >
                    <SwiperSlide>
                      <img
                        src={slide1}
                        alt="slide1"
                        className={slideClasses.img}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={slide2}
                        alt="slide2"
                        className={slideClasses.img}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={slide3}
                        alt="slide3"
                        className={slideClasses.img}
                      />
                    </SwiperSlide>
                  </Swiper>
                </Box>
              ) : null}
            </Group>
          </SwiperSlide>

          <SwiperSlide>
            <Group noWrap py={60} spacing={60} h={"100%"}>
              <Stack
                className={slideClasses.content}
                sx={{ alignItems: "flex-start" }}
              >
                <Group h={144}>
                  <img
                    src={mmqo_va_yop1}
                    alt="mmqo_va_yop1"
                    className={slideClasses.img}
                  />
                </Group>
                <Text className={slideClasses.description}>
                  Mehnatni muhofaza qilishga o‘qitish va yo‘riqnomadan o‘tkazish
                  platformasi haqida
                </Text>
                <div className={slideClasses.divider} />
                <Group>
                  <Button onClick={() => navigate("/about")}>Batafsil</Button>
                </Group>
              </Stack>
              {!smallerThanMd ? (
                <Box
                  sx={{
                    width: "60%",
                    height: "100%",
                    display: "grid",
                    gridTemplateRows: "1fr",
                  }}
                >
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    direction="vertical"
                    modules={[Autoplay]}
                    style={{
                      height: "100%",
                    }}
                  >
                    <SwiperSlide>
                      <img
                        src={mmqo_va_yop2}
                        alt="mmqo_va_yop2"
                        className={slideClasses.img}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={mmqo_va_yop3}
                        alt="mmqo_va_yop3"
                        className={slideClasses.img}
                      />
                    </SwiperSlide>
                  </Swiper>
                </Box>
              ) : null}
            </Group>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}

const useSlideStyles = createStyles((theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 60,
    gap: 60,
  },
  content: {
    width: "40%",
    flexGrow: 1,
    gap: "30px",
  },
  imgWrapper: {
    width: "60%",
    height: "100%",
    flexGrow: 1,
    overflow: "hidden",
  },
  title: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "36px",
    lineHeight: 1.3,
    fontWeight: 700,
    textAlign: "center",
    textTransform: "uppercase",
  },
  description: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "20px",
    lineHeight: 1.2,
    color: theme.colors.dark[3],
  },
  img: {
    height: "100%",
    borderRadius: 8,
  },
  divider: {
    width: "40%",
    height: "4px",
    backgroundColor: theme.colors[theme.primaryColor][6],
    borderRadius: "2px",
  },
}));
