import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signaux Paris X",
  description: "Agrégateur de signaux de paris sportifs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-zinc-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
