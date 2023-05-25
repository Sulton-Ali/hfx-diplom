import { Space, Stack, Title } from "@mantine/core";

import doc31 from "../../../../assets/docs/modul-3/3.1.docx";
import doc32 from "../../../../assets/docs/modul-3/3.2.docx";
import doc33 from "../../../../assets/docs/modul-3/3.3.docx";
import doc34 from "../../../../assets/docs/modul-3/3.4.docx";
import doc35 from "../../../../assets/docs/modul-3/3.5.docx";
import doc36 from "../../../../assets/docs/modul-3/3.6.docx";
import doc37 from "../../../../assets/docs/modul-3/3.7.docx";
import doc38 from "../../../../assets/docs/modul-3/3.8.docx";
import doc39 from "../../../../assets/docs/modul-3/3.9.docx";

export default function CourseModule3() {
  return (
    <Stack spacing={16} sx={{ paddingTop: 32 }}>
      <Title sx={{ textAlign: "center" }} order={2}>
        Xavfsizlik texnikasi asoslari
      </Title>
      <Stack>
        <a href={doc31} download>
          <Title order={4}>
            1. Xavfsizlik texnikasi to‘g‘risida umumiy ma’lumotlar
          </Title>
        </a>
        <a href={doc32} download>
          <Title order={4}>2. Mashina va mexanizmlarning xavfli zonalari</Title>
        </a>
        <a href={doc33} download>
          <Title order={4}>3. Xavfsizlikni ta’minlovchi texnik vositalar</Title>
        </a>
        <a href={doc34} download>
          <Title order={4}>
            4. Signalizatsiya va xavfsizlik belgilari tizimi
          </Title>
        </a>
        <a href={doc35} download>
          <Title order={4}>5. Elektr xavfsizligi</Title>
        </a>
        <a href={doc36} download>
          <Title order={4}>
            6. Texnikalarni ta’mirlash va ularga texnik xizmat ko‘rsatishda
          </Title>
        </a>
        <a href={doc37} download>
          <Title order={4}>
            7. Energetik qurilmalardan foydalanishda xavfsizlik texnikasi
          </Title>
        </a>
        <a href={doc38} download>
          <Title order={4}>
            8. Neft va gaz quduqlarini burg‘ulashda xavfsizlik texnikasi
          </Title>
        </a>
        <a href={doc39} download>
          <Title order={4}>
            9. Neft va gaz quduqlaridan foydalanishda xavfsizlik texnikasi
          </Title>
        </a>
        <Space h={50} />
      </Stack>
    </Stack>
  );
}
