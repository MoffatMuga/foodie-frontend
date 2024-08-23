import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "../components/ui/Header";
import MobileNavbar from "../components/ui/Mobile";
import Footer from "../components/ui/Footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Foodie",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={oswald.className}>
        <Header />
        {children}

        {/* <MobileNavbar /> */}
      </body>

    </html>
  );
}
