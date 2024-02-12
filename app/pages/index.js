import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import RandomQuotes from "random-quotes";

export default function Home() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    // Fetch a random quote when the component mounts
    const fetchRandomQuote = () => {
      const quote = RandomQuotes();
      setQuote(quote);
    };

    fetchRandomQuote();
  }, []);

  return (
    <Layout>
      <main className="flex flex-col justify-center dark:text-gray-400">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-blue-500 dark:text-blue-400">
            Welcome to our Digital Publishing Platform!
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Welcome to our digital publishing platform, where we showcase the
            culmination of our semester&apos;s learning journey. Our platform is
            designed to empower users to create, publish, and share content
            seamlessly. Whether you are a seasoned writer, a passionate chef, or
            an avid traveler, our application caters to diverse interests,
            allowing users to express themselves and engage with a community of
            like-minded individuals.
          </p>
        </div>
        <div className="text-center mt-8">
          {quote && (
            <div className="mt-4">
              <p className="underline text-blue-500 dark:text-blue-400">
                Here is the quote of the Day:
              </p>
              <blockquote className="italic font-serif">
                <p className="text-gray-700 dark:text-gray-300">
                  &ldquo;{quote.body}&ldquo;
                </p>
                <footer className="text-gray-600 dark:text-gray-400">
                  - {quote.author}
                </footer>
              </blockquote>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
