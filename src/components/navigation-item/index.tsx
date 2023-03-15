import { Link, NavLink } from "react-router-dom";
import { createStyles, Stack, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    height: "100%",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s linear",

    "&:hover": {
      transform: "translate(-2px, -2px)",
      backgroundColor: theme.colors.cyan[4],
      borderRadius: "4px",
    },

    "&.active": {
      transform: "translate(-2px, -2px)",
      backgroundColor: theme.colors.cyan[6],
      borderRadius: "4px",
      boxShadow: "1px 2px 15px rgba(0, 0, 0, 0.4)",
    },
  },
  wrapper: {
    padding: "10px",
  },
  text: {
    textTransform: "uppercase",
    color: theme.black,
    fontSize: "18px",
    lineHeight: 1.3,
    fontWeight: 700,
    fontFamily: "Roboto, sans-serif",

    [`@media(max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "15px",
    },

    [`@media(max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: "18px",
    },
  },
}));

type NavigationItemProps = {
  label: string[];
  link: string;
};

export function NavigationItem({ label, link }: NavigationItemProps) {
  const { classes } = useStyles();
  return (
    <NavLink to={link} className={classes.root}>
      <Stack spacing={0} className={classes.wrapper}>
        {label.map((part, index) => (
          <Text span key={index} className={classes.text}>
            {part}
          </Text>
        ))}
      </Stack>
    </NavLink>
  );
}
