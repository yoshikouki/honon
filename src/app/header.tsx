import { url } from "@/lib/url";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.webp";

export const Header = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-4 p-4">
      <div className="flex w-full min-w-xs max-w-xl items-center justify-center">
        <Link
          gap-1
          href={url.root}
          className="flex items-center justify-center gap-1"
        >
          <Image src={Logo} alt="honon" width={80} height={80} />
          <h1 className="font-black text-6xl">HonoN</h1>
        </Link>
      </div>
    </header>
  );
};
