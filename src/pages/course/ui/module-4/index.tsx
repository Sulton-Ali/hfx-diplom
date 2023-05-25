import { Space, Stack, Title } from "@mantine/core";

import doc41 from "../../../../assets/docs/modul-4/4.1.docx";
import doc42 from "../../../../assets/docs/modul-4/4.2.docx";
import doc43 from "../../../../assets/docs/modul-4/4.3.docx";
import doc44 from "../../../../assets/docs/modul-4/4.4.docx";
import doc45 from "../../../../assets/docs/modul-4/4.5.docx";
import doc46 from "../../../../assets/docs/modul-4/4.6.docx";

export default function CourseModule4() {
  return (
    <Stack spacing={16} sx={{ paddingTop: 32 }}>
      <Title sx={{ textAlign: "center" }} order={2}>
        Yong‘in xavfsizligi
      </Title>
      <Stack>
        <a href={doc41} download>
          <Title order={4}>
            1. Yong‘in xavfsizligi bo‘yicha umumiy ma’lumotlar
          </Title>
        </a>
        <a href={doc42} download>
          <Title order={4}>
            2. Yong‘in xavfsizligi tizimiga qo‘yilgan talablar
          </Title>
        </a>
        <a href={doc43} download>
          <Title order={4}>3. Yonish jarayonining mohiyati</Title>
        </a>
        <a href={doc44} download>
          <Title order={4}>
            4. Materiallarning yonish va portlash bo‘yicha tasnifi
          </Title>
        </a>
        <a href={doc45} download>
          <Title order={4}>5. Yong‘inning oldini olish tizimi</Title>
        </a>
        <a href={doc46} download>
          <Title order={4}>6.Yong‘inga qarshi himoya tizimi</Title>
        </a>
        <Space h={50} />
      </Stack>
    </Stack>
  );
}
