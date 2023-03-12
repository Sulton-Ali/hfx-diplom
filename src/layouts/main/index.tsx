import { lazy } from "react";
import Header from "../header";
import { AppShell } from "@mantine/core";
import { Outlet, Route, Routes } from "react-router-dom";
const Gtl = lazy(() => import("../../pages/gtl"));
const GtlPlatform = lazy(() => import("../../pages/gtl-platform"));
const LegalBasis = lazy(() => import("../../pages/legal-basis"));
const NormativeBasis = lazy(() => import("../../pages/normative-basis"));
const Qualification = lazy(() => import("../../pages/qualification"));

function MainLayout() {
  return (
    <AppShell padding="md" header={<Header />}>
      <Routes>
        <Route path="author" element={<h1>Author</h1>} />
        <Route path="gtl" element={<Gtl />} />
        <Route path="gtl-platform" element={<GtlPlatform />} />
        <Route path="legal/*" element={<LegalBasis />} />
        <Route path="normative" element={<NormativeBasis />} />
        <Route path="qualification/*" element={<Qualification />} />
      </Routes>
      <Outlet />
    </AppShell>
  );
}

export default MainLayout;
