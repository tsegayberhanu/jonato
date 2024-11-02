import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import AppContextProvider from "./Contexts/AppContextProvider";
export const metadata: Metadata = {
  title: "Jonato",
  description: `Earn Rewards Effortlessly\nDiscover Jonato, the innovative Telegram app that lets you earn rewards simply by tapping. No complex tasks, no time-consuming activities – just easy, fun, and rewarding.`,
};
import AppMenu from "./Components/AppMenu";
import Script from "next/script";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"></Script>
      </head>
      <body className={inter.className}>
        <main className="overflow-y pb-28 pt-6">
          <AppContextProvider>{children}</AppContextProvider>
        </main>
        <footer >
          <AppMenu />
        </footer>
      </body>
    </html>
  );
}
