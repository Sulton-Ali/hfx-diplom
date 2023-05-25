import { Space, Stack, Title } from "@mantine/core";

import doc51 from "../../../../assets/docs/modul-5/5.1.docx";
import doc52 from "../../../../assets/docs/modul-5/5.2.docx";
import doc53 from "../../../../assets/docs/modul-5/5.3.docx";
import doc54 from "../../../../assets/docs/modul-5/5.4.docx";
import doc55 from "../../../../assets/docs/modul-5/5.5.docx";
import doc56 from "../../../../assets/docs/modul-5/5.6.docx";

export default function CourseModule5() {
  return (
    <Stack spacing={16} sx={{ paddingTop: 32 }}>
      <Title sx={{ textAlign: "center" }} order={2}>
        Jarohatlanganda va zaharlanganda vrachgacha birinchi tibbiy yordam
      </Title>
      <Stack>
        <a href={doc51} download>
          <Title order={4}>
            1. Elektr tokidan jarohatlanganda birinchi tibbiy yordam ko‘rsatish
          </Title>
        </a>
        <a href={doc52} download>
          <Title order={4}>
            2. Zaharlanganda birinchi tibbiy yordam ko‘rsatish
          </Title>
        </a>
        <a href={doc53} download>
          <Title order={4}>3. Singanda, bo‘g‘imlar chiqqanda, рауlаг</Title>
        </a>
        <a href={doc54} download>
          <Title order={4}>4. Kuyganda birinchi yordam ko‘rsatish</Title>
        </a>
        <a href={doc55} download>
          <Title order={4}>5. Qon ketganda birinchi yordam ko‘rsatish</Title>
        </a>
        <a href={doc56} download>
          <Title order={4}>
            6. Issiq yoki quyosh urganda birinchi tibbiy yordam
          </Title>
        </a>
        <Space h={50} />
      </Stack>
    </Stack>
  );
}
