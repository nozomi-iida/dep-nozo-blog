import { pagesPath } from "@/lib/pathpida/$path";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-header bg-white">
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
