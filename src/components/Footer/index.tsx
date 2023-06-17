import Link from "next/link";
import { SiTwitter } from "react-icons/si";

export function Footer() {
  return (
    <div className="relative py-14 px-4 border-t border-border after:content-[''] after:h-0.5 after:w-10 after:-top-0.5 after:left-0 after:absolute after:bg-black">
      <div className="flex justify-between items-center">
        <p>
          Thanks for the visit <b>Nozo Blog</b>
        </p>
        <div className="flex">
          <Link
            href="https://twitter.com/nozo_i0106"
            target="_blank"
            className="text-blue-500"
          >
            <SiTwitter size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
