import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "./layouts/main";

const HomePage = lazy(() => import("./pages/home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<MainLayout />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default App;
