import React from "react";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="mt-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <button className="bg-white py-2 px-4 text-black rounded flex items-center gap-2 font-semibold hover:translate-x-2 hover:rotate-3 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path d="M20.463,7.713l-9.1-6.677A5.317,5.317,0,0,0,2.9,5.323V18.677a5.311,5.311,0,0,0,8.46,4.287l9.105-6.677a5.315,5.315,0,0,0,0-8.574Zm-1.774,6.155-9.1,6.677A2.317,2.317,0,0,1,5.9,18.677V5.323a2.276,2.276,0,0,1,1.27-2.066A2.328,2.328,0,0,1,8.223,3a2.3,2.3,0,0,1,1.362.455l9.1,6.677a2.316,2.316,0,0,1,0,3.736Z" />
          </svg>
          <p>Listen my life</p>
        </button>
      </div>
    </header>
  );
}
