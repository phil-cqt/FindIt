import React, { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@supabase/auth-helpers-react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { getGravatarUrl } from "../components/Gravatar";
import Image from "next/image";

export default function ShowArticle() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  const [article, setArticle] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
    category: "",
    tags: "",
  });
  const [review, setReview] = useState({
    article_id: "",
    author: user?.email || "",
    date: "",
    content: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const articleId = router.query.id;

      if (articleId) {
        try {
          const { data: articleData, error: articleError } = await supabase
            .from("articles")
            .select(`id, title, author, date, content, category, tags`)
            .eq("id", articleId)
            .single();

          if (articleError) {
            console.error("Supabase article error:", articleError);
            return;
          }

          setArticle(articleData);
          const { data: reviewsData, error: reviewsError } = await supabase
            .from("reviews")
            .select(`author, date, content`)
            .eq("article_id", articleId);

          if (reviewsError) {
            console.error("Supabase reviews error:", reviewsError);
            return;
          }

          setArticle({
            ...articleData,
            reviews: reviewsData || [],
          });
        } catch (error) {
          console.error("Error fetching article data:", error.message);
        }
      }
    };

    fetchData();
  }, [router.query.id, supabase, user]);

  const onClickEditArticle = () => {
    router.push(`/editArticle?id=${article.id}`);
  };

  const deleteArticle = async () => {
    try {
      const { data, error } = await supabase
        .from("articles")
        .delete()
        .eq("id", article.id);

      if (error) {
        console.error("Error deleting article:", error.message);
        return;
      }

      console.log("Article deleted successfully:", data);
      router.push("/articles"); // Redirect to the article list or another page after deletion
    } catch (error) {
      console.error("Error deleting article:", error.message);
    }
  };

  const submitReview = async (e) => {
    e.preventDefault();

    const newReview = {
      ...review,
      article_id: article.id, // Set the article_id to the current article's id
      date: new Date().toISOString(),
    };

    try {
      const { data, error } = await supabase
        .from("reviews")
        .insert([newReview])
        .select();

      if (error) {
        console.error("Supabase error:", error.message);
      } else {
        console.log("Review created successfully:", data);
        // Refresh article data after review submission
        fetchData();
      }
    } catch (error) {
      console.error("Error creating review:", error.message);
    }

    setReview({
      article_id: article.id,
      author: user?.email || "",
      date: "",
      content: "",
    });
  };

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <div className="dark:bg-slate-800">
        <div className="items-center mt-10 dark:text-slate-50">
          <h1 className="italic text-4xl font-bold text-blue-500 mb-6 dark:text-slate-50">
            {article.title}
          </h1>
          <div className="text-base italic text-gray-600 mb-4 dark:text-gray-300">
            <p>
              <div className="flex flex-row">
                <Image
                  src={getGravatarUrl(article.author)}
                  alt={`Reviewer ${article.author}'s Gravatar`}
                  width={100}
                  height={100}
                  className="h-8 w-8 mr-2 rounded-full border"
                />
                <p>
                  By {article.author} | Published on {article.date} 
                </p>
                {user?.email === article.author && (
                <>
                  <button
                    className="text-white bg-blue-500 hover:text-slate-200 p-1 mx-2 rounded dark:hover:bg-slate-900"
                    onClick={onClickEditArticle}
                  >
                    Edit
                  </button>
                  <button
                    className="text-white bg-blue-500 hover:text-slate-200 p-1 mx-2 rounded dark:hover:bg-slate-900"
                    onClick={deleteArticle}
                  >
                    Delete
                  </button>
                </>
              )}
              </div>
            </p>
          </div>
          <div className="text-black text-2xl rounded p-1 text-xs text-gray-500 mb-6 dark:text-gray-400">
            <p>Category: {article.category}</p>
            <p>Tags: {article.tags}</p>
          </div>
          <div className="text-lg text-justify leading-relaxed mb-4 dark:text-gray-300">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          <div>
            <div className="ml-4">
              {article.reviews && article.reviews.length > 0 && (
                <>
                  <p className="mb-4">
                    <span className="text-lg font-semibold underline">
                      Reviews
                    </span>
                  </p>
                  <ul>
                    {article.reviews.map((review, index) => (
                      <li key={index} className="mb-4">
                        <div className="flex flex-row">
                          <Image
                            src={getGravatarUrl(review.author)}
                            alt={`Reviewer ${review.author}'s Gravatar`}
                            width={40}
                            height={40}
                            className="h-8 w-8 mr-2 rounded-full border"
                          />
                          <p className="text-xs italic text-gray-500 mb-2 dark:text-gray-400">
                            By {review.author} | Published on {review.date}
                          </p>
                        </div>
                        <p className="text-xs text-justify leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                          {review.content}
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <h1>Leave a review:</h1>
              <input
                id="New review address"
                rows="1"
                className="block w-full px-2 mb-1 text-sm text-gray-800 bg-white border-gray-200 rounded dark:placeholder-gray-400 focus:ring-0 dark:focus:ring-gray-700"
                placeholder="@"
                value={review.author}
                onChange={(e) =>
                  setReview({
                    ...review,
                    author: e.target.value,
                  })
                }
                required
              ></input>
              <textarea
                id="New review"
                rows="2"
                className="block w-full px-2 text-sm text-gray-800 border-gray-200 bg-white rounded dark:placeholder-gray-400 focus:ring-0 dark:focus:ring-gray-700 dark:bg-slate-50"
                placeholder="Review"
                required
                value={review.content}
                onChange={(e) =>
                  setReview({ ...review, content: e.target.value })
                }
              ></textarea>
              <button
                type="button"
                className="inline-flex items-center px-5 py-1 mt-1 text-sm font-medium text-center text-white bg-blue-500 rounded focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                disabled={!review.author || !review.content}
                onClick={submitReview}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
