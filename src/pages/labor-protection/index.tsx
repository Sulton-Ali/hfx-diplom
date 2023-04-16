import { Box, Container } from "@mantine/core";
import { PageTitle } from "../../components/page-title";

export default function LaborProtection() {
  return (
    <Box py={60}>
      <Container size="lg">
        <PageTitle>Mehnatni muhofaza qilish</PageTitle>
        <p>
          <strong>«Mehnatni muhofaza qilish»</strong> insonning ishlab
          chiqarishdagi faoliyatida sodir bo‘ladigan turli ko‘rinishdagi
          xavflarni bartaraf etish va ulardan himoyalanish yo‘llarini
          o‘rganishga qaratilgan tadbirlar majmui va vositalar tizimidan
          iboratdir.
        </p>
        <p>
          Insonning mehnat xavfsizligini ta’minlashda ilmiy-nazariy izlanishlar
          asosida vujudga kelgan qonunlar, nizomlar, standartlar, ko‘rsatmalar,
          qoidalar va sanitar-texnik me’yorlar hamda ularni o‘rganish bo‘yicha
          uzluksiz ta’lim-tarbiya tizimini vujudga keltirish, uni rivojlantirish
          muhim o‘rin to‘tadi.
        </p>

        <p>
          Mehnatni muhofaza qilishning asosiy maqsadi talabalarga insonning
          ishlab chiqarishdagi mehnat faoliyati davrida yuzaga keladigan xavfli
          omillar, ularning kelib chiqish sabablari va bartaraf etish yo‘llari,
          mehnat xafsizligini ta’minlash hamda xavfsiz va sog‘lom ish
          sharoitlarini yaratish bo‘yicha nazariy bilim berish va amaliy
          ko‘nikmalar hosil qilishdan iboratdir.
        </p>
        <p>
          Inson uchun qulay, xavfsiz va sog‘lom mehnat sharoitini yaratish
          quyidagi vazifalarni yechishni talab etadi:{" "}
        </p>
        <ol>
          <li>
            Xavflar turi, manbalari, yuzaga kelish sabablarini baholash va
            tahlil etish.
          </li>
          <li>
            Iqtisodiy samarali yo‘llar asosida xavflarni bartaraf etish yoki
            xavfli va zararli omillar ta’sirini bartaraf etish.
          </li>
          <li>
            Xavfli va zararli omillar ta’siri oqibatlarini bartaraf etish va
            mavjud xavflardan himoyalash.
          </li>
          <li>Yashash muhitining qulay (“komfort”) holatini yaratish.</li>
        </ol>
        <p>
          Mehnat xavfsizligini ta’minlashda, ilmiy-nazariy izlanishlar asosida
          vujudga kelgan qonunlar, nizomlar, standartlar, ko‘rsatmalar, qoidalar
          va sanitar-texnik me’yorlar hamda ularni o‘rganish bo‘yicha uzluksiz
          ta’lim-tarbiya tizimini vujudga keltirish, uni rivojlantirish muhim
          o‘rin to‘tadi. Fanining asosiy maqsadi bo‘lajak kasb egalariga
          insonning barcha ko‘rinishdagi faoliyati davrida yuzaga keladigan
          xavfli omillar, ularning kelib chiqish sabablari va bartaraf etish
          yo‘llari, faoliyat xavfsizligini ta’minlash hamda ishlab chiqarishdagi
          faoliyatida xavfsiz va sog‘lom ish sharoitlarini yaratish bo‘yicha
          nazariy bilim berish va amaliy ko‘nikmalar hosil qilish orqali
          ijodiy-ilmiy va kasbiy kompetentlikni shakllantirish va
          rivojlantirishdan iboratdir.
        </p>
      </Container>
    </Box>
  );
}
