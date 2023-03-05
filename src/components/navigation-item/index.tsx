import { Link } from "react-router-dom";
import { createStyles, Stack, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    height: "100%",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:hover": {
      backgroundColor: theme.colors[theme.primaryColor][5],
    },
  },
  wrapper: {
    padding: "10px",
  },
  text: {
    textTransform: "uppercase",
    color: theme.white,
    fontSize: "14px",
    lineHeight: 1,
    fontWeight: 500,
    fontFamily: "Roboto, sans-serif",
    letterSpacing: "-0.5px",
  },
}));

type NavigationItemProps = {
  label: string[];
  link: string;
};

export function NavigationItem({ label, link }: NavigationItemProps) {
  const { classes } = useStyles();
  return (
    <Link to={link} className={classes.root}>
      <Stack spacing={0} className={classes.wrapper}>
        {label.map((part, index) => (
          <Text span key={index} className={classes.text}>
            {part}
          </Text>
        ))}
      </Stack>
    </Link>
  );
}
