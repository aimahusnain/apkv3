import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/src/providers/next-auth-provider";
import NextThemeProvider from "@/src/providers/theme-provider";
import GlobalState from "@/src/context";
import Header from "@/src/components/header";
import { Toaster } from "@/src/components/ui/toaster"
import Footer from '@/src/components/Footer'
const inter = Inter({ subsets: ["latin"] });
import {Providers} from "./Provider";

export const metadata: Metadata = {
  title: "Alight Motion MOD APK 2024 with Pro Features, No Watermark, and Ad-Free Experience!",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen font-sans dark:bg-black ${inter.className}`}>
        <NextThemeProvider>
          <NextAuthProvider>
            <GlobalState>
              <Header />
              <Providers>
              {children}
              </Providers>
              {/* <Footer /> */}
              <Toaster />
            </GlobalState>
          </NextAuthProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
