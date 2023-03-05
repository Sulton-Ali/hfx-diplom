import React from "react";

interface ILink {
  label: string[];
  link: string;
  sublinks?: string;
}
export const links: ILink[] = [
  {
    label: ["Bosh sahifa"],
    link: "/",
  },
  {
    label: ["Mehnatni muhofaza", "qilishning huquqiy asoslari"],
    link: "/legal",
  },
  {
    label: ["Mehnatni muhofaza", "qilishning me`yoriy asoslari"],
    link: "/normative",
  },
  {
    label: ["Mehnatni muhofaza qilish", "bo‘yicha malaka oshirish"],
    link: "/qualification",
  },
  {
    label: ["E’lonlar"],
    link: "/ads",
  },
];
