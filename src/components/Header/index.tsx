"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { SearchIcon } from "../Icons/SearchIcon";
import { useRouter } from "next/navigation";
import { pagesPath } from "@/lib/pathpida/$path";

export function Header() {
  const router = useRouter();
  const [showShadow, setShowShadow] = useState(false);
  const [keyword, setKeyword] = useState("");
  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?keyword=${keyword}`);
  };

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
        showShadow ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex m-auto px-4 justify-between">
          <Link href={pagesPath.$url()}>
            <h1 className="whitespace-nowrap text-4xl leading-header">
              Nozo Blog
            </h1>
          </Link>
          <Popover className="relative flex">
            <Popover.Button className="group px-3 py-2 text-base hover:text-primary focus:outline-none">
              <SearchIcon />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-full right-0 z-popover w-80">
                <div className="overflow-hidden rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white p-7">
                    <form
                      className="border-b border-gray-500 py-1 flex items-center"
                      onSubmit={onSearch}
                    >
                      <input
                        autoFocus
                        placeholder="Enter your search query..."
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                      <button>
                        <SearchIcon className="w-4" />
                      </button>
                    </form>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </header>
  );
}
