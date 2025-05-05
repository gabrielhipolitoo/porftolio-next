import type { Metadata } from "next";
import "./globals.css";
import { work_sans } from "@/fonts";
import Header from "@/pages/header/header";
import Footer from "@/pages/footer/Footer";

export const metadata: Metadata = {
  title: "Gabriel Hipólito",
  description:
    "Crio ideias de design personalizadas com base no seu negócio. Me chama e a gente conversa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <main
          className={
            `grid grid-col relative  gap-[200px] w-[90%] m-auto min-2xl:w-[80%]  ` +
            work_sans.className
          }
        >
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
