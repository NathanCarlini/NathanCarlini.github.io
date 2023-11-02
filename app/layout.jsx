import Image from "next/image";
import Link from 'next/link'
import "next"
// import GitHub from "./github.png";
// import LinkedIn from "./linkedin.png";
// import Logo from "./app/logo.png";

export default function RootLayout({ children }) {
  return (
    <html className="bg-black">
      <body className="">
        <main className="flex flex-row">
          <nav className="flex h-screen flex-col items-center justify-between p-1 sm:max-w-[7vw] lg:min-w-20 bg-white">
            <Image
              src="/logo.png"
              alt="toto1"
              className="w-full mt-2 "
              width={1020}
              height={1046}
            />
            <div className="m-3">
            <Link href="https://github.com/NathanCarlini">
              <Image
                src="/github.png"
                alt="toto"
                className=" aspect-square w-full"
                width={1059}
                height={1059}
              /> </Link>
              <Link href="https://www.linkedin.com/in/nathan-carlini/">
              <Image
                src="/linkedin.png"
                alt="toto"
                className=" aspect-square w-full"
                width={1059}
                height={1059}
              />
              </Link>
            </div>
          </nav>
          <div className="grow bg-black">
            <header className="flex flex-row items-center justify-between border-b-2 border-purp lg:h-[8%] font-semibold">
              <p className="p-4 pl-5 text-xl capitalize text-purp xl:text-5xl">
                Nathan CARLINI
              </p>
              <div className="flex h-full items-center bg-purp px-8 py-4 text-lg xl:text-2xl ">
                <p>Contact</p>
              </div>
            </header>
            <div className="p-2 lg:p-6 ">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
