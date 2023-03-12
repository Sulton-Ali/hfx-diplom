import { createStyles } from "@mantine/core";
import { PropsWithChildren } from "react";

const useStyles = createStyles(() => ({
  title: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "36px",
    lineHeight: 1.2,
    textAlign: "center",
    letterSpacing: "2px",
  },
}));

export function PageTitle({ children }: PropsWithChildren) {
  const { classes } = useStyles();
  return <h1 className={classes.title}>{children}</h1>;
}
