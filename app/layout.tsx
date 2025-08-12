import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ["latin"] });

// O conteúdo abaixo foi removido para não causar conflitos
// na importação de metadatas.
export const metadata: Metadata = {
  title: "Leonardo Castanha Escribano",
  description: "Desenvolvedor de Jogos, Desenvolvedor C#",
  authors:[{ name: "Leonardo Castanha Escribano", url: "https://www.linkedin.com/in/leonardo-castanha-escribano-640b8b17a/" }],
  keywords:"C#, Unity, Unreal, POO, UI, UX, Engine, .NET, ASP.NET, C++",

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
