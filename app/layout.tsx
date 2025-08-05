import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body className="p-4 lg:pl-96 lg:px-8 py-4 min-h-screen w-full flex flex-col max-w-[1592px] mx-auto">
        <Header />
        <main className="flex-1 relative flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
