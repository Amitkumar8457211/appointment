import "./globals.css";
import { Inter } from "next/font/google";

import "../../public/css/style.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/font-awesome.min.css";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TMP Direct",
  description: "BPO services in United States",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <Head>
          <title>TMP Direct</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
          <script
            defer={true}
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
            crossorigin="anonymous"
          ></script>
        </Head>
        <body className={inter.className}>
          <Header />

          {children}

          <Footer />
        </body>
      </html>
    </>
  );
}
