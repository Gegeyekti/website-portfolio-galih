import { Playfair_Display, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export const metadata = {
  title: "Portofolio | Galih Yekti",
  description: " Portofolio Website Galih Parlambang Yekti 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${playfair.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
