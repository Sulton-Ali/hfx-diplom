import { Card, Title, Text, createStyles, Stack } from "@mantine/core";
import { Link } from "react-router-dom";

import lexLogo from "../../assets/images/lex_uz_logo.svg";

const useStyles = createStyles(() => ({
  logo: {
    width: "40%",
  },
  title: {
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
  },
  text: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
  },
}));

export interface ILawInfo {
  title: string;
  description: string;
  link: string;
}

type LawInfoCardProps = {
  info: ILawInfo;
};

export function LawInfoCard({ info }: LawInfoCardProps) {
  const { classes } = useStyles();
  return (
    <Card
      shadow="md"
      component={Link}
      to={info.link}
      target="_blank"
      radius="md"
    >
      <Stack justify="center" h="100%" align="center">
        <img src={lexLogo} alt="lexUz logo" className={classes.logo} />
        <Title order={4} className={classes.title}>
          {info.title}
        </Title>
        <Text component="p" className={classes.text}>
          {info.description}
        </Text>
      </Stack>
    </Card>
  );
}
