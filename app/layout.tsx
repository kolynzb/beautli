import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const poppins = Poppins({
  weight: ["300","500","400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beautli",
  description: "Beautli Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="flex  min-h-screen flex-col items-center justify-between">
          <div className="z-10 max-w-xl  flex-col min-h-screen border-gray-100 border-l-2 border-r-2 w-full items-center justify-start  text-sm lg:flex">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
