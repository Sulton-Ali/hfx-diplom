import { Box, Container, createStyles } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { slideItems } from "./items";
import { HeroSlide } from "../../components/hero-slide";

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
        <Carousel loop withIndicators withControls={false} classNames={classes}>
          {slideItems.map((item, index) => (
            <Carousel.Slide key={index}>
              <HeroSlide reverse={item.reverse} slide={item} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
