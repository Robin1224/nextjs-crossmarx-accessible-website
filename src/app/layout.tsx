import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { AuthContextProvider } from "../context/AuthContext";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foot and Handprint Calculator",
  description: "Krijg inzicht over uw ecologische foot- en handprint",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${urbanist.className} bg-main-gradient`}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
