import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        width={130}
        height={100}
        className="max-w-[100px] md:max-w-[165px] w-auto h-auto"
        src="/assets/lws_logo.png"
        alt="Lws Logo"
      />
    </Link>
  );
}
