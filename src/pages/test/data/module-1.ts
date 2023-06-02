import { ITest } from "./types";

const testsModule1: ITest[] = [
  {
    id: '1-1',
    question: "Mehnat  huquqi  normalari nimani belgilaydi?",
    variants: [
      {
        name: "A",
        title: "Ish shartlarini, ya’ni iqtisodiy mehnatni tartibga soladi",
        isCorrect: true,
      },
      {
        name: "B",
        title:
          "Mehnat faoliyatida qo‘llash  shartlarini, ya’ni ijtimoiy mehnatni tartibga soladi",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "Mehnat faoliyatida qo‘llash  shartlarini, ya’ni huquqiy mehnatni tartibga soladi",
        isCorrect: false,
      },
      {
        name: "E",
        title: "ish shartlarini, ya’ni siyosiy mehnatni tartibga soladi",
        isCorrect: false,
      },
    ],
  },
  {
    id: '1-2',
    question:
      "Mehnat  sohasida  tashkiliy  boshqaruvga  oid  munosabatlar nimada aks etadi?",
    variants: [
      {
        name: "A",
        title:
          "Ish beruvchi bilan mehnat jamoasi, mahalliy xokimiyat organlari yoki boshka vakillik organlari o‘rtasida kelib chikadigan munosabatlarda aks etadi",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "Ish beruvchi bilan mehnat jamoasi, kasaba uyushmasi yoki mehnat inspeksiyasi o‘rtasida kelib chikadigan munosabatlarda aks etadi",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "Ish beruvchi bilan mehnat jamoasi, kasaba uyushmasi yoki boshka vakillik organlari o‘rtasida kelib chikadigan munosabatlarda aks etadi",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "Mahalliy xokimiyat organlari, kasaba uyushmasi yoki boshqa vakillik organlari o‘rtasida kelib chiqadigan munosabatlarda aks etadi",
        isCorrect: true,
      },
    ],
  },
  {
    id: '1-3',
    question: "Ishga joylashtirishga doir munosabatlar nimada aks etadi?",
    variants: [
      {
        name: "A",
        title:
          "Davlat korxonalariga ish loyiq aholi qatlamini ishga joylashtirish kabi masalalarni qamrab oladi",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "Barcha toifadagi ish loyiq aholi qatlamini  ishga joylashtirish kabi masalalarni qamrab oladi",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "18 yoshdan katta bo‘lgan ish layoqatli aholi qatlamini  ishga joylashtirish kabi masalalarni qamrab oladi",
        isCorrect: true,
      },
      {
        name: "E",
        title: "Dunday mehnat musobatalari yo‘q",
        isCorrect: false,
      },
    ],
  },
  {
    id: '1-4',
    question:
      "Mehnat muhofazasi va mehnat qonunlarnga rioya etishni nazorat qilishga doir munosabatlar nima aks etadi?",
    variants: [
      {
        name: "A",
        title:
          "Nodavlat idoralari korxonalarda mehnatni muhofaza qilish va texnika xavfsizligi qonunlariga rioya etishni nazorat qilish jarayoni",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "Vakolatli halqaro idoralari korxonalarda texnika xavfsizligi va mehnat qonunlariga rioya etishni nazorat qilish jarayoni",
        isCorrect: true,
      },
      {
        name: "D",
        title:
          "No davlat idoralari ishlab chiqarishda mehnatni muhofaza qilish va mehnat qonunlariga rioya etishni nazorat qilish jarayoni",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "Vakolatli davlat idoralari korxonalarda mehnatni muhofaza qilish va mehnat qonunlariga rioya etishni nazorat qilish jarayoni",
        isCorrect: false,
      },
    ],
  },
  {
    id: '1-5',
    question:
      "Mehnat nizolarini hal qilishga doir munosabatlar nima aks etadi?",
    variants: [
      {
        name: "A",
        title:
          "bunday nizolar asosan ishni tashkil qilish, dam olishni  belgilash  va  ishlab  chikarishga tatbiq  etish  jarayoni",
        isCorrect: true,
      },
      {
        name: "B",
        title:
          "bunday nizolar asosan ishni tashkil  qilish, ishga kelish va ketish shart-sharoitlapinii  belgilash  va  ishlab  chikarishga  tatiq  etish  jarayoni ",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "bunday nizolar asosan mehnatni tashkil qilish, shart-sharoitlapinii  belgilash  va  ishlab  chikarishga  tatbiq  etish  jarayoni",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "bunday nizolar asosan mehnatni tashkil kilish, ishga kelish va ketish shart-sharoitlapinii  belgilash va  ishlab  chikarish samaradorligini  oshirish jarayoni",
        isCorrect: false,
      },
    ],
  },
  {
    id: '1-6',
    question: "Mehnat huquqi uslubi va vazifalari nimalardan iborat?",
    variants: [
      {
        name: "A",
        title:
          "mehnatga oid munosabatlarni tartibga solinishida Mehnat kodeksiga uyg‘unlashtirilgan xolda qo‘llanilishi",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "mehnatga oid munosabatlarni tartibga solinishida fuqarolik protsessual kodeksiga uyg‘unlashtirilgan xolda qo‘llanilishi",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "mehnatga oid munosabatlarni tartibga solinishida halqaro va markazlashtirilgan  xamda lokal normalar uyg‘unlashtirilgan xolda qo‘llanilishi",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "mehnatga oid munosabatlarni tartibga solinishida mehnatni muhofaza qilish to‘risidagi qonunga uyg‘unlashtirilgan xolda qo‘llanilishi",
        isCorrect: true,
      },
    ],
  },
  {
    id: '1-7',
    question: "Mehnat  huquqi  qanday vazifalarini  bajaradi?",
    variants: [
      {
        name: "A",
        title:
          "davlatni va himoya qilishda iktisodiy, ijtimoiy, siyosiy, ta’lim-tarbiyaviy vazifani bajaradi",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "ishlab chiqarishda va himoya  qilishda iktisodiy,  ijtimoiy,  siyosiy, ta’lim-tarbiyaviy vazifalarni bajaradi",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "hodimlarni himoya qilishda iktisodiy, ijtimoiy, siyosiy, ta’lim-tarbiyaviy vazifani bajaradi",
        isCorrect: true,
      },
      {
        name: "E",
        title:
          "ish beruvchini himoya qilishda iktisodiy, ijtimoiy, siyosiy, ta’lim-tarbiyaviy vazifani bajaradi",
        isCorrect: false,
      },
    ],
  },
  {
    id: '1-8',
    question: "Mehnat huquqi tizimi  deganda nima tushuniladi?",
    variants: [
      {
        name: "A",
        title:
          "mehnat huquqi normalari ilmiy jihatdan asoslangan tarzda joylanish tartibi va klassifikatsiyasi",
        isCorrect: false,
      },
      {
        name: "B",
        title:
          "mehnat munosabatlari normalari nazariy jihatdan asoslangan tarzda joylanish tartibi va klassifikatsiyasi",
        isCorrect: true,
      },
      {
        name: "D",
        title:
          "mehnat munosabatlari normalari amaliy jihatdan asoslangan tarzda joylanish tartibi va klassifikatsiyasi",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "mehnat huquqi normalari amaliy jihatdan asoslangan tarzda ishlab chiqish va tasniflanish",
        isCorrect: false,
      },
    ],
  },
  {
    id: '1-9',
    question: "Mehnat huquqi tizimi  necha qismga bo‘linadi?",
    variants: [
      {
        name: "A",
        title: "uch  qismga: nazariy,  umumiy  va  maxsus kismlarga ",
        isCorrect: true,
      },
      {
        name: "B",
        title: "ikki  qismga:  umumiy  va  maxsus kismlarga",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "to‘rt ikki  qismga:  nazariy,  umumiy, huquqiy  va maxsus kismlarga",
        isCorrect: false,
      },
      {
        name: "E",
        title: "qismlarga bo‘linmagan",
        isCorrect: false,
      },
    ],
  },
  {
    id: '1-10',
    question: "Fuqarolik huquqiy munosabatlar deganda nima tushuniladi?",
    variants: [
      {
        name: "A",
        title:
          "muayyan ish beruvchi topshirig‘ini bajarish yoki faoliyat bilan bog‘liq bo‘lgan xolatlarni o‘rganish va tartibga solishdan iborat",
        isCorrect: true,
      },
      {
        name: "B",
        title:
          "muayyan korxona vazifalarini bajarish yoki ishlash bilan bog‘liq bo‘lgan xolatlarni o‘rganish va tartibga solishdan iborat",
        isCorrect: false,
      },
      {
        name: "D",
        title:
          "muayyan faoliyatini yoki serves bilan bog‘liq bo‘lgan xolatlarni o‘rganish va tartibga solishdan iborat",
        isCorrect: false,
      },
      {
        name: "E",
        title:
          "muayyan mehnat topshirig‘ini bajarish yoki xizmat ko‘rsatish bilan bog‘liq bo‘lgan xolatlarni o‘rganish va tartibga solishdan iborat",
        isCorrect: false,
      },
    ],
  },
];

export default testsModule1;
