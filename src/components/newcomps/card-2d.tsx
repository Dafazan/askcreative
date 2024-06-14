import { HoverEffect } from "./service-card";

function CardHoverEffectDemo() {
  return (
    <div className="md:grid sm:grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
      <HoverEffect items={projects} />;
    </div>
  );
}
export const projects = [
  {
    title: "Aromatherapy Workshop",

    link: "https://stripe.com",
  },
  {
    title: "Perfume Workshop",

    link: "https://netflix.com",
  },
  {
    title: "Make your own Perfume and Aromatherapy",

    link: "https://google.com",
  },
];

export default CardHoverEffectDemo;
