import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const Outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "PortFolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark overflow-x-hidden">
      <body className={`${Outfit.className} ${Ovo.className} antialiased leading-8 dark:bg-darkTheme dark:text-white overflow-x-hidden `}>
        {children}
      </body>
    </html>
  );
}
