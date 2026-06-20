import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Aditya Patil | Portfolio",
  description: "B.Tech CSE Student at MANIT Bhopal | Competitive Programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased font-outfit text-gray-900 dark:text-gray-100 selection:bg-rose-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
