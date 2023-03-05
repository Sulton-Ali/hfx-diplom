import { Header, MediaQuery, useMantineTheme } from "@mantine/core";
import { HeaderTop } from "../../components/header-top";
import HeaderContent from "../../components/header-content";
import { NavigationMobile } from "../../components/navigation/mobile";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

function AppHeader() {
  const [opened, setOpened] = useState<boolean>(false);
  const theme = useMantineTheme();
  const smallerThanSm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <Header
      height={smallerThanSm ? 92 : 166}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <HeaderTop
        opened={opened}
        toggleOpened={() => setOpened((prev) => !prev)}
      />
      {!smallerThanSm ? <HeaderContent /> : null}
      {smallerThanSm ? (
        <NavigationMobile opened={opened} onClose={() => setOpened(false)} />
      ) : null}
    </Header>
  );
}

export default AppHeader;
