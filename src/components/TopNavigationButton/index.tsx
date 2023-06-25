"use client";

import { useEffect, useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";

export function TopNavigationButton() {
  const [showTopIcon, setShowTopIcon] = useState(true);
  const onClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const changeShow = () => {
      if (window.pageYOffset === 0) {
        setShowTopIcon(false);
      } else {
        setShowTopIcon(true);
      }
    };

    window.addEventListener("scroll", changeShow);

    return () => window.removeEventListener("scroll", changeShow);
  }, [setShowTopIcon]);

  return (
    <button
      onClick={onClickTop}
      className="h-10 w-10 fixed right-8 bottom-3 shadow-xl rounded-full z-docked bg-white hover:bg-primary hover:text-white"
    >
      <AiFillCaretUp className="mx-auto" />
    </button>
  );
}
