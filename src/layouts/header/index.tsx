import { Header } from "@mantine/core";
import { HeaderTop } from "../../components/header-top";
import HeaderContent from "../../components/header-content";

function AppHeader() {
  return (
    <Header
      height={166}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <HeaderTop />
      <HeaderContent />
    </Header>
  );
}

export default AppHeader;
