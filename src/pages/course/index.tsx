import {
  Box,
  Center,
  Container,
  Group,
  SegmentedControl,
  Space,
  Text,
  createStyles,
} from "@mantine/core";
import { PageTitle } from "../../components/page-title";
import { IconBooks } from "@tabler/icons-react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import CourseModule1 from "./ui/module-1";
import CourseModule2 from "./ui/module-2";
import CourseModule3 from "./ui/module-3";
import CourseModule4 from "./ui/module-4";
import CourseModule5 from "./ui/module-5";

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

export enum COURSE_LINKS {
  MODULE_1 = "module/1",
  MODULE_2 = "module/2",
  MODULE_3 = "module/3",
  MODULE_4 = "module/4",
  MODULE_5 = "module/5",
}

export default function Course() {
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
          onChange={(value) => navigate(`/course/${value}`)}
          data={[
            {
              value: COURSE_LINKS.MODULE_1,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>
                    Mehnatni muhofaza qilishning huquqiy, me’yoriy va tashkiliy
                    asoslari
                  </Text>
                </Group>
              ),
            },
            {
              value: COURSE_LINKS.MODULE_2,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>
                    Ishlab chiqarish sanitariyasi va mehnat gigenasi
                  </Text>
                </Group>
              ),
            },
            {
              value: COURSE_LINKS.MODULE_3,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>
                    Xavfsizlik texnikasi asoslari
                  </Text>
                </Group>
              ),
            },
            {
              value: COURSE_LINKS.MODULE_4,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>Yong‘in xavfsizligi</Text>
                </Group>
              ),
            },
            {
              value: COURSE_LINKS.MODULE_5,
              label: (
                <Group noWrap>
                  <Center className={classes.iconWrapper}>
                    <IconBooks size={24} className={classes.icon} />
                  </Center>
                  <Text className={classes.text}>
                    Jarohatlanganda va zaharlanganda vrachgacha birinchi tibbiy
                    yordam
                  </Text>
                </Group>
              ),
            },
          ]}
        />
        <Routes>
          <Route
            index
            element={<Navigate to={`/course/${COURSE_LINKS.MODULE_1}`} />}
          />
          <Route path={COURSE_LINKS.MODULE_1} element={<CourseModule1 />} />
          <Route path={COURSE_LINKS.MODULE_2} element={<CourseModule2 />} />
          <Route path={COURSE_LINKS.MODULE_3} element={<CourseModule3 />} />
          <Route path={COURSE_LINKS.MODULE_4} element={<CourseModule4 />} />
          <Route path={COURSE_LINKS.MODULE_5} element={<CourseModule5 />} />
        </Routes>
      </Container>
    </Box>
  );
}
