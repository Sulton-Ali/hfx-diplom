import { AppShell } from "@mantine/core";
import { AppHero } from "../../layouts/app-hero";
import AppHeader from "../../layouts/header";
import { UzGtlShort } from "../../layouts/uz-gtl-short";
import { AdditionalLinks } from "../../layouts/additional-links";
import { Videos } from "../../layouts/videos";

export default function HomePage() {
  return (
    <AppShell header={<AppHeader />} padding={0} pb={30}>
      <AppHero />
      {/* <UzGtlShort /> */}
      <AdditionalLinks />
      <Videos />
    </AppShell>
  );
}
