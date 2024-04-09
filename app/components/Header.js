import React from "react";
import Link from "next/link";

const Header = ({ onClickLogin }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-600 text-white">
      {/* Find'It title */}
      <Link href="/" passHref>
        <h1 className="cursor-pointer text-2xl font-bold">Find'It</h1>
      </Link>
      
      {/* Help and About buttons */}
      <div className="flex items-center gap-4">
        {/* Help button */}
        <Link href="/help" passHref>
          <button className="text-sm font-bold hover:text-gray-300 focus:outline-none font-bold">Aide</button>
        </Link>
        
        {/* About button */}
        <Link href="/about" passHref>
          <button className="text-sm font-bold hover:text-gray-300 focus:outline-none font-bold">&Agrave; propos</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
