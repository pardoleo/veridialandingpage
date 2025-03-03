import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ["latin"] });

// O conteúdo abaixo foi removido para não causar conflitos
// na importação de metadatas.
export const metadata: Metadata = {
  title: "Davi Castanha Escribano",
  description: "Desenvolvedor WEB",
  authors:[{ name: "Davi Castanha Escribano", url: "https://www.linkedin.com/in/davicastanhaescribano/" }],
  keywords:"HTML, CSS, JavaScript, React.JS, Bootstrap, Next.JS",

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
