import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default function Layout({ children, title, description }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow mt-10 mb-10">{children}</main>
      <Footer />
    </div>
  );
}
