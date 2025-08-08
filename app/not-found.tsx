"use client";

import { options } from "@/components/ui/navigation/Menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import soonAnimation from "@/assets/images/soon-animation.gif";

function NotFoundPage() {
  const pathname = usePathname();

  const isSoonPage = options.some(
    ({ href }) => pathname.includes(href) && !pathname.includes("posts"),
  );

  if (isSoonPage) {
    return (
      <div className="flex-1 flex items-center flex-col justify-center gap-2">
        <h1 className="text-error text-3xl font-medium">
          Putz, temos trabalho não terminado aqui (ಥ﹏ಥ)
        </h1>
        <p>Calma, em breve vai estar pronto \ (•◡•) /</p>
        <Image
          alt="Animação de Construção"
          src={soonAnimation}
          className="w-8/12 aspect-video object-cover rounded-3xl"
        />
      </div>
    );
  }

  return (
    <div className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8 absolute w-full top-1/2 -translate-y-1/2">
      <div className="text-center">
        <p className="text-base font-semibold text-secondary">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-primary sm:text-7xl">
          Página não encontrada
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-base-content sm:text-xl/8">
          Foi mal, não foi possível encontrar a página que você procurou.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Ir Para home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
