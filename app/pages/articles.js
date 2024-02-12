import React, { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@supabase/auth-helpers-react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { getGravatarUrl } from "../components/Gravatar";
import Image from "next/image";

export default function Article() {
  const [articles, setArticles] = useState([]);
  const [articlesWithReviews, setArticlesWithReviews] = useState([]);
  const [articlesWithReviewsData, setArticlesWithReviewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  const onClickNewArticle = async () => {
    setSearchQuery("");
    router.push("/editArticle");
  };

  const onClickSelectArticle = async (article) => {
    router.push(`/showArticle?id=${article.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: articlesData, error: articlesError } = await supabase
          .from("articles")
          .select(`id, title, author, date, content, category, tags`)
          .ilike("title", `%${searchQuery}%`);
        // .ilike("author", `%${searchQuery}%`)
        // .ilike("category", `%${searchQuery}%`)
        // .ilike("tags", `%${searchQuery}%`);

        if (articlesError) {
          console.error("Supabase articles error:", articlesError);
          return;
        }

        const { data: reviewsData, error: reviewsError } = await supabase
          .from("reviews")
          .select(`article_id, author, date, content`);

        if (reviewsError) {
          console.error("Supabase reviews error:", reviewsError);
          return;
        }

        setArticles(articlesData);
        setArticlesWithReviews(reviewsData);

        const articlesWithReviewsData = articlesData.map((article) => ({
          ...article,
          reviews: reviewsData.filter(
            (review) => review.article_id === article.id
          ),
        }));

        setArticlesWithReviewsData(articlesWithReviewsData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [searchQuery, supabase]);

  return (
    <Layout>
      <div className="dark:bg-slate-800">
        {user && (
          <div className="flex justify-center items-center w-1/2 mx-auto text-slate-50 bg-blue-500 rounded-2xl mb-4">
            <button
              className="w-full text-slate-50 hover:bg-white hover:text-blue-500 m-1 py-1 rounded-xl dark:bg-slate-800"
              onClick={onClickNewArticle}
            >
              WRITE ARTICLE
            </button>
          </div>
        )}

        <div className="flex justify-center items-center mx-auto mb-4">
          <div className="w-1/2 bg-white rounded-2xl border border-gray-300 overflow-hidden">
            <input
              type="text"
              placeholder="Search articles"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full px-2 py-2 text-sm text-gray-800 border-0 rounded focus:ring-0 focus:border-gray-400 dark:placeholder-gray-400 dark:focus:border-gray-600 bg-slate-50 dark:text-black"
            />
          </div>
        </div>

        <div className="italic font-bold flex flex-col items-center mt-10 dark:text-slate-50">
          <ul>
            {articlesWithReviewsData
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((article) => (
                <li
                  className="p-10 border-b-2 border-gray-300"
                  key={article.id}
                  onClick={() => onClickSelectArticle(article)}
                >
                  <div className="flex flex-row">
                    <Image
                      src={getGravatarUrl(article.author)}
                      alt={`Reviewer ${article.author}'s Gravatar`}
                      width={80}
                      height={80}
                      className="h-8 w-8 mr-2 rounded-full border"
                    />
                    <h1 className="text-4xl font-bold text-blue-500 mb-6 dark:text-slate-50">
                      {article.title}
                    </h1>
                  </div>
                  <p className="text-sm italic text-gray-600 mb-4 dark:text-gray-300">
                    By {article.author} | Published on {article.date}
                  </p>
                  <div className="text-black text-xs rounded p-1 text-xs italic text-gray-500 mb-2 dark:text-gray-400">
                    <p>Category: {article.category}</p>
                    <p>TAGS: {article.tags}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
