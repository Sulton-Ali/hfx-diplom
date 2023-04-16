import { Box, Container, createStyles, Space, Stack } from "@mantine/core";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageTitle } from "../../components/page-title";
import { LegalBasisActs } from "./components/legal-basis-acts";
import { LegalBasisDocs } from "./components/legal-basis-docs";
import { LegalBasisLaws } from "./components/legal-basis-laws";
import {
  LegalBasisList,
  LEGAL_BASIS_LINKS,
} from "./components/legal-basis-list";
import { LegalBasisLawbooks } from "./components/legal-basis-lawsbooks";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 120,
    paddingBottom: 60,
  },
}));

export default function LegalBasis() {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Container size="lg">
        <Stack>
          <PageTitle>
            Mehnatni muhofaza qilishning <br />
            huquqiy asoslari
          </PageTitle>
          <LegalBasisList />
          <Space h={60} />
          <Routes>
            <Route
              index
              element={<Navigate to={`/legal/${LEGAL_BASIS_LINKS.LAWS}`} />}
            />
            <Route path={LEGAL_BASIS_LINKS.LAWS} element={<LegalBasisLaws />} />
            <Route
              path={LEGAL_BASIS_LINKS.LAW_BOOKS}
              element={<LegalBasisLawbooks />}
            />
            <Route path={LEGAL_BASIS_LINKS.ACTS} element={<LegalBasisActs />} />
            <Route path={LEGAL_BASIS_LINKS.DOCS} element={<LegalBasisDocs />} />
          </Routes>
        </Stack>
      </Container>
    </Box>
  );
}
