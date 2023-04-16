import {
  AspectRatio,
  Box,
  Container,
  Group,
  Stack,
  Title,
} from "@mantine/core";

export function Videos() {
  return (
    <Box py={30}>
      <Container size="lg">
        <Title order={2} py={20} sx={{ textAlign: "center" }}>
          Mehnatni muhofaza qilishga o‘qitish va yo‘riqnomadan o‘tkazish
          bo`yicha foydali video materiallar
        </Title>
        <Group position="center" spacing={30}>
          <iframe
            width="766"
            height="572"
            src="https://www.youtube.com/embed/NplaThBpBYE"
            title="mehnat muhofazasi va texnika xavfsizligi tasnifi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="371"
            height="660"
            src="https://www.youtube.com/embed/HJfPAAPtYio"
            title="mehnat muhofazasi va texnika xavfsizligi16"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="371"
            height="660"
            src="https://www.youtube.com/embed/ObzrB5St--Y"
            title="mehnat muhofazasi va texnika xavfsizligi15"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="951"
            height="533"
            src="https://www.youtube.com/embed/CGhaZUlzSxU"
            title="mehnat muhofazasi va texnika xavfsizligi8"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="371"
            height="660"
            src="https://www.youtube.com/embed/ztrEvrD8hec"
            title="mehnat muhofazasi va texnika xavfsizligi6"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="371"
            height="660"
            src="https://www.youtube.com/embed/kSd4hgB2s58"
            title="mehnat muhofazasi va texnika xavfsizligi KASKA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="951"
            height="535"
            src="https://www.youtube.com/embed/CxaATQp6L20"
            title="video 2023 04 16 17 54 18"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="371"
            height="660"
            src="https://www.youtube.com/embed/_49iVBnmwAw"
            title="Ролик ТБ который показывают при устройстве на работу"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="371"
            height="660"
            src="https://www.youtube.com/embed/4r1AGZJSshk"
            title="Так выглядит безопасность на стройке в США"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Group>
      </Container>
    </Box>
  );
}
