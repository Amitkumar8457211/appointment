import "./globals.css";
import "../../public/css/style.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/font-awesome.min.css";
import { Poppins } from 'next/font/google'
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="theme-color" content="#000" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-icon.png"></link> */}
        <body className={poppins.className}>
          <Header />
            {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
