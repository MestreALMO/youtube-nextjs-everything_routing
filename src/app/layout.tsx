import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "youtube.com/andrelusegardis",
  description: "subscribe, leave a like",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex gap-8 p-8 justify-center">
          <Link href={"/"} className="nav-button">
            Home
          </Link>
          <Link href={"/subscribe"} className="nav-button">
            Subscribe
          </Link>
          <Link href={"/like"} className="nav-button">
            Like
          </Link>
          <Link href={"/comment"} className="nav-button">
            Comment
          </Link>
        </nav>
        <hr className="w-[100%]" />
        {children}
      </body>
    </html>
  );
}
