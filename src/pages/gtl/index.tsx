import {
  AspectRatio,
  Box,
  Container,
  createStyles,
  Divider,
} from "@mantine/core";

import gtlFull from "../../assets/images/uz_gtl_full.jpeg";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "36px",
    lineHeight: 1.2,
    textAlign: "center",
    letterSpacing: "2px",
  },
  h2: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "24px",
    lineHeight: 1.3,
  },
  h4: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "20px",
    lineHeight: 1.2,
  },
  text: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    lineHeight: 1.3,
  },
  img: {
    width: "100%",
    borderRadius: "10px",
  },
}));

export function Gtl() {
  const { classes } = useStyles();
  return (
    <Box>
      <Container size="lg">
        <Box>
          <img src={gtlFull} alt="gtl main" className={classes.img} />
        </Box>

        <Box
          sx={{
            paddingTop: 40,
            paddingBottom: 20,
          }}
        >
          <h1 className={classes.title}>Uzbekiston GTL</h1>
          <h2 className={classes.h2}>
            Экологик тоза энергоресурслар келажаги сари Ўзбекистоннинг олтин
            йўли
          </h2>
          <p className={classes.text}>
            «Uzbekistan GTL» дунёдаги энг илғор корхоналардан бири бўлиб, юқори
            сифатли ёқилғи маҳсулотларини ишлаб чиқаради. Унинг маҳсулотлари
            ҳаво сифатига камроқ салбий таъсир кўрсатиб, транспорт соҳаси учун
            тоза экологик келажакни таъминлайди ҳамда иқтисодиёт ўсиш ва
            ривожланишига ҳисса қўшади. Ўзбекистоннинг табиий газидан фойдаланиб
            «Uzbekistan GTL» компанияси дунёдаги энг экологик тоза ва замонавий
            ёқилғилардан баъзиларини ишлаб чиқаради, бу эса атмосферага
            чиқариладиган отқинлар миқдорини камайтиришга, шунингдек
            Ўзбекистоннинг ҳозир ҳам яхши таассурот қолдирувчи энергетика
            саноатига дунёдаги энг илғор технологиялардан бирини жорий қилишга
            имкон беради. Жанубий Африка Республикасининг «Sasol» компанияси
            билан ҳамкорликда «Ўзбекнефтегаз» МХК дунёнинг бугунги энергетика
            соҳасидаги энг нуфузли лойиҳалардан бирини амалга оширмоқда.
            «Uzbekistan GTL» компанияси ёқилғилар техник таснифига янги
            стандартларни киритиб, Ўзбекистонда мавжуд истиқболли имкониятларни
            намойиш қилади.
          </p>
        </Box>
        <Box>
          <h4 className={classes.h4}>Натижага йўналтирилганлик</h4>
          <p className={classes.text}>
            Ташкилий мақсадларга эришишда мижозларимиз ва манфаатдор томонлар
            кутган натижалардан юқорироқ натижаларга эришиш учун мукаммалликка
            ва юқори касб маҳорати сари интиламиз
          </p>
        </Box>
        <Divider />
        <Box>
          <h4 className={classes.h4}>Ҳалоллик</h4>
          <p className={classes.text}>
            Ўз фаолиятимизни адолат, тўғрилик ва ошкоралик тамойиллари асосида
            амалга оширамиз
          </p>
        </Box>
        <Divider />
        <Box>
          <h4 className={classes.h4}>Қадриятларга йўналтирилганлик</h4>
          <p className={classes.text}>
            Ўзаро ва ташқи манфаатдор томонлар билан стратегик жиҳатдан муҳим ва
            ўзаро манфаатли муносабатларни йўлга қўямиз ва олиб борамиз.
          </p>
        </Box>
        <Box sx={{ paddingTop: 60, paddingBottom: 60 }}>
          <AspectRatio ratio={1236 / 695}>
            <iframe
              width="1236"
              height="695"
              src="https://www.youtube.com/embed/so_P1yhtg9c"
              title="Uzbekistan GTL - завод-гигант по производству синтетического топлива"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Container>
    </Box>
  );
}
