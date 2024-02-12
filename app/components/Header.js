import Link from "next/link";
import React, { useContext } from "react";
import UserContext from "./UserContext";
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { getGravatarUrl } from "../components/Gravatar";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { user, logout } = useContext(UserContext);

  const isActive = (pathname) => {
    return router.pathname === pathname;
  };

  const onClickLogin = async () => {
    router.push("/login");
  };

  const onClickTheme = async () => {
    document.documentElement.classList.toggle("dark");
  };

  const onClickHome = async () => {
    router.push("/");
  };

  const onClickArticles = async () => {
    router.push("/articles");
  };

  const onClickAbout = async () => {
    router.push("/about");
  };

  const onClickContact = async () => {
    router.push("/contacts");
  };

  return (
    <header className="flex justify-center items-center dark:bg-slate-800">
      <div className="flex-1">
        <button
          id="dark-button"
          type="button"
          onClick={onClickTheme}
          className="visible dark:invisible dark:w-0 text-gray-500 dark:text-gray-400 hover:bg-black-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 dark:p-0 dark:bg-slate-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          id="light-button"
          type="button"
          onClick={onClickTheme}
          className="invisible dark:visible text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 dark:bg-slate-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block h-6 w-6"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <ul className="flex justify-center items-center bg-blue-500 rounded-2xl">
          <li
            onClick={onClickHome}
            className={`rounded-xl m-1 py-1 px-4 ${
              isActive("/")
                ? "bg-white text-blue-500 dark:bg-slate-900"
                : "hover:bg-white"
            } text-center flex-1 dark:hover:bg-slate-900 dark:text-slate-50`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={onClickArticles}
            className={`rounded-xl m-1 py-1 px-4 ${
              isActive("/articles")
                ? "bg-white text-blue-500 dark:bg-slate-900"
                : "hover:bg-white"
            } text-center flex-1 dark:hover:bg-slate-900 dark:text-slate-50`}
          >
            <Link href="/articles">Articles</Link>
          </li>
          <li
            onClick={onClickAbout}
            className={`rounded-xl m-1 py-1 px-4 ${
              isActive("/about")
                ? "bg-white text-blue-500 dark:bg-slate-900"
                : "hover:bg-white"
            } text-center flex-1 dark:hover:bg-slate-900 dark:text-slate-50`}
          >
            <Link href="/about">About us</Link>
          </li>
          <li
            onClick={onClickContact}
            className={`rounded-xl m-1 py-1 px-4 ${
              isActive("/contacts")
                ? "bg-white text-blue-500 dark:bg-slate-900"
                : "hover:bg-white"
            } text-center flex-1 dark:hover:bg-slate-900 dark:text-slate-50`}
          >
            <Link href="/contacts">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="flex justify-end items-center">
          {user ? (
            <>
              <li>
                <Image
                  src={getGravatarUrl(user.email)}
                  alt={`Reviewer ${user.email}'s Gravatar`}
                  width={64}
                  height={64}
                  className="h-8 w-8 mr-2 rounded-full border"
                />
              </li>
              <li className="rounded py-1 px-2 border border-black hover:bg-blue-500 hover:text-slate-50 dark:border-white dark:hover:bg-slate-900 dark:text-slate-50">
                <Link
                  href="/profile"
                  className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6"
                >
                  {user ? user.email : ""}
                </Link>
              </li>
              <li className="py-1 px-2 text-slate-800 hover:text-slate-500 mx-4">
                <button
                  className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6 dark:text-slate-50 dark:hover:text-slate-200"
                  onClick={logout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                  </svg>
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6 dark:text-slate-50 dark:hover:text-slate-200"
                onClick={onClickLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                </svg>
              </button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
