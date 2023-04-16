import about from "../../assets/images/hfx_about.jpeg";
import gtlMain from "../../assets/images/uz_gtl_main.jpeg";
import gtlPlatform from "../../assets/images/uz_gtl_platform.jpeg";

export interface IHeroSlideItem {
  title: string;
  description: string;
  link: string;
  img: string;
  reverse?: boolean;
}

export const slideItems: IHeroSlideItem[] = [
  {
    title: "Mehnat muhofazasi nima?",
    description:
      "«Mehnatni muhofaza qilish» insonning ishlab chiqarishdagi faoliyatida sodir bo‘ladigan turli ko‘rinishdagi xavflarni bartaraf etish va ulardan himoyalanish yo‘llarini o‘rganishga qaratilgan tadbirlar majmui va vositalar tizimidan iboratdir",
    link: "#",
    img: about,
    reverse: false,
  },
  {
    title: "Uzbekiston GTL",
    description:
      '"Uzbekistan GTL" dunyodagi eng ilgor korxonalardan biri bo`lib, yuqori sifatli yoqilg`i mahsulotlarini ishlab chiqaradi',
    link: "/gtl",
    img: gtlMain,
    reverse: true,
  },
  {
    title: "Uzbekiston GTL",
    description:
      "Mehnatni muhofaza qilishga o'qitish va yo'riqnomadan o'tkazish platformasi haqida",
    link: "/gtl-platform",
    img: gtlPlatform,
    reverse: false,
  },
];
