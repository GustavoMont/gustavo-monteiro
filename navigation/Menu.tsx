import { Option } from "@/@types/navigation";

export default function Menu() {
  const options: Option[] = [
    {
      text: "Textos",
      href: "/textos",
    },
    {
      text: "Poemas",
      href: "/poemas",
    },
    {
      text: "Mais",
      href: "/mais",
    },
    {
      text: "Aleatório",
      href: "/aleatorio",
    },
  ];

  return (
    <nav>
      <ul className="flex lg:flex-col lg:items-start justify-center gap-4 items-center">
        {options.map(({ href, text }) => (
          <li key={href}>
            <a href={href} className="text-secondary underline">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
