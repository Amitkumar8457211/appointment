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
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="theme-color" content="#000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
