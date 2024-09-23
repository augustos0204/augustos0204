import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LogoComponent from "@/components/logo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  weight: ['100', "200", "300", "400", "500", "600"],
  variable: '--font-poppins',
  display: 'swap',
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Portfolio Augustos0204",
  description: "Portfolio of Augustos0204",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={
          cn(
            `${geistSans.variable} ${geistMono.variable} antialiased ${poppins.variable}`,
            'w-screen h-screen'
          )
        }
      >
        {/* <header className={cn(
          "w-full h-16 p-3",
          "flex justify-evenly items-center",
        )}>
          <LogoComponent/>
        </header> */}
        {children}
      </body>
    </html>
  );
}
