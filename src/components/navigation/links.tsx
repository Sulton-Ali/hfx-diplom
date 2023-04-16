interface ILink {
  label: string[];
  link: string;
  sublinks?: string;
}
export const links: ILink[] = [
  {
    label: ["Biz haqimizda"],
    link: "/",
  },
  {
    label: ["Mehnatni muhofaza", "qilishning huquqiy asoslari"],
    link: "/legal",
  },
  {
    label: ["Sanoat", "xavfsizligi"],
    link: "/normative",
  },
  {
    label: ["Atrof-muhit", "muhofazasi"],
    link: "/environment",
  },
  {
    label: ["O'quv uslubiy", "yordam"],
    link: "/teach-support",
  },
  {
    label: ["E’lonlar"],
    link: "/ads",
  },
];
