import Header from "../header";
import { AppShell } from "@mantine/core";
import { Outlet, Route, Routes } from "react-router-dom";
import { Gtl } from "../../pages/gtl";
import { GtlPlatform } from "../../pages/gtl-platform";
import { LegalBasis } from "../../pages/legal-basis";

function MainLayout() {
  return (
    <AppShell padding="md" header={<Header />}>
      <Routes>
        <Route path="author" element={<h1>Author</h1>} />
        <Route path="gtl" element={<Gtl />} />
        <Route path="gtl-platform" element={<GtlPlatform />} />
        <Route path="legal/*" element={<LegalBasis />} />
      </Routes>
      <Outlet />
    </AppShell>
  );
}

export default MainLayout;
