import NavBar from "@/components/navBar";
import "../styles/globals.css";
import { ReactNode } from "react";
import Fotter from "@/components/fotter";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <title>Grand Express</title>
      <link rel="icon" href="/favicon.ico"/>
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Fotter />
      </body>
    </html>
  );
}
