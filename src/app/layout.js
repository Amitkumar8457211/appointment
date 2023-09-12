import "./globals.css";
import { Inter } from "next/font/google";

import "../../public/css/style.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/font-awesome.min.css";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "TMP Direct",
//   description: "BPO services in United States",
// };

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
