import React from "react";
import Link from "next/link";

const Header = ({ onClickLogin }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-600 text-white">
      {/* Find'It title */}
      <Link href="/" passHref>
        <h1 className="cursor-pointer text-2xl font-bold">Find'It</h1>
      </Link>
      
      {/* Account button */}
      <button
        className="flex items-center gap-2 hover:text-slate-200"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
