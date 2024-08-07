import { HoverEffect } from "./service-card";

function CardHoverEffectDemo() {
  return (
    <div className="md:grid sm:grid md:grid-cols-3 grid-cols-2  gap-4 gap-y-10 w-full">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Workshop Aromaterapi",

    link: "/workshop_aromaterapi",
  },
  {
    title: "Workshop Parfum",

    link: "/workshop_parfum",
  },
  {
    title: "Buat Parfum dan Aromaterapi kamu sendiri",

    link: "/",
  },
  {
    title: "Alat Labolatorium Skala Mikro",

    link: "/produk_labtool",
  },
  {
    title: "Bahan Parfum dan Aromaterapi",

    link: "/produk_bahan",  
  },
  {
    title: "Produk Parfum dan Aromaterapi",

    link: "/produk",
  },
];

export default CardHoverEffectDemo;
