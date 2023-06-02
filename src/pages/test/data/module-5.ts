import { ITest } from "./types";

const testsModule5: ITest[] = [
  {
    id: "5-1",
    question:
      "Insonni ilon va zaharli hashoratlar chaqqanda nima qilish tavsiya etilmaydi?",
    variants: [
      {
        name: "A",
        title: "Kuydirish yoki zaharni sо‘rib olish hollari man etiladi",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "Tishlagan joyni kesish, kuydirish yoki zaharni sо‘rib olish hollari man etiladi",
        isCorrect: true,
      },
      {
        name: "D",
        title:
          "Tishlagan joyni kesish yoki zaharni sо‘rib olish hollari man etiladi",
        isCorrect: false,
      },
      {
        name: "E",
        title: "Tishlagan joyni kesish yoki kuydirish man etiladi",
        isCorrect: false,
      },
    ],
  },
  {
    id: "5-2",
    question: "Tibbiy saralash qanday amalga oshiriladi?",
    variants: [
      {
        name: "A",
        title:
          "Jarohat olganlar 4 xil rangli tasmalar yoki qog‘ozlar bilan belgilanadi. «Qizil» - jarohati og‘irlar, «Sariq» -  jarohati о‘rtacha og‘irlikda, «Yashil» - jarohati yengillar  «Qora» - nafas olmayotganlar ",
        isCorrect: true,
      },
      {
        name: "B",
        title:
          "Jarohat olganlar 4 xil rangli tasmalar yoki qog‘ozlar bilan belgilanadi. «Qizil» -  о‘lgan, «Sariq» -  jarohati о‘rtacha og‘irlikda, «Yashil» - jarohati yengillar  «Qora» - jarohati og‘irlar",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "Jarohat olganlar 4 xil rangli tasmalar yoki qog‘ozlar bilan belgilanadi. «Qizil» - jarohati og‘irlar, «Sariq» - jarohati  yengil, «Yashil» - jarohati og‘ir,  «Qora» - nafas olmayotganlar",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "Jarohat olganlar 4 xil rangli tasmalar yoki qog‘ozlar bilan belgilanadi. «Qizil» -   aniq о‘lgan, «Sariq» -  jarohati  og‘ir, «Yashil» - jarohati yengillar  «Qora» - nafas olmayotganlar",
        isCorrect: false,
      },
    ],
  },
  {
    id: "5-3",
    question: "Sun`iy  nafas berish qanday qilib amalga oshiriladi?",
    variants: [
      {
        name: "A",
        title:
          "Nafas berayotgan odam о‘zi о‘pkasini havoga tо‘ldirib, keyin jaroxatlangan odamning labiga labini qо‘yib  katta kuch bilan havoni yuboradi. Bu usul og‘izdan og‘izga nafas berish deb aytiladi",
        isCorrect: true,
      },
      {
        name: "B",
        title:
          "Nafas berayotgan odam о‘zi о‘pkasidagi  havoni  chiqarib, keyin jaroxatlangan odamning labiga labini qо‘yib  katta kuch bilan undagi havoni tortib oladi. Bu usul og‘izdan og‘izga nafas berish deb aytiladi",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "Nafas berayotgan odam о‘zi о‘pkasini havoga tо‘ldirib, keyin jaroxatlangan odamning burniga  labini qо‘yib  katta kuch bilan havoni yuboradi, Bu usul og‘izdan buringa nafas berish deb aytiladi",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "Nafas berayotgan odam о‘zi о‘pkasidagi havoni chiqarib, keyin jaroxatlangan odamning burniga labini qо‘yib  katta kuch bilan havoni  tortib oladi. Bu usul og‘izdan buringa nafas berish deb aytiladi",
        isCorrect: false,
      },
    ],
  },
  {
    id: "5-4",
    question:
      "Zaharli moddalardan jarohatlangan kishiga sun’iy nafas berish mumkinmi?",
    variants: [
      {
        name: "A",
        title: "Mutlaqo mumkin emas",
        isCorrect: true,
      },
      {
        name: "B",
        title: "Ha mumkin",
        isCorrect: false,
      },
      {
        name: "D",
        title: "Vaziyatga qarab berish mumkin",
        isCorrect: false,
      },
      {
        name: "E",
        title: "Agar о‘zi ham zaxarlanib qolishi oldi olingan bо‘lsa, mumkin",
        isCorrect: false,
      },
    ],
  },
  {
    id: "5-5",
    question:
      "Sun’iy nafas berishda  kо‘krak qafasi qancha ichkariga chukish kerak?",
    variants: [
      {
        name: "A",
        title: "Kо‘krak qafasi 1-2 sm ichkariga chо‘kish kerak",
        isCorrect: false,
      },
      {
        name: "B",
        title: "Kо‘krak qafasi 3-4 sm ichkariga chо‘kish kerak",
        isCorrect: true,
      },
      {
        name: "D",
        title: "Kо‘krak qafasi 0,5-1 sm ichkariga chо‘kish kerak",
        isCorrect: false,
      },
      {
        name: "E",
        title: "Kо‘krak qafasi 5-6 sm ichkariga chо‘kish kerak",
        isCorrect: false,
      },
    ],
  },
  {
    id: "5-6",
    question:
      "Inson tokdan shikastlanish kо‘rsatkichiga qarab nechta darajaga ajratiladi?",
    variants: [
      {
        name: "A",
        title: "3 ta darajaga",
        isCorrect: false,
      },
      {
        name: "B",
        title: "4 ta darajaga",
        isCorrect: true,
      },
      {
        name: "D",
        title: "5 ta darajaga",
        isCorrect: false,
      },
      {
        name: "E",
        title: "2 ta darajaga",
        isCorrect: false,
      },
    ],
  },
  {
    id: "5-7",
    question: "Suvga chо‘kish deb nimaga aytiladi?",
    variants: [
      {
        name: "A",
        title: "Nafas yо‘llari chiqindiga tо‘lib qolishiga aytiladi",
        isCorrect: false,
      },
      {
        name: "B",
        title: "Organizm suvga tо‘lib qolishiga aytiladi",
        isCorrect: false,
      },
      {
        name: "D",
        title: "Suvning ichida qolib ketishga aytiladi",
        isCorrect: false,
      },
      {
        name: "E",
        title: "Nafas yо‘llari suvga tо‘lib qolishiga aytiladi",
        isCorrect: true,
      },
    ],
  },
  {
    id: "5-8",
    question:
      "Oziq ovqatdan zaxarlangan insonlarga qanday qilib birinchi yordam kо‘rsatiladi?",
    variants: [
      {
        name: "A",
        title:
          "Birinchi navbatda, oshqozondagi zaxarli moddani chiqarish va uni  yuvish kerak  Buning uchun 1 l toza suvga 18-200S li 10 g  osh tuz va bir choy qoshiq  nashatin spirti aralashtirib ichirish va uni qayd qildirish kerak",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "Birinchi navbatda, oshqozondagi un ikki barmoqli ichakdagi oqatni chiqarish va uni  yuvish kerak  ~Buning uchun 1 l toza suvga 18-200S li 10 g  xlor va bir choy qoshiq ichimlik sodasini aralashtirib ichirish va uni qayd qildirish kerak",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "Birinchi navbatda, oshqozondagi ovqatni chiqarish va uni  yuvish kerak  Buning uchun 1 l toza suvga 18-200S li 10 g  osh tuz va bir choy qoshiq ichimlik sodasini aralashtirib ichirish va uni qayd qildirish kerak",
        isCorrect: true,
      },
      {
        name: "E",
        title:
          "Birinchi navbatda, oshqozondagi chiqindini chiqarish va uni  yuvish kerak  Buning uchun 1 l toza suvga 18-200S li 10 g  nashatin spirti va bir choy qoshiq ichimlik sodasini aralashtirib ichirish va uni qayd qildirish kerak",
        isCorrect: false,
      },
    ],
  },
  {
    id: "5-9",
    question:
      "Kuygan insonlarga birinchi tibbiy yordam kо‘rsatishda nima qilinadi?",
    variants: [
      {
        name: "A",
        title:
          "Darrov qaynatilgan suvga bir choy qoshiq iste`mol sodasi qо‘shilgan iliq suv ichiriladi",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "Darrov qaynatilgan suvga bir oz  nashatir spirt qо‘shilgan iliq suv ichiriladi",
        isCorrect: false,
      },
      {
        name: "D",
        title: "Darrov yaxtay suvga bir oz kislota  qо‘shilgan suv ichiriladi",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "Darrov qaynatilgan suvga bir oz tuz qо‘shilgan iliq suv ichiriladi",
        isCorrect: true,
      },
    ],
  },
  {
    id: "5-10",
    question:
      "Yurak faoliyati tо‘satdan tо‘xtab qolgan insonga qanday yordam kо‘rsatiladi?",
    variants: [
      {
        name: "A",
        title:
          "Jarohatlangan kishini qorni bilan yotqizib, havo о‘tkazuvchi yо‘lari ochiq turganiga ishonch hosil qilish kerak",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "Jarohatlangan kishini о‘tirg‘izib, havo о‘tkazuvchi yо‘lari ochiq yopiq turganiga ishonch hosil qilgandan keyin yurakni uqalash va sun’iy nafas berish kerak",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "Jarohatlangan kishini chalqancha yotqizib, havo о‘tkazuvchi yо‘llari ochiq turganiga ishonch hosil qilgandan keyin yurakni uqalash va sun’iy nafas berish kerak",
        isCorrect: true,
      },
      {
        name: "E",
        title:
          "Jarohatlangan kishini yonbosh qilib yotqizib,  burun havo о‘tkazuvchi yо‘lari ochiq turganiga ishonch hosil qilgandan keyin yurakni uqalash va sun’iy nafas berish kerak",
        isCorrect: false,
      },
    ],
  },
];

export default testsModule5;
