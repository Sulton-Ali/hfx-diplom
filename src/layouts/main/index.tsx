import { lazy } from "react";
import Header from "../header";
import { AppShell } from "@mantine/core";
import { Outlet, Route, Routes } from "react-router-dom";
const Gtl = lazy(() => import("../../pages/gtl"));
const GtlPlatform = lazy(() => import("../../pages/gtl-platform"));
const LegalBasis = lazy(() => import("../../pages/legal-basis"));
const NormativeBasis = lazy(() => import("../../pages/normative-basis"));
const EnvironmentProtection = lazy(
  () => import("../../pages/environment-protection")
);
const LaborProtection = lazy(() => import("../../pages/labor-protection"));
const TeachSupport = lazy(() => import("../../pages/teach-support"));
const AboutPlatform = lazy(() => import("../../pages/about-platform"));
const Course = lazy(() => import("../../pages/course"));
const Program = lazy(() => import("../../pages/program"));

function MainLayout() {
  return (
    <AppShell padding="md" header={<Header />}>
      <Routes>
        <Route path="author" element={<h1>Author</h1>} />
        <Route path="gtl" element={<Gtl />} />
        <Route path="about" element={<AboutPlatform />} />
        <Route path="gtl-platform" element={<GtlPlatform />} />
        <Route path="legal/*" element={<LegalBasis />} />
        <Route path="normative" element={<NormativeBasis />} />
        <Route path="environment" element={<EnvironmentProtection />} />
        <Route path="labor-protection" element={<LaborProtection />} />
        <Route path="teach-support" element={<TeachSupport />} />
        <Route path="course/*" element={<Course />} />
        <Route path="program" element={<Program />} />
      </Routes>
      <Outlet />
    </AppShell>
  );
}

export default MainLayout;
