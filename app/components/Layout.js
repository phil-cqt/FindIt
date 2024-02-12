import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default function Layout({ children, title, description }) {
  return (
      <div className="dark:bg-slate-800 pt-8">
        <Header />
        <main className="py-10 min-h-screen max-w-full md:max-w-2xl md:mx-auto">
          {children}
        </main>
        <Footer />
      </div>
  );
}