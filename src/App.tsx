import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./layouts/main";
import { LoadingOverlay } from "@mantine/core";

const HomePage = lazy(() => import("./pages/home"));

function App() {
  return (
    <Suspense fallback={<LoadingOverlay visible />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<MainLayout />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Suspense>
  );
}

export default App;
