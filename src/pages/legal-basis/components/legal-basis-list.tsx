import {
  Box,
  Center,
  createStyles,
  Group,
  SegmentedControl,
  Text,
} from "@mantine/core";
import { IconBooks } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const useListStyles = createStyles((theme) => ({
  iconWrapper: {
    width: "44px",
    height: "44px",
    backgroundColor: theme.colors[theme.primaryColor][6],
    borderRadius: "50%",
  },
  icon: {
    color: theme.white,
  },
  text: {
    wordWrap: "break-word",
    whiteSpace: "break-spaces",
    textAlign: "left",
  },
}));

export enum LEGAL_BASIS_LINKS {
  LAWS = "laws",
  LAW_BOOKS = "lawbooks",
  ACTS = "acts",
  DOCS = "docs",
}

export function LegalBasisList() {
  const navigate = useNavigate();
  const { classes } = useListStyles();
  return (
    <Box>
      <SegmentedControl
        fullWidth
        orientation="vertical"
        size="lg"
        onChange={(value) => navigate(`/legal/${value}`)}
        data={[
          {
            value: LEGAL_BASIS_LINKS.LAWS,
            label: (
              <Group noWrap>
                <Center className={classes.iconWrapper}>
                  <IconBooks size={24} className={classes.icon} />
                </Center>
                <Text className={classes.text}>Qonunlar</Text>
              </Group>
            ),
          },
          {
            value: LEGAL_BASIS_LINKS.LAW_BOOKS,
            label: (
              <Group noWrap>
                <Center className={classes.iconWrapper}>
                  <IconBooks size={24} className={classes.icon} />
                </Center>
                <Text className={classes.text}>Kodekslar</Text>
              </Group>
            ),
          },
          {
            value: LEGAL_BASIS_LINKS.ACTS,
            label: (
              <Group noWrap>
                <Center className={classes.iconWrapper}>
                  <IconBooks size={24} className={classes.icon} />
                </Center>
                <Text className={classes.text}>
                  Vazirlar Mahkamasining qarorlari
                </Text>
              </Group>
            ),
          },
          {
            value: LEGAL_BASIS_LINKS.DOCS,
            label: (
              <Group noWrap>
                <Center className={classes.iconWrapper}>
                  <IconBooks size={24} className={classes.icon} />
                </Center>
                <Text className={classes.text}>
                  Adliya vazirligidan ro'yhatdan normativ-huquqiy hujjatlar
                </Text>
              </Group>
            ),
          },
        ]}
      />
    </Box>
  );
}
