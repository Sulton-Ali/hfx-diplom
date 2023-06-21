import {
  Box,
  Center,
  Container,
  Group,
  SegmentedControl,
  Space,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { PageTitle } from "../../components/page-title";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { IconBooks } from "@tabler/icons-react";
import { TeachSupportModule1 } from "./ui/module-1";
import { TeachSupportModule2 } from "./ui/module-2";
import { TeachSupportModule3 } from "./ui/module-3";
import { TeachSupportModule4 } from "./ui/module-4";
import { TeachSupportModule5 } from "./ui/module-5";
import { TeachSupportModule6 } from "./ui/module-6";
import { TeachSupportModule7 } from "./ui/module-7";

export enum TEACH_SUPPORT_LINKS {
  MODULE_1 = "module/1",
  MODULE_2 = "module/2",
  MODULE_3 = "module/3",
  MODULE_4 = "module/4",
  MODULE_5 = "module/5",
  MODULE_6 = "module/6",
  MODULE_7 = "module/7",
}

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

export default function TeachSupport() {
  const navigate = useNavigate();
  const { classes } = useListStyles();

  return (
    <Box>
      <Container size="lg">
        <Space h={60} />
        <PageTitle>O'quv kursi</PageTitle>
        <SegmentedControl
          fullWidth
          orientation="vertical"
          size="lg"
          onChange={(value) => navigate(`/teach-support/${value}`)}
          data={[
            {
              value: TEACH_SUPPORT_LINKS.MODULE_1,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>DARSLIKLAR</Text>
                </Group>
              ),
            },
            {
              value: TEACH_SUPPORT_LINKS.MODULE_2,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>O`QUV QO`LLANMALAR</Text>
                </Group>
              ),
            },
            {
              value: TEACH_SUPPORT_LINKS.MODULE_3,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>STANDARTLAR</Text>
                </Group>
              ),
            },
            {
              value: TEACH_SUPPORT_LINKS.MODULE_4,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>VIDEO DARSLAR</Text>
                </Group>
              ),
            },
            {
              value: TEACH_SUPPORT_LINKS.MODULE_5,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>VIDEO ROLIKLAR</Text>
                </Group>
              ),
            },
            {
              value: TEACH_SUPPORT_LINKS.MODULE_6,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>TEST SAVOLLARI</Text>
                </Group>
              ),
            },
            {
              value: TEACH_SUPPORT_LINKS.MODULE_7,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>
                    MEHNATNI MUHOFAZA QILISH BO`YICHA NAMUNAVIY YO`RIQNOMALAR
                  </Text>
                </Group>
              ),
            },
          ]}
        />
        <Routes>
          <Route
            index
            element={
              <Navigate to={`/teach-support/${TEACH_SUPPORT_LINKS.MODULE_1}`} />
            }
          />
          <Route
            path={TEACH_SUPPORT_LINKS.MODULE_1}
            element={<TeachSupportModule1 />}
          />
          <Route
            path={TEACH_SUPPORT_LINKS.MODULE_2}
            element={<TeachSupportModule2 />}
          />
          <Route
            path={TEACH_SUPPORT_LINKS.MODULE_3}
            element={<TeachSupportModule3 />}
          />
          <Route
            path={TEACH_SUPPORT_LINKS.MODULE_4}
            element={<TeachSupportModule4 />}
          />
          <Route
            path={TEACH_SUPPORT_LINKS.MODULE_5}
            element={<TeachSupportModule5 />}
          />
          <Route
            path={TEACH_SUPPORT_LINKS.MODULE_6}
            element={<TeachSupportModule6 />}
          />
          <Route
            path={TEACH_SUPPORT_LINKS.MODULE_7}
            element={<TeachSupportModule7 />}
          />
        </Routes>
      </Container>
    </Box>
  );
}
