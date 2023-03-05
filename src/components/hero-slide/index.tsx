import { Box, Button, createStyles, Group, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IHeroSlideItem } from "../../layouts/app-hero/items";

const useStyles = createStyles((theme) => ({
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
    flexGrow: 1,
    height: "max-content",
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
    width: "100%",
    borderRadius: 16,
  },
  divider: {
    width: "40%",
    height: "4px",
    backgroundColor: theme.colors[theme.primaryColor][6],
    borderRadius: "2px",
  },
}));

type HeroSlideProps = {
  slide: IHeroSlideItem;
  reverse?: boolean;
};

export function HeroSlide({ slide, reverse = false }: HeroSlideProps) {
  const navigate = useNavigate();

  const { classes } = useStyles();

  return (
    <Group
      noWrap
      align="center"
      className={classes.root}
      sx={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <Stack
        className={classes.content}
        sx={{ alignItems: reverse ? "flex-end" : "flex-start" }}
      >
        <Text className={classes.title}>{slide.title}</Text>
        <Text className={classes.description}>{slide.description}</Text>
        <div className={classes.divider} />
        <Group>
          <Button onClick={() => navigate(slide.link)}>Batafsil</Button>
        </Group>
      </Stack>
      <Box className={classes.imgWrapper}>
        <img src={slide.img} alt="slide" className={classes.img} />
      </Box>
    </Group>
  );
}
