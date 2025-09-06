import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ["latin"] });

// O conteúdo abaixo foi removido para não causar conflitos
// na importação de metadatas.
export const metadata: Metadata = {
  title: "Veridia MMO",
  description: "Veridia MMO - A massive multiplayer online game.",
  authors:[{ name: "Veridia MMO", url: "www.veridiammo.com" }],
  keywords:"MMO, PvP, Unreal, Team, Guild, UX, Engine, .NET, ASP.NET, C++",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
