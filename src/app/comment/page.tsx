"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Comment() {
  const [input, setInput] = useState("");

  const router = useRouter();

  return (
    <main className="flex flex-col justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/comment/${input}`);
        }}
      >
        <div className="text-xl flex items-center relative">
          <input
            className="border-2 border-gray-950 rounded-lg p-1 pr-7 text-inherit input-select-color"
            value={input}
            onChange={(e) => {
              setInput(e.currentTarget.value);
            }}
          />
          <FaSearch className="text-inherit absolute right-2" />
        </div>
      </form>
    </main>
  );
}
