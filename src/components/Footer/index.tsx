import Link from "next/link";
import { SiTwitter } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Footer() {
  return (
    <div className="relative py-14 px-4 border-t border-border after:content-[''] after:h-0.5 after:w-10 after:-top-0.5 after:left-0 after:absolute after:bg-black">
      <div className="flex justify-between items-center gap-4">
        <p>
          Thanks for the visit <b>Nozo Blog</b>
        </p>
        <div className="flex gap-1">
          <Link
            href="https://twitter.com/nozo_i0106"
            target="_blank"
            className="text-blue-500"
          >
            <SiTwitter />
          </Link>
          <Link href="https://github.com/nozomi-iida" target="_blank">
            <AiFillGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/nozomi-iida/" target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}
