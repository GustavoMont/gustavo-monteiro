import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gustavo Monteiro - Poemas e Reflexão",
  description: "Poemas, reflexões e tudo mais o que eu quiser",
};

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-primary underline">Hello world!</h1>
      <p className="text-secondary">Muito chique meu bom</p>
    </>
  );
}
