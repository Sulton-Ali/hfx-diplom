import { ITest } from "./types";

const testsModule2: ITest[] = [
  {
    id: '2-1',
    question: "Kosmik chang nurlari, asteroidlar tarkibiga nimalar kiradi?",
    variants: [
      {
        name: "A",
        title: "Kosmik muhitdagi oqim",
        isCorrect: true,
      },
      {
        name: "B",
        title: "Texnosferadagi oqim",
        isCorrect: false,
      },
      {
        name: "D",
        title: "Ijtimoiy muhitdagi oqim",
        isCorrect: false,
      },
      {
        name: "E",
        title: "tabiiy muhit oqim",
        isCorrect: false,
      },
    ],
  },
  {
    id: '2-2',
    question: "Ish sharoitlari deganda nima tushuniladi?",
    variants: [
      {
        name: "A",
        title:
          "Texnosferadagi mehnat jarayonida insonning sog‘lig‘i va samaradorligiga ta’sir qiluvchi omillar majmuasi.",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "Inson salomatligi va mehnat jarayonida ishlashga ta’sir qiluvchi biosferadagi omillar majmuasi",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "Mehnat jarayonida insonning salomatligi va samaradorligiga ta’sir qiluvchi mehnat muhitidagi omillar majmuasi",
        isCorrect: true,
      },
      {
        name: "E",
        title:
          "Noosfera omillari tо‘plami, mehnat jarayonida insonning sog‘lig‘i va samaradorligiga ta’sir qiladigan noosferadagi omillar tо‘plami",
        isCorrect: false,
      },
    ],
  },
  {
    id: '2-3',
    question: "Ishlab chiqarish gigiyenasi deb nimaga aytiladi?",
    variants: [
      {
        name: "A",
        title:
          "Mehnat muhitidagi noqulay sharoitlari xodimga ta’sir qilish xavfini kamaytirishga qaratilgan chora-tadbirlar majmuasi",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "Mehnat muhitidagi noqulay sharoitlar xavfini kamaytirishga qaratilgan chora-tadbirlar majmuasi",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "Noqulay mehnat muhiti xodimiga ta’sir qilish xavfini butunlay bartaraf qilishga qaratilgan chora-tadbirlar majmuasi",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "Ishlab chiqarishdagi zararli gazlar, changlar, bug‘ va bug‘ tumanlari ta’siri natijasida vujudga keladigan kasb kasalliklarining oldini olish majmuasi.",
        isCorrect: true,
      },
    ],
  },
  {
    id: '2-4',
    question: "Sanoat sanitariyasi deb nimaga aytiladi?",
    variants: [
      {
        name: "A",
        title:
          "Mehnat muhitidagi noqulay sharoitlari xodimga ta’sir qilish xavfini kamaytirishga qaratilgan chora-tadbirlar majmuasi",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "Ishchilarga zararli ishlab chiqarish omillari ta’sirini oldini oluvchi vositalar, sanitar-texnik, gigiyenik va tashkiliy tadbirlar tizimidir.",
        isCorrect: true,
      },
      {
        name: "D",
        title:
          "Mehnat muhitidagi noqulay sharoitlar xavfini kamaytirishga qaratilgan chora-tadbirlar majmuasi",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "Noqulay mehnat muhiti xodimiga ta’sir qilish xavfini butunlay bartaraf qilishga qaratilgan chora-tadbirlar majmuasi",
        isCorrect: false,
      },
    ],
  },
  {
    id: '2-5',
    question:
      "Xavfli va zararli ishlab chiqarish omillarida “ruhsat etilgan konsentratsiya” si deganda nima tushuniladi?",
    variants: [
      {
        name: "A",
        title:
          "Kunlik, lekin haftasiga 40 soatdan kо‘p bо‘lmagan, butun ish tajribasi davomida, hozirgi yoki keyingi hayotning uzoq muddatlarida kasallik yoki sog‘lig‘i og‘irlashiga olib kelishi mumkin bо‘lmagan konsentratsiya miqdori",
        isCorrect: true,
      },
      {
        name: "B",
        title:
          "Kunlik, lekin haftasiga 36 soatdan kо‘p bо‘lmagan butun ish tajribasi davomida hozirgi yoki keyingi bolalarning sog‘lig‘ida, hayotining uzoq davrlarida kasallik yoki og‘irlashiga olib kelishi mumkin bо‘lmagan konsentratsiya.",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "Kunlik, lekin oyiga 40 soatdan kо‘p bо‘lmagan holda, butun ish tajribasi davomida hozirgi yoki keyingi avlodi sog‘lig‘ida, kasallik yoki og‘irlashiga olib kelishi mumkin bо‘lmagan konsentratsiyadir.",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "Smenada, lekin haftasiga 40 soatdan kо‘p bо‘lmagan butun ish tajribasi davomida hozirgi yoki keyingi bolalarning sog‘lig‘ida kasallik yoki og‘irlashiga olib kelishi mumkin bо‘lmagan konsentratsiyadir",
        isCorrect: false,
      },
    ],
  },
  {
    id: '2-6',
    question: "Zararli ishlab chiqarish omillari deb nimaga aytiladi?",
    variants: [
      {
        name: "A",
        title:
          "Kasbiy omil bо‘lib, uning ma’lum sharoitlarda ishchilarga ta’siri kasallikka olib kelishi, ish qobiliyati pasayishi va naslning sog‘lig‘iga salbiy ta’sir kо‘rsatishi mumkin bо‘lgan omillar",
        isCorrect: true,
      },
      {
        name: "B",
        title:
          "Ishlab chiqarish omili bо‘lib, uning ma’lum sharoitlarda ishchiga ta’siri о‘limga yoki ish qobiliyati pasayishi lekin nasl sog‘lig‘iga ta’sir kо‘rsatmaydigan omillar",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "Ishlab chiqarish omili bо‘lib, uning ma’lum sharoitlarda ishchiga ta’siri о‘limga, kasbiy kasallikka, zо‘riqishga, о‘tkir kasallanishiga olib keladigan omillar",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "Ishlab chiqarish omili bо‘lib, uning ma’lum sharoitlarda ishchiga ta’siri kasbiy kasalliklarga, ish qobiliyati yо‘qolishiga va surinkali kasbiy kasalligiga olib kelatigan omillarG",
        isCorrect: false,
      },
    ],
  },
  {
    id: '2-7',
    question: "Xavfli ishlab chiqarish omillari nima?",
    variants: [
      {
        name: "A",
        title:
          "Ma’lum bir ishlab chiqarishdagi ta’siri ishchilarni о‘limga, о‘tkir zaharlanishga yoki suyagi sinishga olib keladgan xolatdir",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "Ma’lum bir ishlab chiqarishdagi ta’siri ishchilarni shikastlanishga, о‘tkir zaharlanishga yoki sog‘lig‘i tо‘satdan yomonlashishiga yoki о‘limga olib keladi xolatdir",
        isCorrect: true,
      },
      {
        name: "D",
        title:
          "Ma’lum bir sharoitlardagi ta’siri ishchilarni kasbiy kasallikka, о‘tkir zaharlanishga yoki avlodi nogiron tо‘g‘ilishiga olib keladigan xolatdir",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "Ma’lum bir ijtimoiy sharoitlardagi ta’siri ishchilar shikastlanishga, о‘tkir kasallikka, zaharlanishga yoki sog‘lig‘ining keskin yomonlashishiga yoki о‘limga olib keladi",
        isCorrect: false,
      },
    ],
  },
  {
    id: '2-8',
    question: "Xavfli va zararli ishlab chiqarish omillari turlari muvjud?",
    variants: [
      {
        name: "A",
        title: "Kimyoviy texnik, biologik, psixofiziologik",
        isCorrect: false,
      },
      {
        name: "B",
        title: "Kimyoviy, jismoniy, biologik, psixologik",
        isCorrect: false,
      },
      {
        name: "D",
        title: "Kimyoviy, jismoniy, texnologik, psixofiziologik",
        isCorrect: false,
      },
      {
        name: "E",
        title: "Kimyoviy, fizikaviy, biologik, psixofiziologik",
        isCorrect: true,
      },
    ],
  },
  {
    id: '2-9',
    question:
      "Zararli ishlab chiqarish omillari inson organizmiga qanday ta’sir qiladi?",
    variants: [
      {
        name: "A",
        title: "I-о‘ta xavfli, II-xavfli III-past xavfli.",
        isCorrect: false,
      },
      {
        name: "B",
        title: "I - yuqori xavfli, II-о‘rtacha xavfli IV-xavfli.",
        isCorrect: false,
      },
      {
        name: "D",
        title: "I-о‘ta xavfli, II-past xavfli III-о‘rtacha xavfli, IV-xavfli.",
        isCorrect: true,
      },
      {
        name: "E",
        title: "I-о‘ta xavfli, II- xavfli о‘rtacha, III- xavfli",
        isCorrect: false,
      },
    ],
  },
  {
    id: '2-10',
    question: "Qanday ishlab chiqarish omillar inson tanasiga ta’sir qiladi?",
    variants: [
      {
        name: "A",
        title: "Ishlab chiqarishdagi va tashqari muhitdagi omillar.",
        isCorrect: false,
      },
      {
        name: "B",
        title: "Tabiiy, ekologik, texnogen yoki aralash omillar",
        isCorrect: true,
      },
      {
        name: "D",
        title: "Ishlab chiqarish muhitidagi xavfli omillar",
        isCorrect: false,
      },
      {
        name: "E",
        title: "Ijtimoiy muhitdagi xavfli omillar",
        isCorrect: false,
      },
    ],
  },
];

export default testsModule2;
