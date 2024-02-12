import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function EditArticle() {
  const editorRef = useRef(null);

  const [article, setArticle] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
    category: "",
    tags: "",
  });
  const [message, setMessage] = useState(null);
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const articleIdToEdit = router.query.id;

      if (articleIdToEdit) {
        try {
          const { data: articleData, error: articleError } = await supabase
            .from("articles")
            .select(`id, title, author, date, content, category, tags`)
            .eq("id", articleIdToEdit)
            .single();

          if (articleError) {
            console.error("Supabase article error:", articleError);
            return;
          }

          setArticle(articleData);
        } catch (error) {
          console.error("Error fetching article data:", error.message);
        }
      }
    };

    fetchData();
  }, [supabase, router.query.id]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const newArticle = {
      ...article,
      date: new Date(),
      author: user.email,
      content: editorRef.current.getContent(),
    };

    setArticle(newArticle);

    if (router.query.id) {
      try {
        const { data, error } = await supabase
          .from("articles")
          .update([
            {
              title: newArticle.title,
              content: newArticle.content,
              category: newArticle.category,
              tags: newArticle.tags,
            },
          ])
          .eq("id", router.query.id)
          .select();

        if (error) {
          console.error("Supabase error:", error.message);
          setMessage(`Error: ${error.message}`);
        } else {
          setMessage("Article updated successfully!");
        }
      } catch (error) {
        console.error("Error updating article:", error.message);
      }
    } else {
      try {
        const { data, error } = await supabase
          .from("articles")
          .insert([
            {
              title: newArticle.title,
              author: newArticle.author,
              date: newArticle.date,
              content: newArticle.content,
              category: newArticle.category,
              tags: newArticle.tags,
            },
          ])
          .select();

        if (error) {
          console.error("Supabase error:", error.message);
          setMessage(`Error: ${error.message}`);
        } else {
          setMessage("Article created successfully!");
        }
      } catch (error) {
        console.error("Error creating article:", error.message);
      }
    }

    setArticle({
      title: "",
      author: "",
      date: "",
      content: "",
      category: "",
      tags: "",
    });
    router.push("/articles");
  };

  return (
    <Layout>
      {router.query.id ? (
        <form onSubmit={onSubmit}>
          <div className="w-full mb-4 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-2xl dark:bg-gray-800">
              <input
                id="title"
                rows="1"
                className="rounded-2xl block w-full px-2 text-gray-800 bg-white border border-slate-300 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                required
                value={article.title}
                onChange={(e) =>
                  setArticle({ ...article, title: e.target.value })
                }
              ></input>
              <input
                id="category"
                rows="1"
                className="rounded-2xl block w-full px-2 text-gray-800 bg-white border border-slate-300 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                required
                value={article.category}
                onChange={(e) =>
                  setArticle({ ...article, category: e.target.value })
                }
              ></input>
              <input
                id="tags"
                rows="1"
                className="rounded-2xl w-full px-2 text-gray-800 bg-white border border-slate-300 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                required
                value={article.tags}
                onChange={(e) =>
                  setArticle({ ...article, tags: e.target.value })
                }
              ></input>
              <Editor
                apiKey="w4fo3azsc57sqxfu8ryv1ft0bvi6lg6x5lgyw4wq4wlmj5iz"
                onInit={(evt, editor) => (editorRef.current = editor)}
                onChange={(e) =>
                  setArticle({ ...article, content: e.target.value })
                }
                initialValue={article.content}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-500 rounded focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-600"
              onClick={() => router.push('/articles')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-500 rounded focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-500"
            >
              Update
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="w-full mb-4 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-2xl dark:bg-gray-800">
              <input
                id="title"
                rows="1"
                className="rounded-2xl block w-full px-2 text-gray-800 bg-white border border-slate-300 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Your title"
                required
                value={article.title}
                onChange={(e) =>
                  setArticle({ ...article, title: e.target.value })
                }
              ></input>
              <input
                id="category"
                rows="1"
                className="rounded-2xl block w-full px-2 text-gray-800 bg-white border border-slate-300 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Category"
                required
                value={article.category}
                onChange={(e) =>
                  setArticle({ ...article, category: e.target.value })
                }
              ></input>
              <input
                id="tags"
                rows="1"
                className="rounded-2xl w-full px-2 text-gray-800 bg-white border border-slate-300 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Tags"
                required
                value={article.tags}
                onChange={(e) =>
                  setArticle({ ...article, tags: e.target.value })
                }
              ></input>
              <Editor
                apiKey="w4fo3azsc57sqxfu8ryv1ft0bvi6lg6x5lgyw4wq4wlmj5iz"
                onInit={(evt, editor) => (editorRef.current = editor)}
                onChange={(e) =>
                  setArticle({ ...article, content: e.target.value })
                }
                initialValue=""
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  placeholder: "Write your article...",
                }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-500 rounded focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-600"
              onClick={() => router.push('/articles')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-500 rounded focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-500"
            >
              Publish
            </button>
          </div>
        </form>
      )}
    </Layout>
  );
}
