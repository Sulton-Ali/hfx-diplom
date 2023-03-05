import { AppShell } from "@mantine/core";
import { AppHero } from "../../layouts/app-hero";
import AppHeader from "../../layouts/header";
import { UzGtlShort } from "../../layouts/uz-gtl-short";

export default function HomePage() {
  return (
    <AppShell header={<AppHeader />} padding={0}>
      <AppHero />
      <UzGtlShort />
    </AppShell>
  );
}
