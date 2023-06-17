"use client";

import { pagesPath } from "@/lib/pathpida/$path";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const addShadow = () => {
      if (window.pageYOffset === 0) {
        setShowShadow(false);
      } else {
        setShowShadow(true);
      }
    };

    window.addEventListener("scroll", addShadow);
    return () => window.removeEventListener("scroll", addShadow);
  }, [setShowShadow]);

  return (
    <header
      className={`fixed top-0 w-full z-header bg-white transition-shadow ${
        showShadow && "shadow-md"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex m-auto px-4 justify-between">
          <Link href={pagesPath.$url()}>
            <h1 className="whitespace-nowrap text-4xl leading-header">
              Nozo Blog
            </h1>
          </Link>
          {/* <div className="flex gap-4"></div> */}
        </div>
      </div>
    </header>
  );
}
