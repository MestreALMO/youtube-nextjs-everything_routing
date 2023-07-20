import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "youtube.com/@DeveloperALMO",
  description: "Like the video",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <nav className="flex gap-8 p-8 justify-center">
          <Link href={"/"} className="nav-button">
            Home
          </Link>
          <Link href={"/link"} className="nav-button">
            Link
          </Link>
          <Link href={"/dynamic-routes"} className="nav-button">
            Dynamic Routes
          </Link>
          <Link href={"/parallel-routes"} className="nav-button">
            Parallel Routes
          </Link>
        </nav>
        <hr className="w-[100%] border-black mb-2" />
        {children}
      </body>
    </html>
  );
}
