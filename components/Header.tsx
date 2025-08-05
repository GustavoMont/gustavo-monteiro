import Menu from "@/components/ui/navigation/Menu";
import { Avatar } from "./Avatar";
import { InstagramIcon } from "./icons/SocialMedia";
import { Divider } from "./ui/Divider";

export function Header() {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  );
}

function MobileHeader() {
  return (
    <header className="flex flex-col gap-4 mb-4 lg:hidden">
      <h1 className="text-primary text-2xl font-medium">Gustavo Monteiro</h1>
      <Presentation />
      <Menu />
      <Divider />
    </header>
  );
}

function DesktopHeader() {
  return (
    <>
      <aside className="hidden fixed h-screen top-0 left-8 w-80 lg:flex flex-col py-4 justify-between">
        <Presentation />
        <Menu />
      </aside>
      <header className="hidden lg:flex flex-col gap-6 mb-6">
        <h1 className="text-primary text-2xl font-medium">Gustavo Monteiro</h1>
        <Divider />
      </header>
    </>
  );
}

function Presentation() {
  return (
    <div className="flex gap-2 items-center lg:flex-col">
      <Avatar />
      <div className="flex flex-col gap-1">
        <p>Olá, sou o Gustavo, e espero que goste do que eu escrevo</p>
        <InstagramIcon className="w-6 fill-secondary" />
      </div>
    </div>
  );
}
