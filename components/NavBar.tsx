"use client";

import Link from "next/link";

import { GithubIcon, HeyGenLogo } from "./Icons";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-[1000px] m-auto p-6">
        <div className="flex flex-row items-center gap-4">
          <Link href="https://www.puertoalicante.com/" target="_blank">
            <HeyGenLogo />
          </Link>
          <div className="bg-gradient-to-br from-sky-300 to-indigo-500 bg-clip-text">
            <p className="text-xl font-semibold text-transparent">
              Cora - Avatar para el Puerto de Alicante
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <Link
            href="https://www.puertoalicante.com/el-puerto/prevision-buques/"
            target="_blank"
          >
            Puerto de Alicante
          </Link>
        </div>
      </div>
    </>
  );
}
