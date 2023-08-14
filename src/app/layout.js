import "./globals.css";
import { Inter } from "next/font/google";

import "../../public/css/style.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/font-awesome.min.css";
import Footer from "@/components/Footer";
import SmallFooter from "@/components/SmallFooter";
import SmallHeader from "@/components/SmallHeader";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TMP Direct",
  description: "BPO services in United States",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <body className={inter.className}>
          <SmallHeader />
          <Header />

          {children}

          <Footer />

          <SmallFooter />
        </body>
      </html>
    </>
  );
}
